var gulp = require('gulp');
var replace = require('gulp-replace');

module.exports = function(options) {
    gulp.task('replace', function() {
        var replaceConfig = options.config.replace;
        var replacements = replaceConfig.replacements || [];
        var stream = gulp.src(replaceConfig.src)
        replacements.forEach(function(replacement) {
            stream.pipe(replace(replacement.from, replacement.to));
        });
        stream.pipe(gulp.dest(replaceConfig.dest));
        return stream;
    });
};
