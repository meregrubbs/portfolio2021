// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-portfolio-alice-js": () => import("./../../../src/pages/portfolio-alice.js" /* webpackChunkName: "component---src-pages-portfolio-alice-js" */),
  "component---src-pages-portfolio-maressa-js": () => import("./../../../src/pages/portfolio-maressa.js" /* webpackChunkName: "component---src-pages-portfolio-maressa-js" */)
}

