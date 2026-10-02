import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/peinture-decoration.json";
import { buildSeoHead } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/peinture-decoration")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/peinture-decoration",
    ogType: "article",
    breadcrumbLabel: "Peinture intérieure et décoration",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Peinture intérieure et décoration",
      name: "Peinture & décoration",
      description:
        "Peinture intérieure, peintures à effet, textures et mouvement, enduits à la chaux, conseil couleurs et home staging, en rénovation comme dans le neuf.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
