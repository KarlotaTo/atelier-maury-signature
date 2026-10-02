import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/facades-exterieur.json";
import { buildSeoHead } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/facades-exterieur")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/facades-exterieur",
    ogType: "article",
    breadcrumbLabel: "Façades et extérieur",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Ravalement et rénovation de façade",
      name: "Façades & extérieur",
      description:
        "Ravalement de façade, préparation des supports, réparation des fissures, peinture de façade épaisse sans crépi, rénovation des murs extérieurs et mise en peinture des menuiseries extérieures.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
