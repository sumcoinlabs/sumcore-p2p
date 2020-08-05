'use strict';

var gulp = require('gulp');
var sumcoreTasks = require('sumcore-build');

sumcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
