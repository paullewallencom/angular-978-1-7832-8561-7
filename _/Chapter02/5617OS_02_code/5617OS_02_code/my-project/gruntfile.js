module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
 
 	jshint:{
    	all:['scripts.js']
 	},
 	concat: {
   		dist: {
       		src: ['scripts.js', 'scripts1.js','scripts2.js'],
       		dest: 'merged.js'
            }
    },

	uglify: {
   		dist: {
   			src: 'merged.js',
   			dest: 'build/merged.min.js'
    	}
    },
    shell: {
    	multiple: {
        	command: [
            	'rm -rf merged.js',
            	'mkdir deploy',
            	'mv build/merged.min.js deploy/merged.min.js'
        	].join('&&')
    	}
	}
    });

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	// Default task.
	grunt.registerTask('default', ['jshint','concat','uglify', 'shell']);
};
