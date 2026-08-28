import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/facade.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/facades-exterieur")({
  head: () => ({
    meta: [
      { title: "Ravalement de façade et peinture extérieure — Maury Laurent, Bouloc" },
      {
        name: "description",
        content:
          "Ravalement, rénovation des murs extérieurs, traitement des fissures et peinture extérieure autour de Bouloc, Fronton et Grenade.",
      },
      { property: "og:title", content: "Façades & extérieur — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Ravalement de façade, réparation des fissures et peinture extérieure par une entreprise familiale d'artisans depuis 1994.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/facades-exterieur" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/facades-exterieur" }],
  }),
  component: Page,
});

const prestations = [
  {
    title: "Ravalement",
    text: "Nettoyage, reprise des enduits, application d'un système de finition adapté au support et à l'exposition de la façade.",
  },
  {
    title: "Rénovation des murs extérieurs",
    text: "Reprise des enduits dégradés, des soubassements et des points sensibles aux remontées d'humidité.",
  },
  {
    title: "Préparation des supports",
    text: "Diagnostic, décapage, brossage et traitement des mousses avant toute application. Un support mal préparé fait vieillir la finition prématurément.",
  },
  {
    title: "Réparation des fissures",
    text: "Ouverture, traitement et pontage des fissures selon leur nature, avant reprise de l'enduit et de la finition.",
  },
  {
    title: "Peinture extérieure",
    text: "Peintures et revêtements de façade choisis pour leur perméabilité à la vapeur d'eau et leur tenue aux UV.",
  },
  {
    title: "Menuiseries extérieures",
    text: "Mise en peinture des volets, portails et boiseries extérieures, avec préparation et protection adaptées.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Façades & extérieur"
        intro="Une façade protège le bâti autant qu'elle le met en valeur. Le diagnostic des supports et le traitement des fissures déterminent la tenue du résultat dans le temps."
        image={img}
        imageAlt="Façade de maison rénovée avec enduit clair et volets bleus"
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
            <Eyebrow>Avant les travaux</Eyebrow>
            <SectionTitle>Le diagnostic conditionne le résultat</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Toutes les fissures ne se traitent pas de la même manière, et tous les enduits
              n'acceptent pas les mêmes finitions. Nous examinons la nature du support, son
              exposition et l'origine des désordres avant de proposer une solution.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Certaines communes encadrent les teintes de façade : nous vous accompagnons dans le
              choix des couleurs en tenant compte des règles locales d'urbanisme.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Une façade à rénover ?"
        text="Envoyez-nous quelques photos et l'adresse du bien : nous organisons une visite pour établir un diagnostic."
      />
    </>
  );
}
