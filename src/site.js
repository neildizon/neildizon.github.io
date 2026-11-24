import { profile } from './data/profile.js';

export const siteUrl = 'https://neildizon.github.io/';

export const sitePages = [
  { label: 'Home', path: '/', title: `${profile.name} | Applied Mathematics`, description: `${profile.name} — Postdoctoral Fellow in Applied Mathematics at UNSW Sydney. Research in optimisation, inverse problems, and wavelets.` },
  { label: 'Research', path: '/research/', title: `${profile.name} | Research`, description: 'Publications, preprints, theses, and research awards of Neil D. Dizon in optimisation, inverse problems, wavelets, and imaging.' },
  { label: 'Teaching', path: '/teaching/', title: `${profile.name} | Teaching`, description: 'Mathematics teaching experience, teaching awards, student feedback, and course histories of Neil D. Dizon.' },
  { label: 'Conferences', path: '/conferences/', title: `${profile.name} | Conferences`, description: 'Conference talks, poster presentations, and mathematical meetings attended by Neil D. Dizon.' },
  { label: 'Service', path: '/leadership/', title: `${profile.name} | Service`, description: 'Academic service, conference and workshop organising, committee roles, and community engagement of Neil D. Dizon.' },
];

export function normalizePath(pathname) {
  return pathname.replace(/\/+$/, '') || '/';
}

export function getPageMetadata(pathname) {
  const page = sitePages.find(item => normalizePath(item.path) === normalizePath(pathname));
  if (!page) return {
    title: `${profile.name} | Page not found`,
    description: 'This page does not exist. Return to Neil D. Dizon’s academic website.',
    robots: 'noindex, follow',
    canonical: null,
  };
  return { ...page, robots: 'index, follow', canonical: new URL(page.path, siteUrl).href };
}

export function updatePageMetadata(pathname) {
  const metadata = getPageMetadata(pathname);
  document.title = metadata.title;
  for (const [name, content] of [['description', metadata.description], ['robots', metadata.robots]]) {
    let element = document.head.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.name = name;
      document.head.appendChild(element);
    }
    element.content = content;
  }
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (metadata.canonical) {
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonical;
  } else {
    canonical?.remove();
  }
}
