import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/parquet.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/sols-parquets")({
  head: () => buildSeoHead({
    title: "Pose et rénovation de parquet à Bouloc | Maury Laurent",
    description: "Pose de parquet, rénovation de parquet ancien et revêtements de sols à Bouloc, Fronton et au nord de Toulouse.",
    path: "/sols-parquets",
    ogType: "article",
    breadcrumbLabel: "Sols et parquets",
    schema: serviceSchema("Pose et rénovation de sols et parquets", "Pose de parquet, rénovation de parquet ancien et revêtements de sols à Bouloc, Fronton et au nord de Toulouse.", "/sols-parquets"),
  }),
  component: Page,
});

const prestations = [
  {
    title: "Parquet",
    text: "Pose collée ou flottante, choix des essences, des largeurs et du sens de pose en fonction de la lumière et des volumes.",
  },
  {
    title: "Parquet massif",
    text: "Pose de parquet massif en lames droites, point de Hongrie ou bâtons rompus, avec finition huilée ou vitrifiée.",
  },
  {
    title: "Rénovation de parquet",
    text: "Ponçage, égrenage, reprise des lames abîmées puis finition. Un parquet ancien retrouve sa teinte et sa planéité sans être remplacé.",
  },
  {
    title: "Revêtements de sols",
    text: "Sols souples, ragréage et préparation des supports pour un résultat plan et durable.",
  },
  {
    title: "Finitions et raccords",
    text: "Plinthes, seuils, barres de jonction et reprises de peinture après pose : le sol s'intègre à l'ensemble de la pièce.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Sols & revêtements"
        intro="Le sol structure une pièce autant que ses murs. Nous posons et rénovons parquets et revêtements de sols en soignant la préparation du support, condition d'un résultat durable."
        image={img}
        imageAlt="Parquet en chêne massif rénové posé en point de Hongrie dans une pièce lumineuse"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Ce que nous réalisons</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Bon à savoir</Eyebrow>
            <SectionTitle>Rénover plutôt que remplacer</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Un parquet ancien encore sain peut souvent être poncé et refini : la teinte est
              retrouvée, l'épaisseur préservée et le caractère du bois conservé.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Lors de la visite, nous évaluons l'état des lames, leur épaisseur restante et la
              nature de la finition existante avant de vous conseiller l'une ou l'autre solution.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un sol à poser ou à rénover ?"
        text="Indiquez la surface concernée et l'état actuel du sol : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
