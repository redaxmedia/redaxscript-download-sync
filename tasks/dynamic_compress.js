module.exports = function (grunt, pathArray)
{
	var cwd = 'vendor/redaxmedia/redaxscript/',
		directoryArray,
		infoArray;

	pathArray.forEach(function (pathValue)
	{
		directoryArray = grunt.file.expand(cwd + pathValue);
		directoryArray.forEach(function (directoryValue)
		{
			infoArray = directoryValue.replace(cwd, '').split('.');
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
		});
	});
};