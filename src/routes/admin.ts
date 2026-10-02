import { createFileRoute } from "@tanstack/react-router";

/** Accès au back-office (Pages CMS) : <domaine du site>/admin */
const CMS_URL = "https://app.pagescms.org/karlotato/laurent-maury/main";

export const Route = createFileRoute("/admin")({
  server: {
    handlers: {
      GET: () =>
        new Response(null, {
          status: 302,
          headers: {
            location: CMS_URL,
            "x-robots-tag": "noindex",
            "cache-control": "no-store",
          },
        }),
    },
  },
});
