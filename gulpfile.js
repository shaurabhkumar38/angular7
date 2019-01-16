/* variable defination */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('welcome-message', async function(){
	return console.log('welcome gulp');
});

/*
gulp.task('copy-files', async function(){
	return gulp.src('assets/src/css/*.css')
	.pipe(gulp.dest('assets/dist/css'))
});
*/

gulp.task('sass', function(){
	return gulp.src('assets/src/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('assets/dist/css'));
});

gulp.task('minify-js', async function(){
	return gulp.src('assets/src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('assets/dist/js'));
});

gulp.task('concat', async function(){
	return gulp.src('assets/src/js/*.js')
	.pipe(concat('app.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/dist/js'));
});

/* Auomation watcher */

gulp.task('watch', function(){
	gulp.watch('assets/src/scss/*.scss', gulp.series('sass'));
	//gulp.watch('assets/src/js/*.js', gulp.series('concat'));
});

gulp.task('default', gulp.series('welcome-message'));
