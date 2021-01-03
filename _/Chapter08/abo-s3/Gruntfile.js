module.exports = function(grunt) {
grunt.initConfig({
pkg: grunt.file.readJSON('package.json'),

concat: {
options: {
//define a string to put between each file in the
//concatenated output
separator: ';'
},
dist: {
// the files to concatenate
src: ['app/bower_components/angular/angular.js',
'app/bower_components/angular-route/angular-route.js',
'app/js/**/*.js'],
// the location of the resulting JS file
dest: 'app/build/<%= pkg.name %>.js'
}
},
uglify: {
options: {
banner: '/*! <%= pkg.name %> <%=grunt.template.today("yyyy-mm-dd") %> */\n'
},
build: {
src: 'app/build/<%= pkg.name %>.js',
dest: 'app/build/<%= pkg.name %>.min.js'
}
}
});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['concat','uglify']);

};
