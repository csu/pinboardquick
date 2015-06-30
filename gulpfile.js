var gulp = require('gulp');
var zip = require('gulp-zip');

var filesToInclude = [
    './*.png',
    './*.js',
    './*.html',
    './manifest.json'
];

gulp.task('default', ['build']);

gulp.task('build', function () {
    return gulp.src(filesToInclude, { base: './' })
        .pipe(zip('release.zip'))
        .pipe(gulp.dest('.'));
});
