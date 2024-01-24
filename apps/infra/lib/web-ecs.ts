import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface WebEcsProps {
  vpc: cdk.aws_ec2.Vpc;
  ecr: cdk.aws_ecr.Repository;
  secretRds: cdk.aws_secretsmanager.Secret;
}

export class WebEcs extends Construct {
  constructor(scope: Construct, id: string, props: WebEcsProps) {
    super(scope, id);

    // ECSクラスター
    new cdk.aws_ecs.Cluster(this, "WebCluster", {
      vpc: props.vpc,
      enableFargateCapacityProviders: true,
    });

    // タスク実行ポリシー
    // const taskExecutionPolicy = new cdk.aws_iam.Policy(this, "TaskExecutionPolicy");
    // taskExecutionPolicy.addStatements(
    //   new cdk.aws_iam.PolicyStatement({
    //     effect: cdk.aws_iam.Effect.ALLOW,
    //     actions: [
    //       "logs:CreateLogGroup",
    //       "logs:CreateLogStream",
    //       "logs:PutLogEvents",
    //       "logs:DescribeLogStreams",
    //     ],
    //     resources: ["*"],
    //   }      )
    // );

    // タスク実行ロール
    const taskExecutionRole = new cdk.aws_iam.Role(
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
        taskRole: taskExecutionRole,
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
  }
}
