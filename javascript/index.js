import { Router } from "./router.js";

const router = new Router();
router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();
