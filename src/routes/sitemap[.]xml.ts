import { createFileRoute } from "@tanstack/react-router";
import { nav } from "@/data/site";
import { realisations } from "@/data/realisations";

const paths = [
  "/",
  ...nav.map((n) => n.to),
  "/contact",
  ...realisations.map((r) => `/realisations/${r.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
  .join("\n")}
</urlset>
`;
        return new Response(body, {
          headers: {
            "content-type": "application/xml; charset=utf-8",
            "cache-control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
