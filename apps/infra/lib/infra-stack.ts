import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./vpc";
import { Rds } from "./rds";
import { SecretRds } from "./secret-rds";
import { WebEcr } from "./web-ecr";
import { WebEcs } from "./web-ecs";
import { MigrateEcr } from "./migrate-ecr";
import { MigrateEcs } from "./migrate-ecs";
import { DeployRole } from "./deploy-role";
import { CoverageReportS3 } from "./coverage-report-s3";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "Vpc", {});
    const secretRds = new SecretRds(this, "SecretRds", {});
    const rds = new Rds(this, "Rds", {
      vpc: vpc.vpc,
      secret: secretRds.secret,
    });
    const webEcr = new WebEcr(this, "EcrWeb", {});
    const webEcs = new WebEcs(this, "EcsWeb", {
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

    const coverageReportS3 = new CoverageReportS3(this, "CoverageReportS3", {});
    new DeployRole(this, "DeployRole", {
      coverageReportBucket: coverageReportS3.bucket,
      migrateTaskExecutionRole: migrateEcs.taskExecutionRole,
      migrateTaskRole: migrateEcs.taskRole,
      migrateRepository: migrateEcr.repo,
      webTaskExecutionRole: webEcs.taskExecutionRole,
      webTaskRole: webEcs.taskRole,
      webRepository: webEcr.repo,
    });
  }
}
