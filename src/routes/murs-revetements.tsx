import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/murs-enduits.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/murs-revetements")({
  head: () => ({
    meta: [
      { title: "Murs & revêtements : enduits, placo, isolation à Bouloc — Maury Laurent" },
      {
        name: "description",
        content:
          "Enduits, réparation et création de murs, placo et isolation autour de Bouloc, Fronton et L'Union. Supports sains avant toute finition.",
      },
      { property: "og:title", content: "Murs & revêtements — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Enduits, placo et isolation : la base invisible d'une finition durable, par une entreprise familiale depuis 1994.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/murs-revetements" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/murs-revetements" }],
  }),
  component: Page,
});

const prestations = [
  {
    title: "Enduits",
    text: "Enduits de réparation, de lissage et de finition, traditionnels ou à la chaux. Le support est traité avant d'être habillé : fissures, humidité, arrachés.",
  },
  {
    title: "Murs",
    text: "Reprise de murs abîmés, réfection de surfaces, traitement des dégâts des eaux et préparation complète avant peinture ou revêtement.",
  },
  {
    title: "Placo",
    text: "Cloisons, contre-cloisons, doublages et plafonds. Pose soignée, joints propres, prêts à peindre.",
  },
  {
    title: "Isolation",
    text: "Isolation intérieure des murs et plafonds, en lien avec les revêtements de finition, pour améliorer le confort thermique et acoustique des pièces.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Murs & revêtements"
        intro="La base de tout travail de finition. Un mur sain, droit et bien préparé est ce qui permet à une peinture ou un revêtement de durer. Nous traitons le support avant de penser à la couleur."
        image={img}
        imageAlt="Murs fraîchement enduits et lissés dans une pièce lumineuse en cours de rénovation"
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
            <Eyebrow>Méthode</Eyebrow>
            <SectionTitle>D'abord le support, ensuite la finition</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Beaucoup de défauts de peinture viennent d'un support négligé. Chaque chantier
              commence par un diagnostic des murs : nature du fond, humidité, fissures,
              compatibilité des enduits existants.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Sur les bâtis anciens, nous privilégions des matériaux compatibles avec le mur
              d'origine, notamment les enduits à la chaux, qui laissent le support respirer.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Des murs à reprendre ou à créer ?"
        text="Décrivez l'état actuel des supports et le rendu souhaité : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
