'use strict';
const gulp = require('gulp');
const { series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app'));
};

function watch() {
  gulp.watch('./src/**/*.scss', styles);
};


exports.dev = series(
  //clean,
  parallel(
    styles,
    //series(jsTranspile, jsBundle),
  ),
  //parallel(cssMinify, jsMinify),
  //publish,
  watch
);