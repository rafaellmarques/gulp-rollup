'use strict';

var main = {
  // Função olá;
  hello: function hello() {
    var body = document.querySelector("body");

    if (!!body) {
      body.classList.add("home");
      body.innerHTML = "Hello, this project was build with Gulp, Babel and Rollup";
      alert("Hello, this project was build with Gulp, Babel and Rollup");
      console.log("Hello, this project was build with Gulp, Babel and Rollup");
    }
  }
};

var app = {
  init: function init() {
    main.hello("Rafael");
  }
};

var init = function init() {
  app.init();
};

window.onload = init;
//# sourceMappingURL=bundle.js.map
