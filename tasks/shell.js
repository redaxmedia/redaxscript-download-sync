module.exports = function ()
{
	'use strict';

	var config =
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
	};

	return config;
};