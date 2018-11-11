module.exports = () =>
{
	'use strict';

	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'www/htdocs/w00976cb/redaxscript/files',
			options:
			{
				command: 'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10; exit'
			}
		},
		download:
		{
			src:
			[
				'www/htdocs/w00976cb/redaxscript/files'
			],
			dest: 'download',
			options:
			{
				command: 'mirror {SOURCE} {TARGET} --delete-first --parallel=10 --use-pget-n=10; exit'
			}
		},
		options:
		{
			url: process.env.FTP_URL
		}
	};

	return config;
};
