// Packages
const gulp = require("gulp");
const connect = require("gulp-connect");
const sync = require("browser-sync").create();

// Task
browserSync = () => {
	sync.init({
		server: {
			baseDir: "./dist"
		}
	});
};

serverConnect = () => {
	return connect.server({
		base: "http://localhost",
		port: 8541,
		root: "./dist",
		livereload: true
	});
};

// Export
module.exports = {
	build: serverConnect
};
