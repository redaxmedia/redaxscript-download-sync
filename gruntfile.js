module.exports = function (grunt)
{
	'use strict';

	/* config grunt */

	grunt.initConfig(
	{
		version: grunt.file.readJSON('package.json').version,
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
		},
		deployFTP:
		{
			files:
			{
				src:
				[
					'build'
				],
				dest: 'files',
				auth:
				{
					host: 'develop.redaxscript.com',
					port: 21,
					authKey: 'develop',
					authPath: '../credentials/.redaxscript'
				}
			}
		}
	});

	/* dynamic compress */

	grunt.dynamicCompress = function (cwd, path)
	{
		var target = grunt.file.expand(cwd + path),
			targetArray;

		for (var i in target)
		{
			targetArray = target[i].replace(cwd, '').split('.');
			grunt.config.set('compress.' + targetArray[0],
			{
				src:
				[
					targetArray[1] ? targetArray[0] : targetArray[0] + '/**'
				],
				cwd: cwd,
				expand: true,
				dot: true,
				options:
				{
					archive: 'build/' + targetArray[0] + '.zip'
				}
			});
		}
	};
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'languages/*.json');
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'modules/*');
	grunt.dynamicCompress('vendor/redaxmedia/redaxscript/', 'templates/*');

	/* load tasks */

	require('load-grunt-tasks')(grunt);

	/* rename tasks */

	grunt.task.renameTask('ftp-deploy', 'deployFTP');
	
	/* register tasks */

	grunt.registerTask('default',
	[
		'shell:removeBuild',
		'compress'
	]);
	grunt.registerTask('deploy',
	[
		'deployFTP'
	]);
};
