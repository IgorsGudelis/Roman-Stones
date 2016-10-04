'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const combiner = require('stream-combiner2').obj;

module.exports = function(options) {
	return function() {
		return combiner(
			gulp.src(options.src),
			imagemin({//compresses images
				progressive: true,
				svgoPlugins: [{removeViewBox: false}],
				use: [pngquant()],
				interlaced: true
			}),
			gulp.dest(options.dest)
		).on('error', $.notify.onError());
	}
};
