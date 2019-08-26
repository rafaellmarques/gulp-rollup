const gulp = require("gulp");

// Import tasks
const taskScripts = require("./tasks/scripts");

// Define tasks
const buildScripts = gulp.series(taskScripts.build);

// Expose tasks to CLI
exports.scripts = buildScripts;
