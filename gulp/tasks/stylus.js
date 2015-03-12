var _ = require('lodash');
var gulp = require('gulp');
var header = require('gulp-header');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

module.exports = function(options) {
    var banner = options.config.banner;
    var pkg = options.config.pkg;

    gulp.task('stylus:debug', function() {
        var stylusConfig = options.config.stylus;
        var opts = _.extend({}, stylusConfig.options, {
            compress: false
        });
        var outputFile = 'kickstart.css';

        return gulp.src(stylusConfig.src)
            .pipe(stylus(opts))
                .on('error', options.errorHandler.error)
            .pipe(header(banner, {pkg: pkg}))
            .pipe(rename(outputFile))
            .pipe(gulp.dest(stylusConfig.dest));
    });
    gulp.task('stylus:dist', function() {
        var stylusConfig = options.config.stylus;
        var opts = _.extend({}, stylusConfig.options, {
            compress: true
        });
        var outputFile = 'kickstart.min.css';

        return gulp.src(stylusConfig.src)
            .pipe(stylus(opts))
                .on('error', options.errorHandler.error)
            .pipe(header(banner, {pkg: pkg}))
            .pipe(rename(outputFile))
            .pipe(gulp.dest(stylusConfig.dest));
    });
    gulp.task('stylus', ['stylus:debug', 'stylus:dist']);
};
