import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/parquet.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/sols-revetements")({
  head: () => ({
    meta: [
      { title: "Parquet, sols et revêtements à Bouloc — Maury Laurent" },
      {
        name: "description",
        content:
          "Pose de parquet massif, rénovation et ponçage de parquets anciens, revêtements de sols souples et carrelage autour de Bouloc et Fronton.",
      },
      { property: "og:title", content: "Sols & revêtements — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Parquet massif, rénovation de parquet, revêtements de sols et carrelage par une entreprise familiale d'artisans.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/sols-revetements" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sols-revetements" }],
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
    title: "Carrelage",
    text: "Pose de carrelage au sol, calepinage étudié, joints réguliers et raccords soignés avec les autres revêtements.",
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
        intro="Le sol structure une pièce autant que ses murs. Nous posons et rénovons parquets, carrelages et revêtements en soignant la préparation du support, condition d'un résultat durable."
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
