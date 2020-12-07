module.exports = (grunt, pathArray) =>
{
	const cwd = 'vendor/redaxscript/redaxscript/';

	pathArray.forEach(pathValue =>
	{
		const directoryArray = grunt.file.expand(cwd + pathValue);

		directoryArray.forEach(directoryValue =>
		{
			const infoArray = directoryValue.replace(cwd, '').split('.');

			grunt.config.set('compress.' + infoArray[0],
			{
				src:
				[
					infoArray[1] ? infoArray[0] + '.' + infoArray[1] : infoArray[0] + '/**'
				],
				cwd,
				expand: true,
				dot: true,
				options:
				{
					archive: 'build/' + infoArray[0] + '.zip'
				}
			});
		});
	});
};
