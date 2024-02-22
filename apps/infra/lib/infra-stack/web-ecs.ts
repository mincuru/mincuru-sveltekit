import * as cdk from "aws-cdk-lib";
import * as ecsp from "aws-cdk-lib/aws-ecs-patterns";
import * as ecs from "aws-cdk-lib/aws-ecs";
import { Construct } from "constructs";
import { Context } from "./infra-stack";

export interface WebEcsProps {
  context: Context;
  vpc: cdk.aws_ec2.Vpc;
  ecr: cdk.aws_ecr.Repository;
  secretRds: cdk.aws_secretsmanager.Secret;
  securityGroupSourceRds: cdk.aws_ec2.SecurityGroup;
}

export class WebEcs extends Construct {
  public readonly taskExecutionRole: cdk.aws_iam.Role;
  public readonly taskRole: cdk.aws_iam.Role;
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
    let cpu = 256;
    let mem = 512;
    if (props.context.environment === "prd") {
      cpu = 1024;
      mem = 2048;
    }

    const taskDefinition = new cdk.aws_ecs.FargateTaskDefinition(
      this,
      "WebTaskDefinition",
      {
        cpu: cpu,
        memoryLimitMiB: mem,
        executionRole: this.taskExecutionRole,
        taskRole: this.taskRole,
        family: "WebTaskDefinition",
      }
    );
    taskDefinition.addContainer("WebContainer", {
      image: cdk.aws_ecs.ContainerImage.fromRegistry(
        props.ecr.repositoryUri // + ":latest"
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
      portMappings: [
        {
          containerPort: 3000,
          hostPort: 3000,
          protocol: ecs.Protocol.TCP,
        },
      ],
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
    const webAlbFargateService =
      new cdk.aws_ecs_patterns.ApplicationLoadBalancedFargateService(
        this,
        "WebService",
        {
          publicLoadBalancer: true,
          cluster: cluster,
          taskDefinition: taskDefinition,
          desiredCount: 1,
          assignPublicIp: true,
          serviceName: "WebService",
          taskSubnets: {
            subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
          },
          securityGroups: [props.securityGroupSourceRds],
        }
      );
    webAlbFargateService.targetGroup.configureHealthCheck({
      path: "/cars",
    });
    new cdk.CfnOutput(this, "WebServiceUrl", {
      value: webAlbFargateService.loadBalancer.loadBalancerDnsName,
    });
  }
}
