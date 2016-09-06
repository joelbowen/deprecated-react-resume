const gulp = require('gulp');
const rename = require('gulp-rename');
const inject = require('gulp-inject-string');
const jsonLD = require('../shared/jsonLD');

const gulpConfig = require('../shared/config')();

gulp.task('inject:json-ld', () => {
  gulp.src(`${gulpConfig.client}/template.html`)
    .pipe(inject.replace('<!-- JSON-LD -->',
      `<script type="application/ld+json">${JSON.stringify(jsonLD)}</script>`))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(gulpConfig.dist, { overwrite: true }));
});
