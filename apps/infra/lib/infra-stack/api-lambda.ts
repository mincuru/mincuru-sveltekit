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

    // Lambda layer
    // const lambdaLayer = new cdk.aws_lambda.LayerVersion(
    //   this,
    //   `ApiLambdaLayer`,
    //   {
    //     code: cdk.aws_lambda.Code.fromAsset("../../node_modules"),
    //     compatibleRuntimes: [cdk.aws_lambda.Runtime.NODEJS_20_X],
    //   }
    // );
    // Lambda
    this.function = new cdk.aws_lambda.Function(this, "ApiLambda", {
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
      code: cdk.aws_lambda.Code.fromAsset("../api/dist"),
      handler: "lambda.handler",
      // layers: [lambdaLayer],
      timeout: cdk.Duration.seconds(60),
      functionName: "api",
      memorySize: 128,
      vpc: props.vpc,
      vpcSubnets: { subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED },
      securityGroups: [props.securityGroupSourceRds],
      environment: {
        DATABASE_URL:
          "postgresql://postgres:password@localhost:5432/mincuru?schema=public",
      },
    });
    // Api Gateway
    const restApi = new cdk.aws_apigateway.RestApi(this, `NestAppApiGateway`, {
      restApiName: `NestAppApiGw`,
      deployOptions: {
        stageName: "v1",
      },
      // CORS設定
      defaultCorsPreflightOptions: {
        // warn: 要件に合わせ適切なパラメータに絞る
        allowOrigins: cdk.aws_apigateway.Cors.ALL_ORIGINS,
        allowMethods: cdk.aws_apigateway.Cors.ALL_METHODS,
        allowHeaders: cdk.aws_apigateway.Cors.DEFAULT_HEADERS,
        statusCode: 200,
      },
    });

    restApi.root.addProxy({
      defaultIntegration: new cdk.aws_apigateway.LambdaIntegration(
        this.function,
      ),
      anyMethod: true,
    });
  }
}
