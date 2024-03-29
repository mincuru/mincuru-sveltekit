import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface DeployRoleProps {
  migrateTaskExecutionRole: cdk.aws_iam.Role;
  migrateTaskRole: cdk.aws_iam.Role;
  migrateRepository: cdk.aws_ecr.Repository;
  webTaskExecutionRole: cdk.aws_iam.Role;
  webTaskRole: cdk.aws_iam.Role;
  webRepository: cdk.aws_ecr.Repository;
  apiRepository: cdk.aws_ecr.IRepository;
}

export class DeployRole extends Construct {
  constructor(scope: Construct, id: string, props: DeployRoleProps) {
    super(scope, id);

    const accountId = cdk.Stack.of(this).account;
    const oidcProvider = `arn:aws:iam::${accountId}:oidc-provider/token.actions.githubusercontent.com`;

    const role = new cdk.aws_iam.Role(this, "DeployRole", {
      assumedBy: new cdk.aws_iam.WebIdentityPrincipal(oidcProvider, {
        StringLike: {
          "token.actions.githubusercontent.com:sub":
            "repo:mincuru/mincuru-sveltekit:*",
        },
      }),
      roleName: "DeployGitHub",
    });

    // ECRへのログインに必要な権限
    const policy2 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["ecr:GetAuthorizationToken"],
      resources: ["*"],
    });
    role.addToPolicy(policy2);

    // Private ECRに対する必要最低権限
    const policy3 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "ecr:UploadLayerPart",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:CompleteLayerUpload",
        "ecr:BatchCheckLayerAvailability",
        "ecr:BatchGetImage",
        "ecr:GetDownloadUrlForLayer",
      ],
      resources: [
        props.migrateRepository.repositoryArn,
        props.webRepository.repositoryArn,
        props.apiRepository.repositoryArn,
      ],
    });
    role.addToPolicy(policy3);

    // ECSタスク実行に必要な権限
    const policy4 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["ecs:RunTask"],
      resources: ["*"],
    });
    role.addToPolicy(policy4);

    // ECSタスク実行に必要な権限
    const policy5 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["iam:PassRole"],
      resources: [
        props.migrateTaskExecutionRole.roleArn,
        props.migrateTaskRole.roleArn,
        props.webTaskExecutionRole.roleArn,
        props.webTaskRole.roleArn,
      ],
    });
    role.addToPolicy(policy5);

    // ECSタスクのデプロイに必要な権限
    const policy6 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "ecs:DescribeTasks",
        "ecs:DescribeTaskDefinition",
        "ecs:RegisterTaskDefinition",
        "ecs:DescribeServices",
        "ecs:UpdateService",
      ],
      resources: ["*"],
    });
    role.addToPolicy(policy6);

    // Lambda Functionのでプロイに必要な権限
    const policy9 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["lambda:UpdateFunctionCode"],
      resources: ["*"],
    });
    role.addToPolicy(policy9);

    // VPC関連情報の取得
    const policy7 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["ec2:DescribeSubnets", "ec2:DescribeSecurityGroups"],
      resources: ["*"],
    });
    role.addToPolicy(policy7);

    // CDKのデプロイに必要な権限
    const policy8 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "ssm:GetParameter",
        "cloudformation:DescribeChangeSet",
        "cloudformation:DescribeStacks",
        "cloudformation:GetTemplate",
        "cloudformation:DeleteChangeSet",
        "cloudformation:CreateChangeSet",
      ],
      resources: ["*"],
    });
    role.addToPolicy(policy8);

    // infraのデプロイに必要な権限
    const policyAll = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["sts:AssumeRole"],
      resources: ["*"],
    });
    role.addToPolicy(policyAll);
  }
}
