var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function(options) {
    gulp.task('build', function(callback) {
        runSequence('clean',
            'copy',
            ['build-scripts', 'build-styles'],
            callback
        );
    });
    gulp.task('build-scripts', ['jshint', 'uglify']);
    gulp.task('build-styles', ['stylus', 'csslint']);
};
