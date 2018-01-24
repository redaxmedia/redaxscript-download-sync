module.exports = grunt =>
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('vendor/redaxscript/redaxscript/package.json').version,
		shell: require('./tasks/shell')(grunt),
		compress: require('./tasks/compress')(grunt)
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
};
