import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface SecretRdsProps {}

export class SecretRds extends Construct {
  public readonly secret: cdk.aws_secretsmanager.Secret;

  constructor(scope: Construct, id: string, props: SecretRdsProps) {
    super(scope, id);

    this.secret = new cdk.aws_secretsmanager.Secret(this, "SecretRds", {
      secretName: "MincuruRds",
      generateSecretString: {
        generateStringKey: "password",
        excludePunctuation: true,
        includeSpace: false,
        secretStringTemplate: JSON.stringify({ username: "postgres" }),
      },
    });
  }
}
