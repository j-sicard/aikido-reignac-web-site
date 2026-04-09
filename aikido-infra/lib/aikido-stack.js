const { Stack, RemovalPolicy, CfnOutput } = require("aws-cdk-lib");
const s3 = require("aws-cdk-lib/aws-s3");
const cloudfront = require("aws-cdk-lib/aws-cloudfront");
const origins = require("aws-cdk-lib/aws-cloudfront-origins");

class AikidoStack extends Stack {
  /**
   * @param {string} props.envName - "integration" | "production"
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const { envName } = props;
    const isProd = envName === "production";

    const siteBucket = new s3.Bucket(this, "AikidoSiteBucket", {
      bucketName: `aikido-regnacais-${envName}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      // En prod on garde le bucket même si la stack est détruite
      removalPolicy: isProd ? RemovalPolicy.RETAIN : RemovalPolicy.DESTROY,
      autoDeleteObjects: !isProd,
    });

    const distribution = new cloudfront.Distribution(this, "AikidoDistribution", {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(siteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: isProd
          ? cloudfront.CachePolicy.CACHING_OPTIMIZED
          : cloudfront.CachePolicy.CACHING_DISABLED, // pas de cache en intégration
      },
      defaultRootObject: "index.html",
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: "/index.html" },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: "/index.html" },
      ],
    });

    new CfnOutput(this, "BucketName", {
      value: siteBucket.bucketName,
      exportName: `AikidoBucketName-${envName}`,
    });

    new CfnOutput(this, "DistributionId", {
      value: distribution.distributionId,
      exportName: `AikidoDistributionId-${envName}`,
    });

    new CfnOutput(this, "SiteURL", {
      value: `https://${distribution.distributionDomainName}`,
      description: `URL HTTPS du site Aikido (${envName})`,
    });
  }
}

module.exports = { AikidoStack };
