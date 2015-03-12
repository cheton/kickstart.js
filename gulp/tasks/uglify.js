var _ = require('lodash');
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

module.exports = function(options) {
    /**
     * Minify JavaScript with UglifyJS2.
     */
    gulp.task('uglify:debug', ['jshint'], function() {
        var uglifyConfig = _.extend({}, options.config.uglify, {
            compress: false,
            mangle: false,
            preserveComments: true
        });

        return gulp.src(uglifyConfig.src)
            .pipe(uglify(uglifyConfig.options))
                .on('error', options.errorHandler.error)
            .pipe(gulp.dest(uglifyConfig.dest));
    });
    gulp.task('uglify:dist', ['jshint'], function() {
        var uglifyConfig = _.extend({}, options.config.uglify, {
            compress: true,
            mangle: true
        });

        return gulp.src(uglifyConfig.src)
            .pipe(uglify(uglifyConfig.options))
                .on('error', options.errorHandler.error)
            .pipe(rename('kickstart.min.js'))
            .pipe(gulp.dest(uglifyConfig.dest));
    });
    gulp.task('uglify', ['uglify:debug', 'uglify:dist']);
};
