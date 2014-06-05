module.exports = function (grunt) {

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('notify', function () {
		console.log('Something happened...');
	});

	grunt.registerTask('default', [
		'notify'
	]);
};
