module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('vendor/redaxmedia/redaxscript/package.json').version,
		shell:
		{
			removeBuild:
			{
				command: 'rm -rf build'
			},
			options:
			{
				stdout: true,
				failOnError: true
			}
		},
		compress:
		{
			distFull:
			{
				src:
				[
					'assets/**',
					'database/**',
					'dist/**',
					'includes/**',
					'languages/**',
					'libraries/**',
					'modules/**',
					'templates/**',
					'config.php',
					'console.php',
					'index.php',
					'install.php',
					'README.md',
					'.htaccess'
				],
				cwd: 'vendor/redaxmedia/redaxscript/',
				expand: true,
				dot: true,
				options:
				{
					archive: 'build/releases/redaxscript-<%= version %>-full.zip'
				}
			},
			distLite:
			{
				src:
				[
					'assets/**',
					'database/**',
					'dist/**',
					'includes/**',
					'languages/en.json',
					'libraries/**',
					'modules/CallHome/**',
					'modules/Validator/**',
					'templates/admin/**',
					'templates/console/**',
					'templates/default/**',
					'templates/install/**',
					'config.php',
					'console.php',
					'index.php',
					'install.php',
					'README.md',
					'.htaccess'
				],
				cwd: 'vendor/redaxmedia/redaxscript/',
				expand: true,
				dot: true,
				options:
				{
					archive: 'build/releases/redaxscript-<%= version %>-lite.zip'
				}
			}
		}
	});

	/* dynamic compress */

	grunt.dynamicCompress = function (cwd, path)
	{
		var directoryArray = grunt.file.expand(cwd + path),
			infoArray;

		for (var i in directoryArray)
		{
			infoArray = directoryArray[i].replace(cwd, '').split('.');
			grunt.config.set('compress.' + infoArray[0],
			{
				src:
				[
					infoArray[1] ? infoArray[0] + '.' + infoArray[1] : infoArray[0] + '/**'
				],
				cwd: cwd,
				expand: true,
				dot: true,
				options:
				{
					archive: 'build/' + infoArray[0] + '.zip'
				}
			});
		}
	};
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'languages/*.json');
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'modules/*');
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'templates/*');

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'compress'
	]);
};
