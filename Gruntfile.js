module.exports = function(grunt) {
    grunt.initConfig(require('./grunt/config'));

    // Load NPM tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-text-replace');

    // Load task-related files from the tasks directory, relative to the grunt.js gruntfile.
    grunt.loadTasks('grunt/tasks');

    grunt.registerTask('build', 'Default build task', function() {
        grunt.task.run([
            'clean',
            'copy',
            'jshint',
            'uglify',
            'stylus',
            'csslint',
            'replace'
        ]);
    });

    // Default tasks
    grunt.registerTask('default', 'build');
};
