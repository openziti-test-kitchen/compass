/**
 * The main entrpoint Electron will execute.
 */
if (process.env.NODE_ENV === 'development') {
  process.env.DEBUG = 'mon*,sco*';
}

// @todo (imlucas): Use subprocess instead?
require('scout-server').start();

require('./src/electron');
