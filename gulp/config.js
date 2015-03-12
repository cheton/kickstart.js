//
// https://github.com/kogakure/gulp-tutorial/blob/master/gulp/config.js
//
module.exports = {
    clean: {
        dist: [
            'dist'
        ]
    },
    copy: {
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
        src: [
            'src/kickstart.js'
        ],
        dest: 'dist/js/'
    },
    stylus: {
        src: ['*.{styl}'],
        dest: '.'
    }
};
