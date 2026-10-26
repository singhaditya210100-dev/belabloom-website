// Regenerates SEO tags for the static site in docs/ (served by GitHub Pages):
//   - favicon links, Open Graph / Twitter tags and JSON-LD in each page's <head>
//   - docs/sitemap.xml
// Titles, meta descriptions, canonical URLs, H1s and breadcrumbs are read from each page,
// so edit those in the HTML, then run:  node tools/seo.mjs
// Redirect stubs (pages with <meta http-equiv="refresh">) are left alone and kept out of the sitemap.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = join(ROOT, 'docs');
const SITE = 'https://www.belabloom.com';
const PHONE = '+91-99303-62961';
const EMAIL = 'ashoksingh@belabloom.com';
const SKIP = new Set(['404.html']);

const ORG_ID = `${SITE}/#organization`;
const ORGANIZATION = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Belabloom',
  legalName: 'Belabloom Projects & Facility Management Pvt. Ltd.',
  url: `${SITE}/`,
  logo: `${SITE}/icon-512.png`,
  image: `${SITE}/og-image.jpg`,
  telephone: PHONE,
  email: EMAIL,
  foundingDate: '2021-04-27',
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: { '@type': 'ContactPoint', telephone: PHONE, email: EMAIL, contactType: 'sales', areaServed: 'IN' },
  sameAs: ['https://www.indiamart.com/belabloomprojectsfacilitymanagement/'],
};
const PROVIDER = { '@type': 'Organization', '@id': ORG_ID, name: 'Belabloom', url: `${SITE}/` };
const place = (name) => ({ '@type': 'Place', name });

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsaquo: '›', mdash: '—', ndash: '–', rsquo: '’' };
const decode = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&(\w+);/g, (m, n) => ENTITIES[n] ?? m);
const text = (s) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const pageUrl = (u) => u.replace(/\/index\.html$/, '/');

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : e.name.endsWith('.html') ? [join(dir, e.name)] : []);
}

function read(file) {
  const html = readFileSync(file, 'utf8');
  const get = (re) => (html.match(re) || [])[1];
  const page = {
    path: relative(DOCS, file).split('\\').join('/'),
    html,
    title: text(get(/<title>([\s\S]*?)<\/title>/) ?? ''),
    description: decode(get(/<meta name="description" content="([^"]*)"/) ?? ''),
    canonical: get(/<link rel="canonical" href="([^"]+)"/),
    h1: text(get(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? ''),
    breadcrumb: get(/<div class="page-breadcrumb">([\s\S]*?)<\/div>/),
    localities: [...html.matchAll(/<article class="locality" id="[^"]+"><h3>([\s\S]*?)<\/h3>/g)].map((m) => text(m[1])),
    published: get(/<time class="published" datetime="([^"]+)"/),
  };
  for (const key of ['title', 'description', 'canonical']) {
    if (!page[key]) throw new Error(`${page.path}: missing ${key}`);
  }
  return page;
}

function breadcrumbList(page) {
  const items = page.breadcrumb.split(/&rsaquo;|›/).map((part, i) => {
    const link = part.match(/<a href="([^"]+)">([\s\S]*?)<\/a>/);
    return {
      '@type': 'ListItem',
      position: i + 1,
      name: text(link ? link[2] : part),
      item: link ? pageUrl(new URL(link[1], page.canonical).href) : page.canonical,
    };
  });
  return { '@type': 'BreadcrumbList', itemListElement: items };
}

function service(page) {
  const base = { '@type': 'Service', url: page.canonical, description: page.description, provider: PROVIDER };
  if (page.path.startsWith('services/')) {
    return { ...base, name: page.h1, serviceType: page.h1, areaServed: ORGANIZATION.areaServed };
  }
  if (page.path.startsWith('pest-control/')) {
    const area = page.h1.match(/^Pest Control in (.+)$/);
    if (area) {
      const areaServed = page.localities.length ? page.localities.map(place) : place(area[1]);
      return { ...base, name: page.h1, serviceType: 'Pest control', areaServed };
    }
    if (page.path === 'pest-control/index.html') {
      return { ...base, name: page.h1, serviceType: 'Pest control', areaServed: ['Mumbai', 'Navi Mumbai', 'Thane'].map(place) };
    }
    return { ...base, name: page.h1, serviceType: page.h1, areaServed: ['Mumbai', 'Navi Mumbai'].map(place) };
  }
  return null;
}

function structuredData(page) {
  const graph = [];
  if (page.path === 'index.html') {
    graph.push(ORGANIZATION, { '@type': 'WebSite', '@id': `${SITE}/#website`, url: `${SITE}/`, name: 'Belabloom', publisher: { '@id': ORG_ID } });
  }
  const svc = service(page);
  if (svc) graph.push(svc);
  if (page.path.startsWith('insights/') && page.published) {
    graph.push({
      '@type': 'Article', headline: page.h1, description: page.description, url: page.canonical,
      datePublished: page.published, image: `${SITE}/og-image.jpg`,
      author: { '@id': ORG_ID }, publisher: { '@id': ORG_ID }, mainEntityOfPage: page.canonical,
    });
  }
  if (page.breadcrumb) graph.push(breadcrumbList(page));
  return graph.length ? { '@context': 'https://schema.org', '@graph': graph } : null;
}

function headBlock(page) {
  const meta = (prop, content) => `  <meta ${prop.startsWith('og:') ? 'property' : 'name'}="${prop}" content="${attr(content)}"/>`;
  const json = structuredData(page);
  return [
    '  <!-- seo:start (generated by tools/seo.mjs, do not edit by hand) -->',
    '  <link rel="icon" href="/favicon.ico" sizes="any"/>',
    '  <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png"/>',
    '  <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>',
    meta('og:type', 'website'),
    meta('og:site_name', 'Belabloom'),
    meta('og:locale', 'en_IN'),
    meta('og:title', page.title),
    meta('og:description', page.description),
    meta('og:url', page.canonical),
    meta('og:image', `${SITE}/og-image.jpg`),
    meta('og:image:width', '1200'),
    meta('og:image:height', '630'),
    meta('twitter:card', 'summary_large_image'),
    ...(json ? [`  <script type="application/ld+json">${JSON.stringify(json).replace(/<\//g, '<\\/')}</script>`] : []),
    '  <!-- seo:end -->',
  ].join('\n');
}

function lastmod(file) {
  const git = (...args) => execFileSync('git', args, { cwd: ROOT }).toString().trim();
  const today = new Date().toISOString().slice(0, 10);
  if (git('status', '--porcelain', '--', file)) return today;
  return git('log', '-1', '--format=%cs', '--', file) || today;
}

const isRedirect = (f) => /<meta http-equiv="refresh"/i.test(readFileSync(f, 'utf8'));
const pages = walk(DOCS)
  .filter((f) => !SKIP.has(relative(DOCS, f).split('\\').join('/')) && !isRedirect(f))
  .map(read);
for (const page of pages) {
  const eol = page.html.includes('\r\n') ? '\r\n' : '\n'; // Windows checkouts (core.autocrlf) use CRLF
  const stripped = page.html.replace(/\r?\n[ \t]*<!-- seo:start[\s\S]*?<!-- seo:end -->/, '');
  if (!stripped.includes('</head>')) throw new Error(`${page.path}: no </head>`);
  const html = stripped.replace('</head>', `${headBlock(page).replace(/\n/g, eol)}${eol}</head>`);
  if (html !== page.html) writeFileSync(join(DOCS, page.path), html);
}

const urls = pages
  .map((p) => ({ loc: pageUrl(p.canonical), lastmod: lastmod(join(DOCS, p.path)) }))
  .sort((a, b) => (a.loc === `${SITE}/` ? -1 : b.loc === `${SITE}/` ? 1 : a.loc.localeCompare(b.loc)));
writeFileSync(join(DOCS, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`),
  '</urlset>',
  '',
].join('\n'));
console.log(`Updated ${pages.length} pages and docs/sitemap.xml (${urls.length} URLs).`);
