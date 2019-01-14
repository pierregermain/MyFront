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
    },

    uglify: {
      my_target: {
        files: {
          'js/all-js.min.js': ['js/all-js.js']
        }
      }
    } ,

    cssmin: {
      target: {
        files: {
          'css/all-css-min.css': ['css/all-css.css']
        }
      }
    },
  });


  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  //grunt.registerTask('default', ['concat:concatJS']);
  grunt.registerTask('default', ['concat','uglify','cssmin']);

};
