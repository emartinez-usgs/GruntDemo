module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		browserify: {
			development: {
				src: ['src/js/main.js'],
				dest: '.tmp/js/index.js',
				options: {
					bundleOptions: {
						debug: true // Include source maps
					}
				}
			}
		},

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
					base: ['.tmp', 'src', 'node_modules'],
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
				tasks: ['browserify:development', 'notify:js']
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
					'.tmp/css/**/*.css',
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
		'browserify:development',
		'compass:development',
		'connect:development',
		'watch'
	]);
};
