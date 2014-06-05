module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		connect: {
			development: {
				options: {
					base: 'src',
					open: true
				}
			}
		},

		watch: {
			css: {
				files: ['src/css/**/*.css'],
				tasks: ['notify:css']
			},
			html: {
				files: ['src/**/*.html'],
				tasks: ['notify:html']
			},
			js: {
				files: ['src/js/**/*.js'],
				tasks: ['notify:js']
			},

			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['notify:gruntfile']
			},
			livereload: {
				options: {
					livereload: true
				},
				files: [
					'src/css/**/*.css',
					'src/**/*.html',
					'src/js/**/*.js'
				]
			},
		}
	});

	grunt.registerTask('notify', function () {
		console.log('Something happened...');
	});

	grunt.registerTask('default', [
		'notify',
		'connect:development:keepalive'
	]);
};
