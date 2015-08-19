module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2,
                    sourceMap:true,
                    sourceMapFilename:"../css/local.css.map"
                },
                files: {
                    "../css/local.css": "local.less" // destination file and source file
                }
            }
        },
        watch: {
            styles: {
                files: ['**/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                    livereload:true,
                    nospawn: true
                }
            }
        }
    });

    grunt.registerTask('default', ['less', 'watch']);
};