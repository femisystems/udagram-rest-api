import AWS = require('aws-sdk');
import { config } from './config/config';

const { aws: awsConfig } = config;

activateCredentials();

//Configure AWS
function activateCredentials() {
  if (config.env === 'dev') {
    const credentials = new AWS.SharedIniFileCredentials({ profile: awsConfig.profile });
    AWS.config.credentials = credentials;
  }
}

export const s3 = new AWS.S3({
  signatureVersion: 'v4',
  region: awsConfig.region,
  params: { Bucket: awsConfig.mediaBucket }
});

const signedUrlOptions: Record<string, any> = {
  Bucket: awsConfig.mediaBucket,
  Expires: 60 * 5
};

/* getGetSignedUrl generates an aws signed url to retreive an item
 * @Params
 *    key: string - the filename to be put into the s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getGetSignedUrl(key: string): string {
  return s3.getSignedUrl('getObject', {
    ...signedUrlOptions,
    Key: key
  });
}

/* getPutSignedUrl generates an aws signed url to put an item
 * @Params
 *    key: string - the filename to be retreived from s3 bucket
 * @Returns:
 *    a url as a string
 */
export function getPutSignedUrl(key: string) {
  return s3.getSignedUrl('putObject', {
    ...signedUrlOptions,
    Key: key
  });
}