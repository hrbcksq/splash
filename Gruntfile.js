//global

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({

    // Grunt express - our webserver
    express: {
      options : { /* Override defaults here */ },
      dev: {
        options : {          
          script : "server/server.js"   
        }
      }
    },

    // grunt-watch will monitor the projects files
    watch: {
      options: {
        livereload: true,
      },
      css:{                
        files:  [ 'scss/*.scss' ],
        tasks:  [ 'sass:dist' ]
      },
      express: {
        files: ['public/*.html'],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        } 
      }      
    },
    
    //grunt-sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          "public/css/style.css": "scss/style.scss"
        }
      }
    },

    //grunt-open
    open: {
      all:{
        path: 'http://localhost:80/'
      }
    }
   
  });

  grunt.registerTask('default', ['sass:dist','express:dev', 'open', 'watch']);
  grunt.registerTask('scss', ['sass']);

};
