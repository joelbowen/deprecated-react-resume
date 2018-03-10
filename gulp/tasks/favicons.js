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
        developerURL: 'https://joel.software/',
        path: 'assets/resources/',
        url: 'https://joel.software/',
        display: 'standalone',
        orientation: 'portrait',
        start_url: 'https://joel.software/',
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
