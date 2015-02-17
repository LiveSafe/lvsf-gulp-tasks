'use strict';

var gulp = require('gulp'),
    qFs = require('q-io/fs');

module.exports = function lvsfGulpLint(dirToClean, opts) {
    return function clean() {
        return qFs.isDirectory(dirToClean).then(function(isDir) {
            return isDir ? qFs.removeTree(dirToClean) : void 0;
        });
    };
};
