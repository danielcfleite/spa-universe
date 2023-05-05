const routes = {
  "/": "./index.html",
  "/about": "/pages/about.html",
  "/contact": "/pages/contact.html",
  404: "/pages/404.html",
};

export class Router {
  routes = {};
  add(routeName, pages) {
    this.routes[routeName] = pages;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    this.handle();
  }

  handle() {
    const pathname = window.location.pathname;
    const route = routes[pathname] || routes[404];
    console.log("antes do fetch");
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
