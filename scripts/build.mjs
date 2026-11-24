import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { getPageMetadata, sitePages, siteUrl } from '../src/site.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'dist');
const serverOutput = resolve(root, '.prerender');

// First build browser assets, then compile the same React components for Node.
await build({ root });
await build({
  root,
  publicDir: false,
  ssr: { noExternal: true },
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: serverOutput,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});

const { render } = await import(pathToFileURL(resolve(serverOutput, 'entry-server.mjs')).href);
const template = await readFile(resolve(output, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--page-metadata-start-->')) {
  throw new Error('The HTML template is missing the static rendering placeholders.');
}
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function pageHtml(pathname) {
  const metadata = getPageMetadata(pathname);
  const head = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="robots" content="${escapeHtml(metadata.robots)}" />`,
    metadata.canonical ? `<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />` : '',
  ].filter(Boolean).join('\n    ');
  return template
    .replace(/<!--page-metadata-start-->[\s\S]*?<!--page-metadata-end-->/, head)
    .replace('<div id="root">', '<div id="root" data-prerendered="true">')
    .replace('<!--app-html-->', () => render(pathname));
}

for (const page of sitePages) {
  const filename = resolve(output, `.${page.path}`, 'index.html');
  await mkdir(dirname(filename), { recursive: true });
  await writeFile(filename, pageHtml(page.path));
}

// GitHub Pages serves this file with a genuine 404 status for unknown paths.
await writeFile(resolve(output, '404.html'), pageHtml('/not-found/'));
await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitePages.map(page => `  <url><loc>${escapeHtml(new URL(page.path, siteUrl).href)}</loc></url>`).join('\n')}\n</urlset>\n`);
await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', siteUrl).href}\n`);

console.log(`Generated ${sitePages.length} complete HTML pages, a 404 page, sitemap.xml, and robots.txt.`);
