const gulp = require('gulp');
const open = require('gulp-open');

const gulpConfig = require('../shared/config')();

gulp.task('open', () => {
  gulp.src(__filename)
    .pipe(open({ uri: `http://localhost:${gulpConfig.SERVE_PORT}` }));
});
