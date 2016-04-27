var gulp = require('gulp');
var config = require('../config').production;
var cleanCSS = require('gulp-clean-css');
var size = require('gulp-filesize');

gulp.task('minifyCss', ['sass'], function() {
    return gulp.src(config.cssSrc)
        .pipe(cleanCSS())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(size());
});
