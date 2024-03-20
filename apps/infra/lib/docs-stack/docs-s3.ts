import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface DocsS3Props {}

export class DocsS3 extends Construct {
  constructor(scope: Construct, id: string, props: DocsS3Props) {
    super(scope, id);

    // Bucket
    const docsBucket = new cdk.aws_s3.Bucket(this, "DocsBucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    // OAC
    const cfnOriginAccessControl =
      new cdk.aws_cloudfront.CfnOriginAccessControl(this, "DocsOAC", {
        originAccessControlConfig: {
          name: "DocsOAC",
          originAccessControlOriginType: "s3",
          signingBehavior: "always",
          signingProtocol: "sigv4",
          description: "Access Control",
        },
      });

    const distribution = new cdk.aws_cloudfront.Distribution(
      this,
      "DocsDistribution",
      {
        comment: "docs-distribution",
        defaultRootObject: "index.html",
        errorResponses: [
          {
            ttl: cdk.Duration.seconds(300),
            httpStatus: 403,
            responseHttpStatus: 403,
            responsePagePath: "/error.html",
          },
          {
            ttl: cdk.Duration.seconds(300),
            httpStatus: 404,
            responseHttpStatus: 404,
            responsePagePath: "/error.html",
          },
        ],
        defaultBehavior: {
          viewerProtocolPolicy:
            cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          origin: new cdk.aws_cloudfront_origins.S3Origin(docsBucket),
        },
        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_100,
      }
    );

    const docsBucketPolicyStatement = new cdk.aws_iam.PolicyStatement({
      actions: ["s3:GetObject"],
      effect: cdk.aws_iam.Effect.ALLOW,
      principals: [
        new cdk.aws_iam.ServicePrincipal("cloudfront.amazonaws.com"),
      ],
      resources: [`${docsBucket.bucketArn}/*`],
    });
    docsBucketPolicyStatement.addCondition("StringEquals", {
      "AWS:SourceArn": `arn:aws:cloudfront::${cdk.Stack.of(this).account}:distribution/${distribution.distributionId}`,
    });
    docsBucket.addToResourcePolicy(docsBucketPolicyStatement);

    const cfnDistribution = distribution.node
      .defaultChild as cdk.aws_cloudfront.CfnDistribution;
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.OriginAccessControlId",
      cfnOriginAccessControl.getAtt("Id")
    );
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.DomainName",
      docsBucket.bucketRegionalDomainName
    );
    cfnDistribution.addOverride(
      "Properties.DistributionConfig.Origins.0.S3OriginConfig.OriginAccessIdentity",
      ""
    );
    cfnDistribution.addPropertyDeletionOverride(
      "DistributionConfig.Origins.0.CustomOriginConfig"
    );
  }
}
