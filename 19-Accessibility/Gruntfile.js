module.exports = function(grunt) {

  filesJS = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/microplugin/src/microplugin.js',
    'bower_components/sifter/sifter.js',
    'bower_components/selectize/dist/js/selectize.js',
    'bower_components/flexslider/jquery.flexslider.js',
    'js/global.js',
    'bower_components/placeholders/dist/placeholders.js',
    'bower_components/picturefill/dist/picturefill.js',
  ];
  filesCSS = [
    'bower_components/selectize/dist/css/selectize.css',
    'bower_components/flexslider/flexslider.css',
    'bower_components/normalize.css/normalize.css',
    'css/styles.css',
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
      },
      concatJS: {
        src: filesJS,
        dest: 'js/all-js.js',
      },
      concatCSS: {
        src: filesCSS,
        dest: 'css/all-css.css',
      },
    },

    uglify: {
      my_target: {
        files: {
          'js/all-js.min.js': ['js/all-js.js']
        }
      }
    },

    cssmin: {
      target: {
        files: {
          'css/all-css.min.css': ['css/all-css-prefixed.css']
        }
      }
    },

    injector: {
      options: {
        addRootSlash:false,
      },
      dev: {
        files: {
          'index.html': [filesJS, filesCSS],
        }
      },
      prod: {
        files: {
          'index.html': ['js/all-js.min.js','css/all-css.min.css'],
        }
      }
    },

    autoprefixer: {
      single_file: {
        options: {
          // Target-specific options go here.
        },
        src: 'css/all-css.css',
        dest: 'css/all-css-prefixed.css'
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Default task(s).
  grunt.registerTask('default', ['injector:dev']);
  grunt.registerTask('prod', ['concat', 'uglify', 'autoprefixer', 'cssmin', 'injector:prod']);

};