var path = require('path');
var pkg = require('../package.json');
var jshintConfig = require('../config/jshint');
var csslintConfig = require('../config/csslint');

module.exports = {
    pkg: pkg,
    meta: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    clean: {
        all: [
            'dist'
        ]
    },
    jshint: {
        options: jshintConfig,
        all: [
            'src/**/*.{js,json}',
            'i18n/**/*.{js,json}'
        ]
    },
    csslint: {
        options: csslintConfig,
        all: [
            'dist/**/*.css'
        ]
    },
    copy: {
        dist: {
            options: {
                processContent: false,
                processContentExclude: [
                ]
            },
            files: [
                {
                    expand: true,
                    src: ['i18n', 'images'],
                    dest: 'dist'
                }
            ]
        }
    },
    replace: {
        dist: {
            src: ['dist/**/*.{js,css}'],
            overwrite: true, // overwrite matched source files
            replacements: [{
                from: '__VERSION__',
                to: pkg.version
            }]
        }
    },
    stylus: {
        options: {
            banner: '<%= meta.banner %>'
        },
        debug: {
            options: {
                compress: false
            },
            files: {
                'dist/css/kickstart.css': 'src/kickstart.styl'
            }
        },
        dist: {
            options: {
                compress: true
            },
            files: {
                'dist/css/kickstart.min.css': 'src/kickstart.styl'
            }
        }
    },
    uglify: {
        options: {
            banner: '<%= meta.banner %>',
            mangle: false
        },
        debug: {
            options: {
                beautify: true,
                compress: false
            },
            files: {
                'dist/js/kickstart.js': 'src/kickstart.js'
            }
        },
        dist: {
            options: {
                beautify: false,
                compress: true
            },
            files: {
                'dist/js/kickstart.min.js': 'src/kickstart.js'
            }
        }
    }
};
