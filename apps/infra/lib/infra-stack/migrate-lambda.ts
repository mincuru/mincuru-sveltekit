import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface MigrateLambdaProps {
  vpc: cdk.aws_ec2.Vpc;
  secretRds: cdk.aws_secretsmanager.Secret;
  securityGroupMigrateLambda: cdk.aws_ec2.SecurityGroup;
  proxyRds: cdk.aws_rds.DatabaseProxy;
}

export class MigrateLambda extends Construct {
  public readonly function: cdk.aws_lambda.Function;
  constructor(scope: Construct, id: string, props: MigrateLambdaProps) {
    super(scope, id);

    // Role and Policy
    const role = new cdk.aws_iam.Role(this, "MigrateLambdaRole", {
      assumedBy: new cdk.aws_iam.ServicePrincipal("lambda.amazonaws.com"),
      roleName: "MigrateLambdaRole",
    });
    const policy = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "logs:CreateLogStream",
        "logs:PutLogEvents",
        "logs:CreateLogGroup",
        "ec2:CreateNetworkInterface",
        "ec2:DetachNetworkInterface",
        "ec2:DescribeNetworkInterfaces",
        "ec2:DeleteNetworkInterface",
        "secretsmanager:GetSecretValue",
      ],
      resources: ["*"],
    });
    role.addToPolicy(policy);

    // Lambda
    this.function = new cdk.aws_lambda.Function(this, "MigrateLambda", {
      code: cdk.aws_lambda.Code.fromAsset("lambda"),
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      timeout: cdk.Duration.seconds(60),
      functionName: "mincuru-migrate",
      role: role,
      memorySize: 128,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
      },
      securityGroups: [props.securityGroupMigrateLambda],
      environment: {
        // PROXY_RDS: props.proxyRds.endpoint,
      },
      logFormat: cdk.aws_lambda.LogFormat.JSON,
    });
  }
}
