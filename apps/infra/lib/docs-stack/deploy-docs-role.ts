import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface DeployDocsRoleProps {}

export class DeployDocsRole extends Construct {
  constructor(scope: Construct, id: string, props: DeployDocsRoleProps) {
    super(scope, id);

    const accountId = cdk.Stack.of(this).account;
    const oidcProvider = `arn:aws:iam::${accountId}:oidc-provider/token.actions.githubusercontent.com`;

    const role = new cdk.aws_iam.Role(this, "DeployDocsRole", {
      assumedBy: new cdk.aws_iam.WebIdentityPrincipal(oidcProvider, {
        StringLike: {
          "token.actions.githubusercontent.com:sub":
            "repo:mincuru/mincuru-sveltekit:*",
        },
      }),
      roleName: "DeployDocsGitHub",
    });

    // コンテンツをアップロードするための権限
    const policy = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["s3:PutObject", "s3:ListBucket"],
      resources: ["*"],
    });
    role.addToPolicy(policy);

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

    // カバレッジレポートのアップロード先CloudFrontのドメイン名取得に必要な権限
    const policy9 = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["cloudfront:ListDistributions"],
      resources: ["*"],
    });
    role.addToPolicy(policy9);

    // docsのデプロイに必要な権限
    const policyAll = new cdk.aws_iam.PolicyStatement({
      effect: cdk.aws_iam.Effect.ALLOW,
      actions: ["sts:AssumeRole"],
      resources: ["*"],
    });
    role.addToPolicy(policyAll);
  }
}
