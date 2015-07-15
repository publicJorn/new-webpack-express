var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var mainPath = path.resolve(__dirname, 'app', 'main.js');
var buildPath = path.resolve(__dirname, 'build');
var headerPath = path.resolve(__dirname, 'app', 'components', 'header', 'header.js');
var templatePath = path.resolve(__dirname, 'templates', 'index.html');

module.exports = function (options) {
  var cssLoaders = 'style!css';
  var lessLoaders = cssLoaders + '!less';

  console.log('=== dirname : '+ __dirname + ' ===');

  return {
    // Makes sure errors in console map to the correct file
    // and line number
    devtool: options.devtool,

    entry: {
      main: [
        // These two scripts facilitate the updating process
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',

        // Our application
        mainPath
      ],
      header: headerPath
    },

    output: {
      // We need to give Webpack a path. It does not actually need it,
      // because files are kept in memory in webpack-dev-server, but an
      // error will occur if nothing is specified. We use the buildPath
      // as that points to where the files will eventually be bundled
      // in production
      path: buildPath,
      filename: '[name].js',

      // Everything related to Webpack should go through a build path
      // The express server will serve localhost:3000, so we'll use that (root)
      publicPath: '/'
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: [nodeModulesPath]
        },
        {
          test: /\.css$/,
          loader: cssLoaders
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(
            'css?sourceMap!' +
            'less?sourceMap'
          )
          //loader: lessLoaders
        }
      ]
    },

    // We have to manually add the Hot Replacement plugin when running
    // from Node
    plugins: [
      // This makes hot module replacement available for all bundles/chunks
      new webpack.optimize.CommonsChunkPlugin('init.js'),

      new webpack.HotModuleReplacementPlugin(),

      new HtmlWebpackPlugin({
        template: templatePath
      }),

      new ExtractTextPlugin('[name].css')
    ]
  };
};
