import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface WebEcrProps {}

export class WebEcr extends Construct {
  public readonly repo: cdk.aws_ecr.Repository;
  constructor(scope: Construct, id: string, props: WebEcrProps) {
    super(scope, id);

    // ECR
    this.repo = new cdk.aws_ecr.Repository(this, "WebEcr", {
      repositoryName: "mincuru/web",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    this.repo.addLifecycleRule({ maxImageCount: 3 });
  }
}
