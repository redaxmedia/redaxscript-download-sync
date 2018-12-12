module.exports = () =>
{
	'use strict';

	const config =
	{
		distFull:
		{
			src:
			[
				'assets/**',
				'cache/**',
				'database/**',
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
			cwd: 'vendor/redaxscript/redaxscript/',
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
				'cache/**',
				'database/**',
				'dist/**',
				'includes/**',
				'languages/en.json',
				'libraries/**',
				'modules/AliasGenerator/**',
				'modules/CallHome/**',
				'modules/Dialog/**',
				'modules/FormValidator/**',
				'modules/HtmlValidator/**',
				'modules/LiveReload/**',
				'modules/TextareaResizer/**',
				'modules/TableSorter/**',
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
			cwd: 'vendor/redaxscript/redaxscript/',
			expand: true,
			dot: true,
			options:
			{
				archive: 'build/releases/redaxscript-<%= version %>-lite.zip'
			}
		}
	};

	return config;
};