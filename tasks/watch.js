// Packages
const gulp = require("gulp");

// Import tasks
const taskImages = require("./images");
const taskScripts = require("./scripts");
const taskStyles = require("./styles");

// Path
const paths = {
	images: "./src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)",
	scripts: "./src/assets/js/**/*.js",
	scss: "./src/assets/sass/**/*.+(sc|sa|c)ss"
};

// Task
watchFiles = () => {
	gulp.watch([paths.images], gulp.series(taskImages.build));
	gulp.watch([paths.scripts], gulp.series(taskScripts.build));
	gulp.watch([paths.scss], gulp.series(taskStyles.build));
};

// Exposes
module.exports = {
	build: watchFiles
};
