var gulp = require('gulp');
var config = require('../config').production;
var cssnano = require('gulp-cssnano');
var size = require('gulp-filesize');

gulp.task('minifyCss', ['sass'], function() {
    return gulp.src(config.cssSrc)
        .pipe(cssnano())
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe(size());
});
