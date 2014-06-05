module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({
		connect: {
			development: {
				options: {
					base: 'src',
					open: true
				}
			}
		}
	});

	grunt.registerTask('notify', function () {
		console.log('Something happened...');
	});

	grunt.registerTask('default', [
		'notify'
	]);
};
