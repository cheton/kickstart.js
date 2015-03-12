var _ = require('lodash');
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var rename = require('gulp-rename');

module.exports = function(options) {
    /**
     * Compile Stylus with gulp
     */
    gulp.task('stylus:debug', function() {
        var stylusConfig = _.extend({}, options.config.stylus, {
            compress: false
        });

        return gulp.src(stylusConfig.src)
            .pipe(stylus(stylusConfig.options))
                .on('error', options.errorHandler.error)
            .pipe(gulp.dest(stylusConfig.dest));
    });
    gulp.task('stylus:dist', function() {
        var stylusConfig = _.extend({}, options.config.stylus, {
            compress: true
        });

        return gulp.src(stylusConfig.src)
            .pipe(stylus(stylusConfig.options))
                .on('error', options.errorHandler.error)
            .pipe(rename('kickstart.min.css'))
            .pipe(gulp.dest(stylusConfig.dest));
    });
    gulp.task('stylus', ['stylus:debug', 'stylus:dist']);
};
