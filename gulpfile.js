'use strict';

var gulp = require('gulp');
var litecoreTasks = require('sumcore-build');

litecoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
