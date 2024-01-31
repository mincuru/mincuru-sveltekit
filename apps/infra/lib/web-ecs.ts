import * as cdk from "aws-cdk-lib";
import * as ecsp from "aws-cdk-lib/aws-ecs-patterns";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { Construct } from "constructs";

export interface WebEcsProps {
  vpc: cdk.aws_ec2.Vpc;
  ecr: cdk.aws_ecr.Repository;
  secretRds: cdk.aws_secretsmanager.Secret;
}

export class WebEcs extends Construct {
  public readonly taskExecutionRole: cdk.aws_iam.Role;
  public readonly taskRole: cdk.aws_iam.Role;
  // public readonly taskDefinition: cdk.aws_ecs.FargateTaskDefinition;
  constructor(scope: Construct, id: string, props: WebEcsProps) {
    super(scope, id);

    // タスクロール
    this.taskRole = new cdk.aws_iam.Role(this, "WebTaskRole", {
      assumedBy: new cdk.aws_iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
    });
    const taskPolicy = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["logs:CreateLogStream", "logs:PutLogEvents"],
      resources: ["*"],
    });
    this.taskRole.addToPolicy(taskPolicy);

    const taskPolicy2 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "secretsmanager:GetSecretValue",
        "secretsmanager:DescribeSecret",
      ],
      resources: [props.secretRds.secretArn],
    });
    this.taskRole.addToPolicy(taskPolicy2);

    // タスク実行ロール
    this.taskExecutionRole = new cdk.aws_iam.Role(
      this,
      "WebTaskExecutionRole",
      {
        assumedBy: new cdk.aws_iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
        managedPolicies: [
          cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName(
            "service-role/AmazonECSTaskExecutionRolePolicy"
          ),
        ],
      }
    );

    // タスク定義
    const taskDefinition = new cdk.aws_ecs.FargateTaskDefinition(
      this,
      "WebTaskDefinition",
      {
        cpu: 256,
        memoryLimitMiB: 512,
        executionRole: this.taskExecutionRole,
        taskRole: this.taskRole,
        family: "WebTaskDefinition",
      }
    );
    taskDefinition.addContainer("WebContainer", {
      image: cdk.aws_ecs.ContainerImage.fromRegistry(
        props.ecr.repositoryUri + ":latest"
      ),
      secrets: {
        DB_USERNAME: cdk.aws_ecs.Secret.fromSecretsManager(
          props.secretRds,
          "username"
        ),
        DB_PASSWORD: cdk.aws_ecs.Secret.fromSecretsManager(
          props.secretRds,
          "password"
        ),
        DB_HOST: cdk.aws_ecs.Secret.fromSecretsManager(props.secretRds, "host"),
        DB_PORT: cdk.aws_ecs.Secret.fromSecretsManager(props.secretRds, "port"),
        DB_NAME: cdk.aws_ecs.Secret.fromSecretsManager(
          props.secretRds,
          "dbname"
        ),
      },
      environment: {
        DATABASE_URL: "",
      },
      logging: new cdk.aws_ecs.AwsLogDriver({
        streamPrefix: "web",
        logGroup: new cdk.aws_logs.LogGroup(this, "WebLogGroup", {
          logGroupName: "/aws/ecs/web",
          removalPolicy: cdk.RemovalPolicy.DESTROY,
        }),
      }),
    });

    // ECSクラスター
    const cluster = new cdk.aws_ecs.Cluster(this, "WebCluster", {
      vpc: props.vpc,
      enableFargateCapacityProviders: true,
      clusterName: "WebCluster",
    });

    // サービス
    // new cdk.aws_ecs.FargateService(this, "WebService", {
    //   cluster: cluster,
    //   taskDefinition: taskDefinition,
    //   desiredCount: 1,
    //   assignPublicIp: true,
    //   serviceName: "WebService",
    // });

    // new ecsp.ApplicationLoadBalancedFargateService(
    //   this,
    //   "WebAlbFargateService",
    //   {
    //     taskImageOptions: {
    //       image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
    //     },
    //     publicLoadBalancer: true,
    //   }
    // );
  }
}
