const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = require('./webpack.base')({
  mode: 'production',
  entry: [
    require.resolve('react-app-polyfill/ie11'),
    path.join(process.cwd(), 'src/index.tsx'),
  ],
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            comparisons: true,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
          sourceMap: true,
        },
        parallel: true,
        extractComments: false,
      }),
      new CssMinimizerPlugin(),
    ],
    nodeEnv: 'production',
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    flagIncludedChunks: true,
    providedExports: true,
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 20,
      minSize: 0,
      cacheGroups: {
        lodash: {
          test: /[\\/]node_modules[\\/]lodash/,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)/,
        },
        remixRun: {
          test: /[\\/]node_modules[\\/]@remix-run/,
        },
        coreJs: {
          test: /[\\/]node_modules[\\/]core-js/,
        },
        redux: {
          test: /[\\/]node_modules[\\/](redux|redux-saga|)/,
        },
        src_redux: {
          test: /[\\/]src[\\/]redux/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new WebpackPwaManifest({
      name: 'clone-google-forms',
      short_name: 'CGF',
      description: 'Clone Google Forms for practice',
      background_color: '#ffffff',
      theme_color: '#673ab7',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('src/resources/images/favicon-512x512.png'),
          sizes: [36, 48, 72, 96, 128, 144, 192, 512],
        },
        {
          src: path.resolve('src/resources/images/favicon-512x512.png'),
          sizes: [120, 152, 167, 180],
          ios: true,
        },
      ],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'bundleStats.json',
    }),
  ],
  devtool: 'source-map',
  performance: {
    assetFilter: (assetFilename) =>
      !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
  },
});
