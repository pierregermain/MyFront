module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      // Add all Files here
      concatJS: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/microplugin/src/microplugin.js'
        ],
        dest: 'js/all-js.js'
      },
      concatCSS: {
        src: [
          'node_modules/normalize.css/normalize.css',
          'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
        ],
        dest: 'css/all-css.css'
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);
  //grunt.registerTask('default', ['concat:concatJS']);

};
