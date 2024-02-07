import * as cdk from "aws-cdk-lib";
import { Duration, Stack, StackProps, App } from "aws-cdk-lib";
import { Construct } from "constructs";
import { TestRole } from "./test-role";
import { CoverageReportS3 } from "./coverage-report-s3";

export class TestStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const coverageReportS3 = new CoverageReportS3(this, "CoverageReportS3", {});
    new TestRole(this, "TestRole", {
      coverageReportBucket: coverageReportS3.bucket,
    });
  }
}
