import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/entretien-bati.json";
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/entretien-bati")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/entretien-bati",
    ogType: "article",
    breadcrumbLabel: "Entretien et bâti",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Entretien extérieur de maison",
      name: "Entretien & bâti",
      description:
        "Nettoyage, réparation et pose de clôtures, entretien des boiseries et menuiseries extérieures, traitement anti-mousse des surfaces extérieures et des toitures.",
      provider: { "@id": BUSINESS_ID },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
