import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface EcrWebProps {}

export class EcrWeb extends Construct {
  public readonly repo: cdk.aws_ecr.Repository;
  constructor(scope: Construct, id: string, props: EcrWebProps) {
    super(scope, id);

    // ECR
    this.repo = new cdk.aws_ecr.Repository(this, "EcrWeb", {
      repositoryName: "mincuru/web",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    this.repo.addLifecycleRule({ maxImageCount: 3 });
  }
}
