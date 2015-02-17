'use strict';

var gulp = require('gulp'),
    jscs = require('gulp-jscs'),
    lsConfigs = require('ls-default-configs');

module.exports = function lvsfGulpLint(dirsToCheck) {
    return function checkstyle() {
        return gulp.src(dirsToCheck).pipe(jscs(lsConfigs.jscsrc));
    };
};
