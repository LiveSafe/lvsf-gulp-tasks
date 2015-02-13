'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    lsConfigs = require('ls-default-configs'),
    mergeStream = require('merge-stream');

require('jshint-stylish');

module.exports = function lvsfGulpLint(prodDirs, testDirs, opts) {
    return function lint() {
        var mainLint = gulp.src(prodDirs)
                .pipe(jshint(lsConfigs.jshintrc))
                .pipe(jshint.reporter('jshint-stylish'))
                .pipe(jshint.reporter('fail')),
    
            testLint = gulp.src(testDirs)
                .pipe(jshint(lsConfigs.jshintrcTestDir))
                .pipe(jshint.reporter('jshint-stylish'))
                .pipe(jshint.reporter('fail'));
    
        return mergeStream(mainLint, testLint); 
    };
};
