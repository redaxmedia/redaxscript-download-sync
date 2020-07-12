module.exports = () =>
{
	const config =
	{
		validateBuild:
		{
			src:
			[
				'build/**/*.zip'
			],
			dest: 'validate'
		},
		validateDownload:
		{
			src:
			[
				'download/**/*.zip'
			],
			dest: 'validate'
		},
		options:
		{
			checkCRC32: true
		}
	};

	return config;
};
