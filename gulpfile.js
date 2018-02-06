var gulp = require('gulp');
var csso = require('gulp-csso');
var concatCss = require('gulp-concat-css'); 
var connect = require('gulp-connect');
var  includer = require('gulp-htmlincluder');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');




gulp.task('server', function(){
	connect.server({
		root:'build/',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('dev/**/*.html')
		.pipe(htmlincluder())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(rename(function(path){
			path.dirname=''
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
})
  