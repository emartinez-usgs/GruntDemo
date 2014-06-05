module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		compass: {
			development: {
				options: {
					sassDir: 'src/css',
					cssDir: '.tmp/css'
				}
			}
		},

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
				files: ['src/css/**/*.css','.tmp/css/**/*.css'],
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
			scss: {
				files: ['src/css/**/*.scss'],
				tasks: ['compass:development', 'notify:scss']
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

	grunt.registerTask('notify', function (task) {
		console.log('Something happened [' + task + ']...');
	});

	grunt.registerTask('default', [
		'notify',
		'compass:development',
		'connect:development',
		'watch'
	]);
};
