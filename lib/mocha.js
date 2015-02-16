'use strict';

var _ = require('ls-lodash'),
    gulp = require('gulp'),
    gulpMocha = require('gulp-mocha'),
    path = require('path');

module.exports = function lvsfGulpMocha(testDirs, opts) {
    return function mocha() {
        var useSpecReporter = process.env.CI || process.env.LVSF_NO_SILLY,
            circleTestReports = process.env.CIRCLE_TEST_REPORTS,
            mochaOpts = {
                reporter: useSpecReporter ? 'spec' : 'nyan'
            };
            
        if (circleTestReports) {
            mochaOpts.reporterOptions = {
                output: path.join(circleTestReports, 'Mocha', 'tests.xml')
            }
        }
        
        // Yes, side-effect unsafe merge.  Okay....
        _.merge(mochaOpts, opts || {});

        return gulp.src(testDirs, { read: false })
            .pipe(gulpMocha(mochaOpts));
    }
};
