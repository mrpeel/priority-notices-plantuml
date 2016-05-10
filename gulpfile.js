/*global require, console */

var gulp = require('gulp');
var puml = require('gulp-puml');
 
 gulp.task('default', ['watch'], function () {

});
 
 /* Create default task to build svgs for plantuml files */
gulp.task('make-svg', function () {
	return gulp.src('puml/*.puml')
		.pipe(puml())
		.pipe(gulp.dest('images/'));
});


/* Standard watcher task */
gulp.task('watch', ['make-svg'], function () {

  //Execute the default task anytime the source puml files change
  gulp.watch('puml/**/*.puml', ['make-svg']);
});

