import Component from "../core/Components.js";
import DomRenderer from "../core/DomRenderer.js";
import { Link } from "./Link.js";

/*let routerBasePath;

export default class BrowserRouter extends Component {
  constructor(routes, rootElement, baseUrl = ""){
    super(props);
    this.state = {
      routes: routes,
      rootElement:rootElement,
      baseUrl:baseUrl,
      routerBasePath : baseUrl,
      pathname : location.pathname.replace(baseUrl,""),
      oldPathname: "",
      currentRoute : null

    }
    this.handlePopState = this.handlePopState.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);

  }

  handlePopState(){
    const { baseUrl } = this.state;
    console.log(baseUrl);
    const pathname = location.pathname.replace(baseUrl, "");
    this.setState({pathname:pathname})
  }

  handleLinkClick(){
    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute("href");

    if (href) {
      const { baseUrl } = this.state;
      history.pushState({}, undefined, baseUrl + href);
      this.setState({ pathname: href });
    }
  }


  const oldPushState = history.pushState;
  history.pushState = function (data, unused, url) {
    oldPushState.call(history, data, unused, url);
    window.dispatchEvent(new Event("popstate"));
  };

  window.addEventListener("popstate", function () {

    rootElement.replaceChild(
      DomRenderer(routes[pathname]()),
      rootElement.childNodes[0]
    );
  });
}

export function BrowserLink(title, link) {
  const realLink = routerBasePath + link;
  return Link(title, realLink, (event) => {
    event.preventDefault();
    history.pushState({}, undefined, realLink);
  });
}
// https://itnext.io/creating-our-own-react-from-scratch-82dd6356676d
// https://github.com/pomber/didact

export default class BrowserRouterComponent extends Component {
  constructor(routes, rootElement, baseUrl = "") {
    super();
    this.routes = routes;
    this.rootElement = rootElement;
    this.baseUrl = baseUrl;
    this.routerBasePath = baseUrl;
    this.pathname = location.pathname.replace(this.routerBasePath, "");
    this.oldPathname = this.pathname;
console.log(routerBasePath)
    // Enregistrement des listeners d'événements
    this.handlePopState = this.handlePopState.bind(this);
    this.handleLinkClick = this.handleLinkClick.bind(this);

    window.addEventListener("popstate", this.handlePopState);

    // Remplacement de history.pushState pour déclencher un événement "popstate"
    const oldPushState = history.pushState;
    history.pushState = function (data, unused, url) {
      oldPushState.call(history, data, unused, url);
      window.dispatchEvent(new Event("popstate"));
    };
  }

  handlePopState() {
    const pathname = location.pathname.replace(this.routerBasePath, "");

    if (this.pathname !== pathname) {
      this.pathname = pathname;
      this.updateComponent();
    }
  }

  handleLinkClick(event) {
    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute("href");

    if (href) {
      history.pushState({}, undefined, this.baseUrl + href);
    }
  }

  render() {
    const currentRoute = this.routes[this.pathname];

    if (currentRoute) {
      return DomRenderer(currentRoute());
    }

    return null;
  }

  componentDidMount() {
    this.rootElement.addEventListener("click", this.handleLinkClick);

    // Premier rendu du composant
    this.updateComponent();
  }

  componentDidUpdate() {
    this.rootElement.removeEventListener("click", this.handleLinkClick);

    // Nouveau rendu du composant
    this.updateComponent();

    // Ré-enregistrement des listeners d'événements
    this.rootElement.addEventListener("click", this.handleLinkClick);
  }

  componentWillUnmount() {
    window.removeEventListener("popstate", this.handlePopState);
  }

  updateComponent() {
    const newElement = this.render();
    this.rootElement.replaceChild(newElement, this.element);
    this.element = newElement;
  }
}

export function BrowserLink(title, link,routerBasePath) {
  const realLink = routerBasePath + link;
  console.log(realLink);
  return Link(title, realLink, (event) => {
    event.preventDefault();
    history.pushState({}, undefined, realLink);
  });
}
*/

let routerBasePath;

// export default function BrowserRouter(routes, rootElement, baseUrl = "") {
//   routerBasePath = baseUrl;
//   const pathname = location.pathname.replace(routerBasePath, "");
//   rootElement.appendChild(DomRenderer(routes[pathname]()));
//   const oldPushState = history.pushState;
//   history.pushState = function (data, unused, url) {
//     oldPushState.call(history, data, unused, url);
//     window.dispatchEvent(new Event("popstate"));
//   };
//
//   window.addEventListener("popstate", function () {
//     const pathname = location.pathname.replace(routerBasePath, "");
//
//     rootElement.replaceChild(
//       DomRenderer(routes[pathname]()),
//       rootElement.childNodes[0]
//     );
//   });
//   return DomRenderer(routes[pathname]())
// }
export default class BrowserRouter extends Component {
  constructor(routes, rootElement, baseUrl = "") {
    super();
    this.routes = routes;
    this.rootElement = rootElement;
    this.baseUrl = baseUrl;
    this.pathname = location.pathname.replace(this.baseUrl, "");
    this.oldPushState = this.handlePushState
    window.addEventListener("popstate", this.handlePopState.bind(this));
    this.render();
  }

  handlePushState(data, unused, url) {
    console.log("ok")
    this.oldPushState.call(history, data, unused, url);
    window.dispatchEvent(new Event("popstate"));
  }

  handlePopState() {

    this.pathname = location.pathname.replace(this.baseUrl, "");
    this.render()

  }

  render = () => {
    const routeComponent = this.routes[this.pathname];
    if (typeof routeComponent === "function") {
      const element = DomRenderer( new routeComponent());
      this.rootElement.innerHTML = "";
      this.rootElement.appendChild(element);
      console.log(element)
      return element
    }
  }
}

