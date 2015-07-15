module.exports = require('./webpack-configurator')({
  // Can be 'eval', 'source-maps' or null
  // For accurate source maps use 'source-maps'
  // Note that with source maps `hot module replacement` will not work
  devtool: 'eval'
});
