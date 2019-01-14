module.exports = function(grunt) {

  // Arrays
  filesJS = [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/microplugin/src/microplugin.js'
  ];
  filesCSS = [
          'node_modules/normalize.css/normalize.css',
          'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      // Add all Files here
      concatJS: {
        src: filesJS,
        dest: 'js/all-js.js'
      },
      concatCSS: {
        src: filesCSS,
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

    injector: {
      options: {},
      dev: {
        files: {
          'index.html': [filesJS, filesCSS],
        }
      }
    },



  });


  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-injector');


  // Default task(s).
  //grunt.registerTask('default', ['concat:concatJS']);
  grunt.registerTask('default', ['concat','uglify','cssmin','injector']);

};
