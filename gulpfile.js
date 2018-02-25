const gulp = require('gulp')

require('require-dir')('./gulp/tasks')

gulp.task('default', ['webpack-dev-server', 'open'])

gulp.task('build', [
  'clean:dist',
  'copy:dist',
  'webpack:build',
  'inject:json-ld'
])
