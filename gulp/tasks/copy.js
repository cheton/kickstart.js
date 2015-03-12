var gulp = require('gulp');

module.exports = function(options) {
    /**
     * Copy source files to new destination
     */
    gulp.task('copy', function(callback) {
        var copyConfig = options.config.copy;
        return gulp.src(copyConfig.src, {base: copyConfig.base})
            .pipe(gulp.dest(copyConfig.dest));
    });
};
