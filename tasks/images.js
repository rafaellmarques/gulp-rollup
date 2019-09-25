// Packages
const gulp = require("gulp");
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");

// Paths
const paths = {
	src: "./src/**/*.{png,jpg,jpeg,gif,svg}",
	dest: "./dist/img/"
};

// Task
imagesMinify = () => {
	return gulp
		.src(paths.src)
		.pipe(cache(imagemin()))
		.pipe(gulp.dest([paths.dest]));
};

// Export
module.exports = {
	build: imagesMinify
};
