import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SiteApp from './SiteApp';
import { normalizePath, sitePages } from './site';

// Keep previously shared /#/research links working. Load the matching static
// document before hydration so its HTML always matches the selected page.
const legacyUrl = window.location.hash.startsWith('#/')
  ? new URL(window.location.hash.slice(1), window.location.origin)
  : null;
const legacyPage = legacyUrl?.origin === window.location.origin
  ? sitePages.find(page => normalizePath(page.path) === normalizePath(legacyUrl.pathname))
  : null;
const indexAlias = window.location.pathname.endsWith('/index.html')
  ? sitePages.find(page => page.path === window.location.pathname.slice(0, -'index.html'.length))
  : null;

if (legacyPage) {
  window.location.replace(`${import.meta.env.BASE_URL}${legacyPage.path.slice(1)}${legacyUrl.search || window.location.search}${legacyUrl.hash}`);
} else if (indexAlias) {
  window.location.replace(`${indexAlias.path}${window.location.search}${window.location.hash}`);
} else {
  const root = document.getElementById('root');
  const app = <React.StrictMode><BrowserRouter basename={import.meta.env.BASE_URL}><SiteApp /></BrowserRouter></React.StrictMode>;
  if (root.dataset.prerendered === 'true') ReactDOM.hydrateRoot(root, app);
  else ReactDOM.createRoot(root).render(app);
}
