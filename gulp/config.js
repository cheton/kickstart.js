//
// https://github.com/kogakure/gulp-tutorial/blob/master/gulp/config.js
//
var pkg = require('../package.json');
var banner = [
    '/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' * @link <%= pkg.homepage %>',
    ' * @license <%= pkg.license %>',
    ' */',
    ''].join('\n');

module.exports = {
    pkg: pkg,
    banner: banner,
    clean: {
        dist: [
            'dist'
        ]
    },
    copy: {
        base: '.',
        src: ['i18n/**','images/**'],
        dest: 'dist/'
    },
    csslint: {
        src: [
            'dist/**/*.css'
        ],
        options: require('../config/csslint')
    },
    jshint: {
        src: [
            'src/**/*.{js,json}',
            'i18n/**/*.{js,json}'
        ],
        options: require('../config/jshint')
    },
    uglify: {
        src: 'src/kickstart.js',
        dest: 'dist/js/'
    },
    stylus: {
        src: 'src/kickstart.styl',
        dest: 'dist/css/'
    }
};
