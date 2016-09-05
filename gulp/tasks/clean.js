const gulp = require('gulp');
const clean = require('gulp-clean');

const gulpConfig = require('../shared/config')();

gulp.task('clean:dist', () =>
  gulp.src(`${gulpConfig.dist}/*`, { read: false })
    .pipe(clean())
);
