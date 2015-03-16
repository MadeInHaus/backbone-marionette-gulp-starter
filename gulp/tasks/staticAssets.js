var gulp = require('gulp');
var config = require('../config').staticAssets;
var browserSync = require('browser-sync');

gulp.task('staticAssets', function () {
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
