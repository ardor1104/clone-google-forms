const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base')({
  mode: 'development',
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    'webpack-hot-middleware/client?reload=true&overlay=false&quiet=true',
    path.join(process.cwd(), 'src/index.tsx'),
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    pathinfo: false,
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: 10,
      cacheGroups: {
        node_vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
            )[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      favicon: 'src/resources/icons/favicon.ico',
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/,
      failOnError: false,
    }),
  ],

  devtool: 'eval-source-map',

  performance: {
    hints: false,
  },

  devServer: {
    stats: 'minimal',
  },
});
