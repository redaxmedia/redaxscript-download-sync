module.exports = function ()
{
	'use strict';

	var config =
	{
		distDevelopment:
		{
			src:
			[
				'!dist',
				'assets/**',
				'benchs/**',
				'cache/**',
				'database/**',
				'includes/**',
				'languages/**',
				'modules/**',
				'tasks/**',
				'templates/**',
				'tests/**',
				'config.php',
				'console.php',
				'index.php',
				'install.php',
				'.htaccess',
				'.htmlhintrc',
				'.jscsrc',
				'.jshintrc',
				'.stylelintrc',
				'.tocgen',
				'composer.json',
				'gruntfile.js',
				'package.json',
				'phpcs.xml',
				'phpunit.xml',
				'README.md',
				'web.config'
			],
			cwd: 'vendor/redaxmedia/redaxscript/',
			expand: true,
			dot: true,
			options:
			{
				archive: 'build/releases/redaxscript-<%= version %>-development.zip'
			}
		},
		distProductionFull:
		{
			src:
			[
				'assets/**',
				'cache/**',
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
				'.htaccess',
				'web.config'
			],
			cwd: 'vendor/redaxmedia/redaxscript/',
			expand: true,
			dot: true,
			options:
			{
				archive: 'build/releases/redaxscript-<%= version %>-production-full.zip'
			}
		},
		distProductionLite:
		{
			src:
			[
				'assets/**',
				'cache/**',
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
				'.htaccess',
				'web.config'
			],
			cwd: 'vendor/redaxmedia/redaxscript/',
			expand: true,
			dot: true,
			options:
			{
				archive: 'build/releases/redaxscript-<%= version %>-production-lite.zip'
			}
		}
	};

	return config;
};