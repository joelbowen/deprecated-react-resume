const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const DEBUG = process.argv.indexOf('--release') === -1;
const GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
};

module.exports = {
  entry: `${APP_DIR}/app.jsx`,
  output: {
    path: `${BUILD_DIR}/assets/`,
    publicPath: '/assets/',
    filename: 'app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
    }),
    new webpack.DefinePlugin(Object.assign(GLOBALS, { 'process.env.BROWSER': true })),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
