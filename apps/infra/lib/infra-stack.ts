import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { Vpc } from "./vpc";
import { Rds } from "./rds";
import { SecretRds } from "./secret-rds";
import { EcrWeb } from "./ecr-web";
import { EcsWeb } from "./ecs-web";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, "Vpc", {});
    const secretRds = new SecretRds(this, "SecretRds", {});
    const rds = new Rds(this, "Rds", {
      vpc: vpc.vpc,
      secret: secretRds.secret,
    });
    const ecrWeb = new EcrWeb(this, "EcrWeb", {});
    const ecsWeb = new EcsWeb(this, "EcsWeb", {
      vpc: vpc.vpc,
      ecr: ecrWeb.repo,
      secretRds: secretRds.secret,
    });
  }
}
