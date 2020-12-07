module.exports = () =>
{
	const config =
	{
		deploy:
		{
			src:
			[
				'build'
			],
			dest: 'redaxscript/_download',
			options:
			{
				commandArray:
				[
					'mirror {SOURCE} {TARGET} --reverse --delete-first --parallel=10 --use-pget-n=10',
					'rm -rf redaxscript/cache/pages',
					'exit'
				],
				haltOnError: true
			}
		},
		download:
		{
			src:
			[
				'redaxscript/_download'
			],
			dest: 'download',
			options:
			{
				commandArray:
				[
					'mirror {SOURCE} {TARGET} --delete-first --parallel=10 --use-pget-n=10',
					'exit'
				],
				haltOnError: true
			}
		},
		options:
		{
			url: process.env.FTP_URL
		}
	};

	return config;
};
