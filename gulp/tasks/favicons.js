const gulp = require('gulp')
const favicons = require('gulp-favicons')
const gutil = require('gulp-util')
const gulpConfig = require('../shared/config')()

gulp.task('favicons', () =>
  gulp
    .src(`${gulpConfig.client}/assets/images/logo.png`)
    .pipe(
      favicons({
        appName: 'Joel Bowen',
        appDescription: 'Joel Bowen: Full-Stack Engineer',
        developerName: 'Joel Bowen',
        developerURL: 'http://joelbowen.com/',
        path: 'assets/resources/',
        url: 'http://joelbowen.com/',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        version: 1.0,
        logging: false,
        online: false,
        html: 'index.html',
        pipeHTML: true,
        replace: true,
        theme_color: '#06BFEA'
      })
    )
    .on('error', gutil.log)
    .pipe(
      gulp.dest(`${gulpConfig.client}/assets/resources`, { overwrite: true })
    )
)
