import { LAST_UPDATED_ISO, SITEMAP_ROUTES, SITE_URL } from "./content";

function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function formatPriority(priority: number): string {
  return priority.toFixed(1);
}

export function buildSitemapXml(): string {
  const urls = SITEMAP_ROUTES.map((route) =>
    [
      "  <url>",
      `    <loc>${absoluteUrl(route.path)}</loc>`,
      `    <lastmod>${LAST_UPDATED_ISO}</lastmod>`,
      `    <changefreq>${route.changeFrequency}</changefreq>`,
      `    <priority>${formatPriority(route.priority)}</priority>`,
      "  </url>",
    ].join("\n"),
  ).join("\n");

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");
}
