var _ = require('lodash');
var gulp = require('gulp');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function(options) {
    var banner = options.config.banner;
    var pkg = options.config.pkg;

    gulp.task('uglify', ['uglify:debug', 'uglify:dist']);
    gulp.task('uglify:debug', ['jshint'], function() {
        var uglifyConfig = options.config.uglify;
        var opts = _.extend({}, uglifyConfig.options, {
            output: {
                beautify: true,
                comments: true
            },
            compress: false,
            mangle: false
        });
        var outputFile = 'kickstart.js';

        return gulp.src(uglifyConfig.src)
            .pipe(uglify(opts))
                .on('error', options.errorHandler.error)
            .pipe(header(banner, {pkg: pkg}))
            .pipe(rename(outputFile))
            .pipe(gulp.dest(uglifyConfig.dest));
    });
    gulp.task('uglify:dist', ['jshint'], function() {
        var uglifyConfig = options.config.uglify;
        var opts = _.extend({}, uglifyConfig.options, {
            compress: true,
            mangle: true
        });
        var outputFile = 'kickstart.min.js';

        return gulp.src(uglifyConfig.src)
            .pipe(uglify(opts))
                .on('error', options.errorHandler.error)
            .pipe(header(banner, {pkg: pkg}))
            .pipe(rename(outputFile))
            .pipe(gulp.dest(uglifyConfig.dest));
    });
};
