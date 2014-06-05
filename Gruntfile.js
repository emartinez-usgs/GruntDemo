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
