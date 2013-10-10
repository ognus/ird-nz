module.exports = function(grunt) { 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    uglify: {
      irdnz: {
        files: {
          'irdnz.min.js': ['irdnz.js']
        }
      }
    },
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: { src: ['test/**/*.js'] }
    }
  });

  grunt.registerTask('default', 'uglify');
  grunt.registerTask('test', 'simplemocha');
};