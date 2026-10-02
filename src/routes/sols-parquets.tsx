import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, type ServiceContent } from "@/components/site/ServicePage";
import data from "@/content/pages/sols-parquets.json";
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";

const content = data as ServiceContent;

export const Route = createFileRoute("/sols-parquets")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/sols-parquets",
    ogType: "article",
    breadcrumbLabel: "Sols et parquets",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Pose et rénovation de parquet et revêtements de sols",
      name: "Sols & parquets",
      description:
        "Remplacement d'anciens sols par un parquet massif cloué, pose de parquet massif en lames droites, point de Hongrie ou bâtons rompus, remplacement et rénovation de parquet ancien, revêtements de sols.",
      provider: { "@id": BUSINESS_ID },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

function Page() {
  return <ServicePage content={content} />;
}
