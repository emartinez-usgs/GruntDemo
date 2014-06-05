module.exports = function (grunt) {

	grunt.registerTask('notify', function () {
		console.log('Something happened...');
	});

	grunt.registerTask('default', [
		'notify'
	]);
};
