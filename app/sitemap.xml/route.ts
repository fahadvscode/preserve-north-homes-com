import { LAST_UPDATED_ISO, SITEMAP_ROUTES, SITE_URL } from "@/lib/content";

export const dynamic = "force-static";

function absoluteUrl(path: string): string {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function GET() {
  const urls = SITEMAP_ROUTES.map((route) => {
    return [
      "<url>",
      `<loc>${absoluteUrl(route.path)}</loc>`,
      `<lastmod>${LAST_UPDATED_ISO}</lastmod>`,
      `<changefreq>${route.changeFrequency}</changefreq>`,
      `<priority>${route.priority}</priority>`,
      "</url>",
    ].join("\n");
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
