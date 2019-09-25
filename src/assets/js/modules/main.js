import { defaultCoreCipherList } from "constants";

const main = {
	// Função olá;
	hello() {
		alert("Hello");
	},

	// Função para validar a classe da tag body de cada página ativa;
	pageName(className) {
		const body = document.querySelectorAll("body")[0];
		return body.classList.contains(className);
	},

	pageLoader(time = 0) {
		const loader = document.querySelector(".loader");
		if (!!loader) {
			if (time == 0) {
				main.remove(loader);
			} else {
				let seconds = time * 1000;
				setTimeout(() => main.remove(loader), seconds);
			}
		}
	},

	// Remove o elemento
	remove(element) {
		element.parentNode.removeChild(element);
	},

	// Inserir o elemento What antes de um elemento Where
	outBefore(what, where) {
		where.parentNode.insertBefore(what, where);
	},

	// Inserir o elemento What depois de um elemento Where
	outAfter(what, where) {
		where.parentNode.insertBefore(what, where.nextSibling);
	},

	// Inserir o elemento What como primeiro filho do elemento Where
	inBefore(what, where) {
		where.insertBefore(what, where.firstChild);
	},

	// Inserir elemento What como ultimo filho do elemento Where
	inAfter(what, where) {
		where.insertBefore(what, where.lastChild);
	},

	orderAscending(element) {
		element.sort((a, b) => {
			if (a.textContent < b.textContent) {
				return -1;
			} else if (a.textContent > b.textContent) {
				return 1;
			} else {
				return 0;
			}
		});
	},

	orderDescending(element) {
		element.sort((a, b) => {
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
	orderList(element, type) {
		const list = document.querySelectorAll(element);
		if (!!list) {
			list.forEach(elementList => {
				const listItem = elementList.children;
				if (!!listItem) {
					const newList = [];
					for (let i = 0; i < listItem.length; i++) {
						newList.push(listItem[i]);
					}
					type == "desc" ? main.orderDescending(newList) : main.orderAscending(newList);
					for (let i = 0; i < newList.length; i++) {
						main.inAfter(newList[i], elementList);
					}
				}
			});
		}
	},

	minifiedHeader() {
		window.addEventListener("scroll", function() {
			const header = document.querySelector(".header");
			const showScroll = document.querySelector(".showScroll");

			showScroll ? (showScroll.innerHTML = pageYOffset + "px") : "0";
			pageYOffset >= header.clientHeight / 2 ? header.classList.add("minified") : header.classList.remove("minified");
		});
	},

	getFileName() {
		const fileField = document.querySelector(".product-file-upload-field");
		var fileLabel = document.querySelector(".product-file-upload-value");
		var fileName = "";

		fileField.addEventListener("change", function(e) {
			fileName = e.target.value.split("\\").pop();

			if (fileName) {
				fileLabel.innerHTML = fileName;
			}
		});

		fileField.addEventListener("focus", function() {
			fileField.classList.add("has-focus");
		});

		fileField.addEventListener("blur", function() {
			fileField.classList.remove("has-focus");
		});
	},

	getParent() {
		var item = document.querySelectorAll(".filters .item");
		if (!!item) {
			item.trim;
			item.forEach(element => {
				var itemChild = element.firstElementChild;
				if (!!itemChild && itemChild.classList.contains("item")) {
					element.removeChild(element.firstChild);
				}
			});
		}
	}
};

export { main };
