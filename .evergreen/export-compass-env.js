#! /usr/bin/env node
'use strict';

const WHITELIST = [
  'WORKDIR',
  'CI',
  'EVERGREEN',
  'EVERGREEN_AUTHOR',
  'EVERGREEN_BRANCH_NAME',
  'EVERGREEN_BUILD_ID',
  'EVERGREEN_BUILD_VARIANT',
  'EVERGREEN_EXECUTION',
  'EVERGREEN_IS_PATCH',
  'EVERGREEN_PROJECT',
  'EVERGREEN_REVISION',
  'EVERGREEN_TASK_ID',
  'EVERGREEN_TASK_NAME',
  'EVERGREEN_TASK_URL',
  'EVERGREEN_VERSION_ID',
  'EVERGREEN_WORKDIR',
  'NODE_JS_VERSION',
  'NPM_VERSION',
  'HADRON_METRICS_BUGSNAG_KEY',
  'HADRON_METRICS_INTERCOM_APP_ID',
  'HADRON_METRICS_STITCH_APP_ID',
  'HADRON_METRICS_SEGMENT_API_KEY',
  'E2E_TESTS_METRICS_URI',
  'E2E_TESTS_ATLAS_HOST',
  'E2E_TESTS_DATA_LAKE_HOST',
  'E2E_TESTS_SERVERLESS_HOST',
  'E2E_TESTS_ANALYTICS_NODE_HOST',
  'E2E_TESTS_FREE_TIER_HOST',
  'E2E_TESTS_ATLAS_USERNAME',
  'E2E_TESTS_ATLAS_PASSWORD',
  'E2E_TESTS_ATLAS_X509_PEM',
  'NOTARY_URL',
  'NOTARY_AUTH_TOKEN',
  'NOTARY_SIGNING_KEY',
  'NOTARY_SIGNING_COMMENT',
  'APPLE_CREDENTIALS',
  'GITHUB_TOKEN',
  'DOWNLOAD_CENTER_AWS_ACCESS_KEY_ID',
  'DOWNLOAD_CENTER_AWS_SECRET_ACCESS_KEY'
];

for (const name of WHITELIST) {
  console.log(`export ${name}="${process.env[name] || ''}"`);
}