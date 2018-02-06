var gulp = require('gulp');
var csso = require('gulp-csso');
var concatCss = require('gulp-concat-css'); 
var connect = require('gulp-connect');
var  includer = require('gulp-htmlincluder');
var rename = require('gulp-rename');


gulp.task('html', function(){
	gulp.src('dev/**/*.html')
		.pipe(includer())
		.pipe(rename(function(path){
			path.dirname=''
		}))
		.pipe(gulp.dest('build/'))
})


  