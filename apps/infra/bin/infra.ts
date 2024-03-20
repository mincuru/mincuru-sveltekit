#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { InfraStack } from "../lib/infra-stack/infra-stack";
import { TestStack } from "../lib/test-stack/test-stack";
import { DocsStack } from "../lib/docs-stack/docs-stack";

const app = new cdk.App();
new InfraStack(app, "InfraStack");
new TestStack(app, "TestStack");
new DocsStack(app, "DocsStack");
