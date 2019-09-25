// Packages
const sync = require("browser-sync").create();

// Task
browserSync = () => {
	sync.init({
		server: {
			baseDir: "./dist"
		}
	});
};

// Export
module.exports = {
	build: browserSync
};
