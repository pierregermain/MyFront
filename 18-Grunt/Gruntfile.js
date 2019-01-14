module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      concatJS: {
        src: ['bower_components/jquery/dist/jquery.js','bower_components/microplugin/src/microplugin.js'],
        dest: 'dist/built.js'
      },
      concatCSS: {
        src: ['bower_components/jquery/dist/jquery.js','bower_components/microplugin/src/microplugin.js'],
        dest: 'dist/built.css'
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['concat']);

};
