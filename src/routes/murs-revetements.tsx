import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/murs-revetements.json";
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/murs-revetements")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/murs-revetements",
    ogType: "article",
    breadcrumbLabel: "Murs et revêtements",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Enduits, placo et isolation intérieure",
      name: "Murs & revêtements",
      description:
        "Enduits de rebouchage, de lissage et à la chaux, reprise de murs abîmés et après dégât des eaux, cloisons, doublages et plafonds en placo, isolation thermique et acoustique par l'intérieur.",
      provider: { "@id": BUSINESS_ID },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
