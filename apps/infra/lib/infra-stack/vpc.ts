import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface VpcProps {
  /** the function for which we want to count url hits **/
  // downstream: lambda.IFunction;
}

export class Vpc extends Construct {
  public readonly vpc: cdk.aws_ec2.Vpc;
  constructor(scope: Construct, id: string, props: VpcProps) {
    super(scope, id);

    this.vpc = new cdk.aws_ec2.Vpc(this, "Vpc", {
      ipAddresses: cdk.aws_ec2.IpAddresses.cidr("10.0.0.0/16"),
      vpcName: "Mincuru",
      subnetConfiguration: [
        {
          name: "Public",
          subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: "Private",
          subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
      maxAzs: 2,
      defaultInstanceTenancy: cdk.aws_ec2.DefaultInstanceTenancy.DEFAULT,
    });

    // endpoint for SecretnsManager
    const endpoint = new cdk.aws_ec2.InterfaceVpcEndpoint(
      this,
      "VpcEndpointSecretsManager",
      {
        vpc: this.vpc,
        service: cdk.aws_ec2.InterfaceVpcEndpointAwsService.SECRETS_MANAGER,
        subnets: {
          subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
        },
      }
    );

    // // endpoint for ECR
    // const endpointEcr = new cdk.aws_ec2.InterfaceVpcEndpoint(
    //   this,
    //   "VpcEndpointECR",
    //   {
    //     vpc: this.vpc,
    //     service: cdk.aws_ec2.InterfaceVpcEndpointAwsService.ECR,
    //     subnets: {
    //       subnetType: cdk.aws_ec2.SubnetType.PRIVATE_ISOLATED,
    //     },
    //   }
    // );
  }
}
