var gulp = require('gulp');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del =  require('del');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var config = require('../gulp_config');

var bootstrapJsConfig = {
	in: config.bootstrapDir + 'assets/fonts/bootstrap/**/*',
	out: config.dest + 'fonts/'
}

gulp.task('build:bootstrap-fonts', function() {
	return gulp.src(bootstrapJsConfig.in)
		.pipe(gulp.dest(bootstrapJsConfig.out))
		.pipe(plumber({
			errorHandler: notify.onError("Font Error: <%= error.message %>")
		}));
});