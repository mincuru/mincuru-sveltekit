import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface RdsProps {
  vpc: cdk.aws_ec2.Vpc;
  secret: cdk.aws_secretsmanager.Secret;
}

export class Rds extends Construct {
  constructor(scope: Construct, id: string, props: RdsProps) {
    super(scope, id);

    new cdk.aws_rds.DatabaseInstance(this, "Rds", {
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
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      deletionProtection: false,
    });
  }
}
