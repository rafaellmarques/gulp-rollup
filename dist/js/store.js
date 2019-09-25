'use strict';

require('constants');

var main = {
  // Função olá;
  hello: function hello() {
    alert("Hello");
  },
  // Função para validar a classe da tag body de cada página ativa;
  pageName: function pageName(className) {
    var body = document.querySelectorAll("body")[0];
    return body.classList.contains(className);
  },
  pageLoader: function pageLoader() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var loader = document.querySelector(".loader");

    if (!!loader) {
      if (time == 0) {
        main.remove(loader);
      } else {
        var seconds = time * 1000;
        setTimeout(function () {
          return main.remove(loader);
        }, seconds);
      }
    }
  },
  // Remove o elemento
  remove: function remove(element) {
    element.parentNode.removeChild(element);
  },
  // Inserir o elemento What antes de um elemento Where
  outBefore: function outBefore(what, where) {
    where.parentNode.insertBefore(what, where);
  },
  // Inserir o elemento What depois de um elemento Where
  outAfter: function outAfter(what, where) {
    where.parentNode.insertBefore(what, where.nextSibling);
  },
  // Inserir o elemento What como primeiro filho do elemento Where
  inBefore: function inBefore(what, where) {
    where.insertBefore(what, where.firstChild);
  },
  // Inserir elemento What como ultimo filho do elemento Where
  inAfter: function inAfter(what, where) {
    where.insertBefore(what, where.lastChild);
  },
  orderAscending: function orderAscending(element) {
    element.sort(function (a, b) {
      if (a.textContent < b.textContent) {
        return -1;
      } else if (a.textContent > b.textContent) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  orderDescending: function orderDescending(element) {
    element.sort(function (a, b) {
      if (a.textContent > b.textContent) {
        return -1;
      } else if (a.textContent < b.textContent) {
        return 1;
      } else {
        return 0;
      }
    });
  },
  // Ordena uma lista
  orderList: function orderList(element, type) {
    var list = document.querySelectorAll(element);

    if (!!list) {
      list.forEach(function (elementList) {
        var listItem = elementList.children;

        if (!!listItem) {
          var newList = [];

          for (var i = 0; i < listItem.length; i++) {
            newList.push(listItem[i]);
          }

          type == "desc" ? main.orderDescending(newList) : main.orderAscending(newList);

          for (var _i = 0; _i < newList.length; _i++) {
            main.inAfter(newList[_i], elementList);
          }
        }
      });
    }
  },
  minifiedHeader: function minifiedHeader() {
    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      var showScroll = document.querySelector(".showScroll");
      showScroll ? showScroll.innerHTML = pageYOffset + "px" : "0";
      pageYOffset >= header.clientHeight / 2 ? header.classList.add("minified") : header.classList.remove("minified");
    });
  },
  getFileName: function getFileName() {
    var fileField = document.querySelector(".product-file-upload-field");
    var fileLabel = document.querySelector(".product-file-upload-value");
    var fileName = "";
    fileField.addEventListener("change", function (e) {
      fileName = e.target.value.split("\\").pop();

      if (fileName) {
        fileLabel.innerHTML = fileName;
      }
    });
    fileField.addEventListener("focus", function () {
      fileField.classList.add("has-focus");
    });
    fileField.addEventListener("blur", function () {
      fileField.classList.remove("has-focus");
    });
  },
  getParent: function getParent() {
    var item = document.querySelectorAll(".filters .item");

    if (!!item) {
      item.trim;
      item.forEach(function (element) {
        var itemChild = element.firstElementChild;

        if (!!itemChild && itemChild.classList.contains("item")) {
          element.removeChild(element.firstChild);
        }
      });
    }
  }
};

var home = {
  init: function init() {
    main.pageLoader(5);
    main.minifiedHeader();
    main.getFileName();
    main.getParent();
    main.orderList(".list", "desc");
    console.log("Página: Home");
  }
};

var init = function init() {
  if (main.pageName("home")) {
    home.init();
  }
};

window.onload = init;
//# sourceMappingURL=store.js.map
