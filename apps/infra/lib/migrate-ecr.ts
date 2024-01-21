import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface MigrateEcrProps {}

export class MigrateEcr extends Construct {
  public readonly repo: cdk.aws_ecr.Repository;
  constructor(scope: Construct, id: string, props: MigrateEcrProps) {
    super(scope, id);

    // ECR
    this.repo = new cdk.aws_ecr.Repository(this, "MigrateEcr", {
      repositoryName: "mincuru/migrate",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    this.repo.addLifecycleRule({ maxImageCount: 3 });
  }
}
