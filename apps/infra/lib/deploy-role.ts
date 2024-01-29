import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface DeployRoleProps {
  coverageReportBucket: cdk.aws_s3.Bucket;
  taskExecutionRole: cdk.aws_iam.Role;
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

    const policy3 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: [
        "ecr:UploadLayerPart",
        "ecr:PutImage",
        "ecr:InitiateLayerUpload",
        "ecr:CompleteLayerUpload",
        "ecr:BatchCheckLayerAvailability",
      ],
      resources: ["*"],
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
      resources: [props.taskExecutionRole.roleArn],
    });
    role.addToPolicy(policy5);

    // TODO 権限が強力なので見直しが必要
    // const policy6 = new cdk.aws_iam.PolicyStatement({
    //   effect: cdk.aws_iam.Effect.ALLOW,
    //   actions: ["*"],
    //   resources: ["*"],
    // });
    // role.addToPolicy(policy6);
  }
}
