const gulp = require("gulp");

// Import tasks
const taskConnect = require("./tasks/server");
const taskImages = require("./tasks/images");
const taskScripts = require("./tasks/scripts");
const taskStyles = require("./tasks/styles");
const taskWatch = require("./tasks/watch");

// Define tasks
const build = gulp.series(gulp.parallel(taskImages.build, taskScripts.build, taskStyles.build), gulp.parallel(taskWatch.build, taskConnect.build));
const buildImages = gulp.series(taskImages.build);
const buildStyles = gulp.series(taskStyles.build);
const buildScripts = gulp.series(taskScripts.build);
const buildServer = gulp.series(taskConnect.build);
const buildWatch = gulp.series(taskWatch.build);

// Expose tasks to CLI
exports.build = build;
exports.images = buildImages;
exports.scripts = buildScripts;
exports.server = buildServer;
exports.styles = buildStyles;
exports.watch = buildWatch;
