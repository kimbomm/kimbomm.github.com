module.exports = function(grunt) {

  // 프로젝트 환경설정.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    serve:{
      options:{
        port:8800
      }
    },
    less: {
      product: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'assets/css/style.css': 'assets/less/import.less'
        }
      },
      development: {
        options: {
          paths: ['assets/less'],
          dumpLineNumbers:"comments"
        },
        files: {
          'assets/css/dev/style.dev.css': 'assets/less/import.less'
        }
      }
    },
    watch: {
      less: {
        files: ['assets/less/*.less','assets/**/*.less'],
        tasks: ['less'],
        options: {
          spaw:false
        }
      }
    }
  });

  // 플러그인 로드.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
