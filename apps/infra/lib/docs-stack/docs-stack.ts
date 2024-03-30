import * as cdk from "aws-cdk-lib";
import { Duration, Stack, StackProps, App } from "aws-cdk-lib";
import { Construct } from "constructs";
import { DocsS3 } from "./docs-s3";

export interface Context {
  environment: string;
}

export class DocsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Contextの取得
    const val = this.node.tryGetContext("environment");
    if (!val) throw new Error("environment is required");
    const context: Context = {
      environment: val,
    };

    const docsS3 = new DocsS3(this, "DocsS3", {
      context: context,
    });
  }
}
