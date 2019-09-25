// Packages
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");

sass.compiler = require("node-sass");

// Paths
const paths = {
	src: "./src/**/*.+(sc|sa|c)ss",
	dest: "./dist/css/"
};

// Task
stylesCompile = () => {
	return gulp
		.src(paths.src)
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
		.pipe(
			autoprefixer({
				overrideBrowserslist: ["last 2 versions"],
				cascade: false
			})
		)
		.pipe(concat("store.css"))
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest(paths.dest));
};

// Export
module.exports = {
	build: stylesCompile
};
