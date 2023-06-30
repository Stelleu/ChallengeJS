import BrowserRouter from "./components/BrowserRouter.js";
import { domRender } from "./core/DomRenderer.js";
import { PageBuilderComponent } from "./components/PageBuilder.js";
import routes from "./routes.js";
import Component from "./core/Components.js";

const root = document.getElementById("root");
console.log(root);
// const BrowserRouterComponent = new BrowserRouter(routes, root, root.dataset.baseurl);
console.log("root"+root.dataset.baseUrl);
domRender.render(BrowserRouter(routes, root, root.dataset.baseurl),root);

// BrowserRouter(routes, root, root.dataset.baseurl)