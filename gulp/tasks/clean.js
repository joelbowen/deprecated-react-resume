const gulp = require('gulp');
const del = require('del');

const gulpConfig = require('../shared/config')();

gulp.task('clean:dist', () => del([`${gulpConfig.dist}/**/*`]));
