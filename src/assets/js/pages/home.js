import { main } from "../modules/main";

const home = {
	init() {
		main.pageLoader(5);
		main.minifiedHeader();
		main.getFileName();
		main.getParent();
		main.orderList(".list", "desc");
		console.log("Página: Home");
	}
};

export { home };
