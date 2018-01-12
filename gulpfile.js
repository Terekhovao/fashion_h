var gulp = require("gulp");
var includer = require("gulp-htmlincluder");
var connect = require("gulp-connect");
var csso = require("gulp-csso");
var cssConcat = require("gulp-concat-css");
var rename = require("gulp-rename");

gulp.task('html', function(){
	gulp.src('dev/**/*.html')
	.pipe(includer())
	.pipe(rename(function(path){
		path.dirname = " "
	}))
	.pipe(gulp.dest('build/index.html'))
});


