const main = {
	// Função olá;
	hello() {
		const body = document.querySelector("body");
		if (!!body) {
			body.classList.add("home");
			body.innerHTML = "Hello, this project was build with Gulp, Babel and Rollup";
			alert("Hello, this project was build with Gulp, Babel and Rollup");
			console.log("Hello, this project was build with Gulp, Babel and Rollup");
		}
	}
};

export { main };
