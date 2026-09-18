import { createFileRoute } from "@tanstack/react-router";
import { nav } from "@/data/site";
import { realisations } from "@/data/realisations";
import { SITE_URL } from "@/lib/seo";

const paths = [
  "/",
  "/peinture-decoration",
  "/sols-parquets",
  "/murs-revetements",
  "/renovation-interieure",
  "/facades-exterieur",
  "/entretien-bati",
  ...nav.map((n) => n.to),
  "/contact",
  ...realisations.map((r) => `/realisations/${r.slug}`),
].filter((path, index, all) => all.indexOf(path) === index);

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url><loc>${new URL(p, SITE_URL).toString()}</loc></url>`)
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
