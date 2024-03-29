import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface ApiLambdaProps {
  vpc: cdk.aws_ec2.Vpc;
  secretRds: cdk.aws_secretsmanager.Secret;
  securityGroupApiLambda: cdk.aws_ec2.SecurityGroup;
  proxyRds: cdk.aws_rds.DatabaseProxy;
}

export class ApiLambda extends Construct {
  public readonly function: cdk.aws_lambda.Function;
  public readonly repo: cdk.aws_ecr.IRepository;
  constructor(scope: Construct, id: string, props: ApiLambdaProps) {
    super(scope, id);

    // ECR
    this.repo = cdk.aws_ecr.Repository.fromRepositoryName(
      this,
      "ApiEcr",
      "mincuru/api"
    );

    // Role and Policy
    const role = new cdk.aws_iam.Role(this, "ApiLambdaRole", {
      assumedBy: new cdk.aws_iam.ServicePrincipal("lambda.amazonaws.com"),
      roleName: "ApiLambdaRole",
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
    this.function = new cdk.aws_lambda.Function(this, "ApiLambda", {
      code: cdk.aws_lambda.EcrImageCode.fromEcrImage(this.repo),
      runtime: cdk.aws_lambda.Runtime.FROM_IMAGE,
      handler: cdk.aws_lambda.Handler.FROM_IMAGE,
      timeout: cdk.Duration.seconds(60),
      functionName: "mincuru-api",
      role: role,
      memorySize: 128,
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
      },
      allowPublicSubnet: true,
      securityGroups: [props.securityGroupApiLambda],
      environment: {
        PROXY_RDS: props.proxyRds.endpoint,
        NO_COLOR: "true",
      },
      logFormat: cdk.aws_lambda.LogFormat.JSON,
    });

    // Api Gateway
    const restApi = new cdk.aws_apigateway.LambdaRestApi(this, `ApiGateway`, {
      handler: this.function,
      proxy: true,
      restApiName: `ApiGateway`,
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
  }
}
