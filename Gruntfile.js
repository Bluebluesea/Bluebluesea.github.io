module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'gm',
          sizes: [{
            upscale:true,
            width: 800,

            suffix: '_medium',
            quality: 50
          },{
            upscale: true,
            width: 1600,

            suffix: '_large',
            quality: 50
          }, {
            width: 600,

            suffix: '_small',
            quality: 50
          },{
            width: 511,

            suffix: '_ex-small',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
