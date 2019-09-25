import { main } from "./modules/main";
import { home } from "./pages/home";

const init = () => {
	if (main.pageName("home")) {
		home.init();
	}
};

window.onload = init;
