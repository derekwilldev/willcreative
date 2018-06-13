'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');



// compile sass
gulp.task('sass', function() {
	gulp.src('assets/css/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('main.css'))
		.pipe(gulp.dest('assets/css/'));
});


gulp.task('sass:watch', function() {
	gulp.watch('assets/css/scss/**/*.scss', ['sass']);
});