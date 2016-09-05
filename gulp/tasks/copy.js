const gulp = require('gulp');
const gulpCopy = require('gulp-copy');

const gulpConfig = require('../shared/config')();

gulp.task('copy:dist', () =>
  gulp.src([`${gulpConfig.client}/assets/**/*`])
    .pipe(gulpCopy(`${gulpConfig.dist}`, { prefix: 1 }))
);
