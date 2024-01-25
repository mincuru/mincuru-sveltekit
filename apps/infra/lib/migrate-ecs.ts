import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface MigrateEcsProps {
  vpc: cdk.aws_ec2.Vpc;
  ecr: cdk.aws_ecr.Repository;
  secretRds: cdk.aws_secretsmanager.Secret;
}

export class MigrateEcs extends Construct {
  public readonly taskExecutionRole: cdk.aws_iam.Role;
  constructor(scope: Construct, id: string, props: MigrateEcsProps) {
    super(scope, id);

    // ECSクラスター
    new cdk.aws_ecs.Cluster(this, "MigrateCluster", {
      vpc: props.vpc,
      enableFargateCapacityProviders: true,
      clusterName: "MigrateCluster",
    });

    // タスク実行ロール
    this.taskExecutionRole = new cdk.aws_iam.Role(
      this,
      "MigrateTaskExecutionRole",
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
      "MigrateTaskDefinition",
      {
        cpu: 2048,
        memoryLimitMiB: 4096,
        executionRole: this.taskExecutionRole,
        taskRole: this.taskExecutionRole,
        family: "MigrateTaskDefinition",
      }
    );
    taskDefinition.addContainer("MigrateContainer", {
      containerName: "MigrateContainer",
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
        streamPrefix: "migrate",
        logGroup: new cdk.aws_logs.LogGroup(this, "MigrateLogGroup", {
          logGroupName: "/aws/ecs/migrate",
          removalPolicy: cdk.RemovalPolicy.DESTROY,
        }),
      }),
    });
  }
}
