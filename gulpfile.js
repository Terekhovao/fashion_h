var gulp = require('gulp');
var csso = require('gulp-csso');
var concatCss = require('gulp-concat-css');
var connect = require('gulp-connect');
var  htmlincluder = require('gulp-htmlincluder');
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
			collapseWhitespace: true,
			removeComments:1
		}))
		.pipe(rename(function(path){
			path.dirname=''
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

gulp.task('move', function(){
    gulp.src('dev/assets/img/*.*')
        .pipe(rename(function(path){
            path.dirname=""
        }))
        .pipe(gulp.dest('build/img/'));
});


gulp.task('css', function(){
	gulp.src('dev/assets/css/*.css')
        .pipe(concatCss("css/mystyle.css"))
		.pipe(csso('css/mystyle.css'))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

gulp.task('default', function(){
	gulp.start(['server', 'move', 'html', 'css']);


	gulp.watch(['dev/**/*.html'], function(){
		gulp.start(['html']);
	});
	gulp.watch(['dev/assets/css/*.css'], function(){
		gulp.start(['css']);
	})
})  