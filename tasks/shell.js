module.exports = () =>
{
	const config =
	{
		removeBuild:
		{
			command: 'rm -rf build'
		},
		removeValidate:
		{
			command: 'rm -rf validate'
		},
		options:
		{
			stdout: true,
			failOnError: true
		}
	};

	return config;
};
