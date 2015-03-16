var gulp = require('gulp');
var config = require('../config').fonts;
var browserSync = require('browser-sync');

gulp.task('fonts', function () {
    console.log('fonts task')
    return gulp.src(config.src)
        .pipe(gulp.dest(config.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
