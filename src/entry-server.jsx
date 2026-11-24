import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import SiteApp from './SiteApp';

export function render(pathname) {
  return renderToString(<StrictMode><StaticRouter location={pathname}><SiteApp /></StaticRouter></StrictMode>);
}
