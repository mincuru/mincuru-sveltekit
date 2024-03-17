import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface RdsProps {
  vpc: cdk.aws_ec2.Vpc;
  secret: cdk.aws_secretsmanager.Secret;
}

export class Rds extends Construct {
  public readonly securityGroupSourceRds: cdk.aws_ec2.SecurityGroup;
  public readonly securityGroupRdsProxy: cdk.aws_ec2.SecurityGroup;
  public readonly securityGroupApiLambda: cdk.aws_ec2.SecurityGroup;
  public readonly proxyRds: cdk.aws_rds.DatabaseProxy;
  constructor(scope: Construct, id: string, props: RdsProps) {
    super(scope, id);

    // ECS用セキュリティグループ
    this.securityGroupSourceRds = new cdk.aws_ec2.SecurityGroup(
      this,
      "SourceSecurityGroup",
      {
        securityGroupName: "SourceSecurityGroup",
        vpc: props.vpc,
      }
    );

    // API Lambda用セキュリティグループ
    this.securityGroupApiLambda = new cdk.aws_ec2.SecurityGroup(
      this,
      "SecurityGroupApiLambda",
      {
        securityGroupName: "lambda-rdsproxy-z",
        vpc: props.vpc,
      }
    );

    // RDS Proxy用セキュリティグループ
    this.securityGroupRdsProxy = new cdk.aws_ec2.SecurityGroup(
      this,
      "SecurityGroupRdsProxy",
      {
        vpc: props.vpc,
        securityGroupName: "rdsproxy-lambda-z",
        allowAllOutbound: true,
      }
    );
    this.securityGroupRdsProxy.addIngressRule(
      cdk.aws_ec2.Peer.securityGroupId(
        this.securityGroupApiLambda.securityGroupId
      ),
      cdk.aws_ec2.Port.tcp(5432)
    );

    // RDS用セキュリティグループ
    const securityGroupRds = new cdk.aws_ec2.SecurityGroup(
      this,
      "RdsSecurityGroup",
      {
        vpc: props.vpc,
        securityGroupName: "rds-rdsproxy-z",
        allowAllOutbound: true,
      }
    );
    securityGroupRds.addIngressRule(
      cdk.aws_ec2.Peer.securityGroupId(
        this.securityGroupSourceRds.securityGroupId
      ),
      cdk.aws_ec2.Port.tcp(5432),
      "from ecs"
    );
    securityGroupRds.addIngressRule(
      cdk.aws_ec2.Peer.securityGroupId(
        this.securityGroupRdsProxy.securityGroupId
      ),
      cdk.aws_ec2.Port.tcp(5432),
      "from rds proxy"
    );

    const instance = new cdk.aws_rds.DatabaseInstance(this, "Rds", {
      engine: cdk.aws_rds.DatabaseInstanceEngine.POSTGRES,
      instanceType: cdk.aws_ec2.InstanceType.of(
        cdk.aws_ec2.InstanceClass.T4G,
        cdk.aws_ec2.InstanceSize.MICRO
      ),
      multiAz: false,
      storageType: cdk.aws_rds.StorageType.STANDARD,
      allocatedStorage: 20,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
      },
      credentials: cdk.aws_rds.Credentials.fromSecret(props.secret),
      databaseName: "mincuru",
      caCertificate: cdk.aws_rds.CaCertificate.RDS_CA_RDS4096_G1,
      securityGroups: [securityGroupRds],
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      deletionProtection: false,
    });

    // this.proxyRds = new cdk.aws_rds.DatabaseProxy(this, "Proxy", {
    //   proxyTarget: cdk.aws_rds.ProxyTarget.fromInstance(instance),
    //   secrets: [props.secret],
    //   vpc: props.vpc,
    //   securityGroups: [this.securityGroupSourceRds],
    // });

    this.proxyRds = instance.addProxy("rdsProxy", {
      secrets: [props.secret],
      vpc: props.vpc,
      securityGroups: [this.securityGroupRdsProxy],
    });
  }
}
