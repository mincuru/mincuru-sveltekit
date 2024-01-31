import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface DeployRoleProps {
  coverageReportBucket: cdk.aws_s3.Bucket;
  migrateTaskExecutionRole: cdk.aws_iam.Role;
  migrateTaskRole: cdk.aws_iam.Role;
  migrateRepository: cdk.aws_ecr.Repository;
  webTaskExecutionRole: cdk.aws_iam.Role;
  webTaskRole: cdk.aws_iam.Role;
  webRepository: cdk.aws_ecr.Repository;
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

    const policy = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["s3:PutObject", "s3:ListBucket"],
      resources: ["*"],
    });
    role.addToPolicy(policy);

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
      ],
    });
    role.addToPolicy(policy3);

    const policy4 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["ecs:RunTask"],
      resources: ["*"],
    });
    role.addToPolicy(policy4);

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

    const policy6 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "ecs:DescribeTasks",
        "ecs:DescribeTaskDefinition",
        "ecs:RegisterTaskDefinition",
        "ecs:DescribeServices",
      ],
      resources: ["*"],
    });
    role.addToPolicy(policy6);
  }
}
