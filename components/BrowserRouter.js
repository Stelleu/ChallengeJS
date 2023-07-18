import Component from "../core/Components.js";
import DomRenderer from "../core/DomRenderer.js";
import { Link } from "./Link.js";

export default class BrowserRouter extends Component {
  constructor(routes, rootElement, baseUrl = "") {
    super();
    this.routes = routes;
    this.rootElement = rootElement;
    this.baseUrl = baseUrl;
    this.pathname = location.pathname.replace(this.baseUrl, "");
    this.oldPushState = this.handlePushState.bind(this);
    window.addEventListener("popstate", this.handlePopState);
    this.render();
  }

  handlePushState(data, unused, url) {
    this.oldPushState.call(history, data, unused, url);
    window.dispatchEvent(new Event("popstate"));
  }

  handlePopState() {
    this.pathname = location.pathname.replace(this.baseUrl, "");
    this.render();
  }

  render() {
    const routeComponent = this.routes[this.pathname];
    if (typeof routeComponent === "function") {
      const element = DomRenderer(new routeComponent());
      this.rootElement.innerHTML = "";
      this.rootElement.appendChild(element);
      return element;
    }
  }
}

export function BrowserLink(title, link, routerBasePath) {
  const realLink = routerBasePath + link;
  return Link(title, realLink, (event) => {
    event.preventDefault();
    history.pushState({}, undefined, realLink);
  });
}
