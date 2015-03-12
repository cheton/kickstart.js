var gulp = require('gulp');
var del = require('del');

module.exports = function(options) {
    /**
     * Delete folder and files
     */
    gulp.task('clean-dist', function(callback) {
        var cleanConfig = options.config.clean;
        del(cleanConfig.dist, callback);
    });
    gulp.task('clean', ['clean-dist']);
};
