module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('vendor/redaxscript/redaxscript/package.json').version,
		compress: require('./tasks/compress')(grunt),
		ftpress: require('./tasks/ftpress')(grunt),
		shell: require('./tasks/shell')(grunt),
		unzip: require('./tasks/unzip')(grunt)
	});

	/* dynamic compress */

	require('./tasks/dynamic_compress')(grunt,
	[
		'languages/*.json',
		'modules/*',
		'templates/default',
		'templates/skeleton',
		'templates/wide'
	]);

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'compress'
	]);
	grunt.registerTask('deploy',
	[
		'ftpress:deploy'
	]);
	grunt.registerTask('download',
	[
		'ftpress:download'
	]);
	grunt.registerTask('validateBuild',
	[
		'unzip:validateBuild',
		'shell:removeValidate'
	]);
	grunt.registerTask('validateDownload',
	[
		'unzip:validateDownload',
		'shell:removeValidate'
	]);
};
