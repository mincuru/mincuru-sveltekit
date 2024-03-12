import * as cdk from "aws-cdk-lib";
import { Duration, Stack, StackProps, App } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./vpc";
import { Rds } from "./rds";
import { SecretRds } from "./secret-rds";
import { WebEcr } from "./web-ecr";
import { WebEcs } from "./web-ecs";
import { MigrateEcr } from "./migrate-ecr";
import { MigrateEcs } from "./migrate-ecs";
import { DeployRole } from "./deploy-role";
import { ApiLambda } from "./api-lambda";

export interface Context {
  environment: string;
}

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Contextの取得
    const val = this.node.tryGetContext("environment");
    if (!val) throw new Error("environment is required");
    const context: Context = {
      environment: val,
    };

    const vpc = new Vpc(this, "Vpc", {});
    const secretRds = new SecretRds(this, "SecretRds", {});
    const rds = new Rds(this, "Rds", {
      vpc: vpc.vpc,
      secret: secretRds.secret,
    });
    const webEcr = new WebEcr(this, "WebEcr", {});
    const webEcs = new WebEcs(this, "WebEcs", {
      context: context,
      vpc: vpc.vpc,
      ecr: webEcr.repo,
      secretRds: secretRds.secret,
      securityGroupSourceRds: rds.securityGroupSourceRds,
    });
    const migrateEcr = new MigrateEcr(this, "MigrateEcr", {});
    const migrateEcs = new MigrateEcs(this, "MigrateEcs", {
      vpc: vpc.vpc,
      ecr: migrateEcr.repo,
      secretRds: secretRds.secret,
    });

    const apiLambda = new ApiLambda(this, "ApiLambda", {
      vpc: vpc.vpc,
      secretRds: secretRds.secret,
      securityGroupSourceRds: rds.securityGroupSourceRds,
      proxyRds: rds.proxyRds,
    });

    new DeployRole(this, "DeployRole", {
      migrateTaskExecutionRole: migrateEcs.taskExecutionRole,
      migrateTaskRole: migrateEcs.taskRole,
      migrateRepository: migrateEcr.repo,
      webTaskExecutionRole: webEcs.taskExecutionRole,
      webTaskRole: webEcs.taskRole,
      webRepository: webEcr.repo,
      apiRepository: apiLambda.repo,
    });
  }
}
