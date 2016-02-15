var gulp = require('gulp');

// Run this to compress all the things!
gulp.task('production', ['assets', 'images', 'minifyHtml', 'minifyCss', 'uglifyJs']);
