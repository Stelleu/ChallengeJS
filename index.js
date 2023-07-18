import BrowserRouter from "./components/BrowserRouter.js";
import { domRender } from "./core/DomRenderer.js";
import routes from "./routes.js";
import Component from "./core/Components.js";

const root = document.getElementById("root");
domRender.render(new BrowserRouter(routes, root), root);
