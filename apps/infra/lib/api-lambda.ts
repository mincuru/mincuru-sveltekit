import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface ApiLambdaProps {
  vpc: cdk.aws_ec2.Vpc;
  secretRds: cdk.aws_secretsmanager.Secret;
  securityGroupSourceRds: cdk.aws_ec2.SecurityGroup;
}

export class ApiLambda extends Construct {
  public readonly function: cdk.aws_lambda.Function;
  constructor(scope: Construct, id: string, props: ApiLambdaProps) {
    super(scope, id);

    // Lambda
    this.function = new cdk.aws_lambda.Function(this, "ApiLambda", {
      functionName: "api",
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: cdk.aws_lambda.Code.fromAsset("lambda"),
      memorySize: 128,
      timeout: cdk.Duration.seconds(60),
      vpc: props.vpc,
      vpcSubnets: { subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED },
      securityGroups: [props.securityGroupSourceRds],
      environment: {
        DATABASE_URL:
          "postgresql://postgres:password@localhost:5432/mincuru?schema=public",
      },
    });
  }
}
