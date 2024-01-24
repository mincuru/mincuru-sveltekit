import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";

export interface CoverageReportS3Props {}

export class CoverageReportS3 extends Construct {
  constructor(scope: Construct, id: string, props: CoverageReportS3Props) {
    super(scope, id);

    // S3
    const bucket = new cdk.aws_s3.Bucket(this, "CoverageReportS3", {
      bucketName: "mincuru-coverage-report",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const oai = new cdk.aws_cloudfront.OriginAccessIdentity(
      this,
      "CoverageReportOAI",
      {
        // comment: "website-distribution-originAccessIdentity",
      }
    );

    const bucketPolicyStatement = new cdk.aws_iam.PolicyStatement({
      actions: ["s3:GetObject"],
      effect: cdk.aws_iam.Effect.ALLOW,
      principals: [
        new cdk.aws_iam.ServicePrincipal("cloudfront.amazonaws.com"),
      ],
      resources: [`${bucket.bucketArn}/*`],
    });
    bucket.addToResourcePolicy(bucketPolicyStatement);

    // Distribution
    const distribution = new cdk.aws_cloudfront.Distribution(
      this,
      "CoverageReportDistribution",
      {
        comment: "mincuru-coverage-report-distribution",
        defaultRootObject: "index.html",
        defaultBehavior: {
          allowedMethods: cdk.aws_cloudfront.AllowedMethods.ALLOW_GET_HEAD,
          cachedMethods: cdk.aws_cloudfront.CachedMethods.CACHE_GET_HEAD,
          cachePolicy: cdk.aws_cloudfront.CachePolicy.CACHING_OPTIMIZED,
          viewerProtocolPolicy:
            cdk.aws_cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          origin: new cdk.aws_cloudfront_origins.S3Origin(bucket, {
            originAccessIdentity: oai,
          }),
        },
        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_ALL,
      }
    );

    // File deployment
    new cdk.aws_s3_deployment.BucketDeployment(this, "CoverageReportDeploy", {
      sources: [
        cdk.aws_s3_deployment.Source.data(
          "/index.html",
          "<html><body><h1>Test</h1></body></html>"
        ),
      ],
      destinationBucket: bucket,
      distribution: distribution,
      distributionPaths: ["/*"],
    });
  }
}
