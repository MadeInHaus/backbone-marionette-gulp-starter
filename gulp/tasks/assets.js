var gulp = require('gulp');
var config = require('../config').assets;
var browserSync = require('browser-sync');

gulp.task('assets', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
