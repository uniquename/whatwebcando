// Generated on 2015-08-12 using
// generator-webapp-material 1.0.5
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

var git = require('git-rev-sync');

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Automatically load required grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      babel: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['babel:dist']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'postcss']
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'postcss']
      }
    },

    connect: {
      options: {
        port: 3000,
        hostname: 'localhost',
        keepalive: true
      },
      server: {
        options: {
          base: [
            '',
            '.tmp',
            '<%= config.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>'
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    eslint: {
      options: {
        configFile: '.eslintrc'
      },
      code: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/{,*/}*.js',
        '!<%= config.app %>/scripts/vendor/*'
      ]
    },

    // Compiles ES6 with Babel
    babel: {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '{,*/}*.js',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        sourceMap: true,
        sourceMapEmbed: true,
        sourceMapContents: true,
        includePaths: ['.']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          // Add vendor prefixed styles
          require('autoprefixer-core')({
            browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
          })
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        src: ['<%= config.app %>/index.html'],
        ignorePath: /^(\.\.\/)*\.\./
      },
      sass: {
        src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /^(\.\.\/)+/
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= config.dist %>/scripts/*.js',
          '<%= config.dist %>/styles/*.css',
          '<%= config.dist %>/styles/fonts/*.*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: [
          '<%= config.dist %>',
          '<%= config.dist %>/images',
          '<%= config.dist %>/styles'
        ],
        patterns: {
          js: [
            [/'\/([^']+)'/gm, 'Update the js value to reference our revved url']
          ]
        }
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css'],
      js: ['<%= config.dist %>/sw.js']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          // true would impact styles with attribute selectors
          removeRedundantAttributes: false,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '{,*/}*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care
    // of minification. These next options are pre-configured if you do not
    // wish to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= config.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= config.dist %>/scripts/scripts.js': [
    //         '<%= config.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },

    concat: {
      sw: {
        options: {
          banner: 'const VERSION = \'' + git.short() + '\'; const groups = ',
          separator: ';\n'
        },

        src: ['build/groups.json', '<%= config.app %>/scripts/sw.js'],
        dest: '<%= config.dist %>/sw.js'
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            'CNAME',
            'manifest.json',
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'styles/fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/bootstrap-material-design',
          dest: '<%= config.dist %>',
          src: [
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components/bootstrap',
          dest: '<%= config.dist %>',
          src: [
            'fonts/{,*/}*.*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: 'bower_components',
          dest: '<%= config.dist %>/scripts',
          src: [
            'babel-polyfill/*.js',
            '*/dist/*.min.js',
          ]
        }]
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'babel:dist',
        'sass'
      ],
      dist: [
        'babel:dist',
        'sass',
        'imagemin',
        'svgmin'
      ]
    },

    processhtml: {
      options: {
        commentMarker: 'process',
        includeBase: '.'
      }
    },

    staticify: {
      options: {
        featuresModule: './.tmp/scripts/features.js',
        featureTemplate: 'build/feature.html.hb',
        tmpPattern: '<%= config.dist %>/{ID}.html.hb',
        targetPattern: '<%= config.dist %>/{ID}.html'
      }
    },

    handlebars: {
      options: {
        namespace: 'Handlebars.templates'
      },
      precompile: {
        files: {
          '.tmp/scripts/feature.html.js': 'build/feature.html.hb'
        }
      }
    }
  });


  grunt.registerTask('staticify', 'Prepare static HTMLs for features', function () {
    var fs = require('fs');
    var options = this.options();
    var data = require(options.featuresModule);

    function targetPathFor(id) {
      return options.targetPattern.replace('{ID}', id);
    }

    function tmpPathFor(id) {
      return options.tmpPattern.replace('{ID}', id);
    }

    function getFilesObject(target, source) {
      var files = {};
      files[target] = [source];
      return files;
    }

    fs.renameSync(targetPathFor('index'), tmpPathFor('index'));

    var copyFiles = {};
    var hbCompile = {
      index: {
        files: getFilesObject(targetPathFor('index'), tmpPathFor('index')),
        templateData: {
          groups: data.groups
        }
      }
    };
    var processFiles = {};
    processFiles[targetPathFor('index')] = [targetPathFor('index')];

    Object.keys(data.features).forEach(function (key) {
      var id = data.features[key].id;

      copyFiles[tmpPathFor(id)] = [tmpPathFor('index')];
      hbCompile[id] = {
        files: getFilesObject(targetPathFor(id), tmpPathFor(id)),
        templateData: {
          groups: data.groups,
          featureId: id
        }
      };
      hbCompile[id + '-feature'] = {
        files: getFilesObject(targetPathFor(id + '-feature'), options.featureTemplate),
        templateData: {
          feature: data.features[key]
        }
      };
      processFiles[targetPathFor(id)] = [targetPathFor(id)];
    });

    grunt.verbose.writeln('copy:staticify keys built: ' + JSON.stringify(Object.keys(copyFiles)));
    grunt.verbose.writeln('compile-handlebars keys built: ' + JSON.stringify(Object.keys(hbCompile)));
    grunt.verbose.writeln('processhtml:staticify keys built: ' + JSON.stringify(Object.keys(processFiles)));

    grunt.config.merge({
      copy: {staticify: {files: copyFiles}},
      'compile-handlebars': hbCompile,
      processhtml: {staticify: {files: processFiles}},
      clean: {staticify: [tmpPathFor('*'), targetPathFor('*-feature')]}
    });
    grunt.task.run(['copy:staticify', 'compile-handlebars', 'processhtml:staticify', 'clean:staticify']);
  });

  grunt.registerTask('serve', 'start the server and preview your app', [
    'clean:dist',
    'concurrent:server',
    'postcss',
    'copy:dist',
    'staticify',
    'connect:server'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep',
    'handlebars:precompile',
    'useminPrepare',
    'concurrent:dist',
    'postcss',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'filerev',
    'usemin',
    'staticify',
    'htmlmin'
  ]);

  grunt.registerTask('serve-dist', [
    'build',
    'connect:dist'
  ]);

  grunt.registerTask('default', [
    'newer:eslint',
    'build'
  ]);
};
