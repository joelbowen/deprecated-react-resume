const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const gulpConfig = require('../shared/config')();
const webpackConfig = Object.create(require('../../webpack.config'));

gulp.task('webpack-dev-server', () => {
  webpackConfig.devtool = 'eval';
  webpackConfig.debug = true;
  webpackConfig.plugins = webpackConfig.plugins.concat(
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: true,
        NODE_ENV: JSON.stringify('development'),
      },
    }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);
  /* webpack-dev-server doesn't have access to "inline" flag, use the
   *   following to update the config entry with the webpack-dev-server */
  webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8080/');

  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: 'client',
    stats: {
      colors: true,
    },
  }).listen(gulpConfig.SERVE_PORT, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', `http://localhost:${gulpConfig.SERVE_PORT}`);
  });
});
