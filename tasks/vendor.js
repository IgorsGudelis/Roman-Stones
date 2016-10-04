'use strict';

const gulp = require('gulp');

module.exports = function(options) {
	return function() {
		// Angular 2 Framework
		gulp.src(options.src.angular2)
			.pipe(gulp.dest(options.dest.angular2));

		//ES6 Shim
		gulp.src(options.src.corejs)
			.pipe(gulp.dest(options.dest.corejs));

		//reflect metadata
		gulp.src(options.src.reflect)
			.pipe(gulp.dest(options.dest.reflect));

		//rxjs
		gulp.src(options.src.rxjs)
			.pipe(gulp.dest(options.dest.rxjs));

		//systemjs
		gulp.src(options.src.systemjs)
			.pipe(gulp.dest(options.dest.systemjs));

		//zonejs
		gulp.src(options.src.zonejs)
			.pipe(gulp.dest(options.dest.zonejs));

		//jquey
		gulp.src(options.src.jquery)
			.pipe(gulp.dest(options.dest.jquery));

		//bootstrap
		return gulp.src(options.src.bootstrap)
			.pipe(gulp.dest(options.dest.bootstrap));
	}
};
