import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/renovation-interieure.json";
import { buildSeoHead } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/renovation-interieure")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/renovation-interieure",
    ogType: "article",
    breadcrumbLabel: "Rénovation intérieure",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Rénovation intérieure clé en main",
      name: "Rénovation intérieure",
      description:
        "Rénovation de maison ou d'appartement de A à Z, clé en main ou par travaux ciblés : dépose, préparation des supports, placo, isolation, sols, faïence, peinture et finitions, sans sous-traitance.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
