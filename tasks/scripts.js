// Packages
const gulp = require("gulp");
const rollup = require("rollup");
const babel = require("rollup-plugin-babel");

// Paths
const paths = {
	input: "./src/assets/js/bundle.js",
	output: "./dist/js/store.js"
};

// Task
scriptTranspilation = () => {
	return rollup
		.rollup({
			input: paths.input,
			plugins: [babel()]
		})
		.then(bundle => {
			return bundle.write({
				file: paths.output,
				format: "cjs",
				name: "library",
				sourcemap: true
			});
		});
};

// Export
module.exports = {
	build: scriptTranspilation
};
