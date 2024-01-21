import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./vpc";
import { Rds } from "./rds";
import { SecretRds } from "./secret-rds";
import { WebEcr } from "./web-ecr";
import { WebEcs } from "./web-ecs";
import { MigrateEcr } from "./migrate-ecr";
import { MigrateEcs } from "./migrate-ecs";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "Vpc", {});
    const secretRds = new SecretRds(this, "SecretRds", {});
    const rds = new Rds(this, "Rds", {
      vpc: vpc.vpc,
      secret: secretRds.secret,
    });
    // const webEcr = new WebEcr(this, "EcrWeb", {});
    // const webEcs = new WebEcs(this, "EcsWeb", {
    //   vpc: vpc.vpc,
    //   ecr: webEcr.repo,
    //   secretRds: secretRds.secret,
    // });
    // const migrateEcr = new MigrateEcr(this, "MigrateEcr", {});
    // const migrateEcs = new MigrateEcs(this, "MigrateEcs", {
    //   vpc: vpc.vpc,
    //   ecr: migrateEcr.repo,
    //   secretRds: secretRds.secret,
    // });
  }
}
