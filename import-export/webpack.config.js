const commonConfig = require('./webpack.common.config.js');
const productionConfig = require('./webpack.production.config.js');
const developmentConfig = require('./webpack.development.config.js');
const { merge } = require('webpack-merge');

module.exports = function (env) {
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  } else {
    return merge(commonConfig, productionConfig);
  }
}