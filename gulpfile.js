const gulp = require('gulp')

require('require-dir')('./gulp/tasks')

gulp.task('default', ['webpack-dev-server', 'open'])
gulp.task('pre:build', ['inject:json-ld'])
gulp.task('build', ['copy:dist', 'webpack:build'])
