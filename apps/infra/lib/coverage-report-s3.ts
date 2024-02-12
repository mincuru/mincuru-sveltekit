import * as cdk from "aws-cdk-lib";
import { CfnOriginAccessControl } from "aws-cdk-lib/aws-cloudfront";
import { Construct } from "constructs";

export interface CoverageReportS3Props {}

export class CoverageReportS3 extends Construct {
  readonly bucket: cdk.aws_s3.Bucket;
  constructor(scope: Construct, id: string, props: CoverageReportS3Props) {
    super(scope, id);

    // S3
    this.bucket = new cdk.aws_s3.Bucket(this, "CoverageReportS3", {
      bucketName: "mincuru-coverage-report",
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [
        {
          expiration: cdk.Duration.days(1),
        },
      ],
    });

    // OAC
    // https://github.com/aws/aws-cdk/issues/21771
    const oac = new cdk.aws_cloudfront.CfnOriginAccessControl(
      this,
      "CoverageReportOAC",
      {
        originAccessControlConfig: {
          name: "mincuru-coverage-report-oac",
          originAccessControlOriginType: "s3",
          signingBehavior: "always",
          signingProtocol: "sigv4",
          description: "Access Control",
        },
      }
    );

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
          origin: new cdk.aws_cloudfront_origins.S3Origin(this.bucket),
        },
        priceClass: cdk.aws_cloudfront.PriceClass.PRICE_CLASS_ALL,
      }
    );

    const cfnDistribution = distribution.node
      .defaultChild as cdk.aws_cloudfront.CfnDistribution;
    // OAI削除
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.S3OriginConfig.OriginAccessIdentity",
      ""
    );
    // OAC設定
    cfnDistribution.addPropertyOverride(
      "DistributionConfig.Origins.0.OriginAccessControlId",
      oac.attrId
    );

    // Bucket Policy
    const bucketPolicyStatement = new cdk.aws_iam.PolicyStatement({
      actions: ["s3:GetObject"],
      effect: cdk.aws_iam.Effect.ALLOW,
      principals: [
        new cdk.aws_iam.ServicePrincipal("cloudfront.amazonaws.com"),
      ],
      resources: [`${this.bucket.bucketArn}/*`],
    });
    bucketPolicyStatement.addCondition("StringEquals", {
      "AWS:SourceArn": `arn:aws:cloudfront::${cdk.Stack.of(this).account}:distribution/${distribution.distributionId}`,
    });
    this.bucket.addToResourcePolicy(bucketPolicyStatement);

    // File deployment
    new cdk.aws_s3_deployment.BucketDeployment(this, "CoverageReportDeploy", {
      sources: [
        cdk.aws_s3_deployment.Source.data(
          "/index.html",
          "<html><body><h1>Test</h1></body></html>"
        ),
      ],
      destinationBucket: this.bucket,
      distribution: distribution,
      distributionPaths: ["/*"],
    });
  }
}

// update 1
