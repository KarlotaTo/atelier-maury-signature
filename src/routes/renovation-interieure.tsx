import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/renovation.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/renovation-interieure")({
  head: () => ({
    meta: [
      { title: "Rénovation intérieure à Bouloc et alentours — Maury Laurent" },
      {
        name: "description",
        content:
          "Rénovation globale, placo, isolation, aménagement, cuisine, salle de bains et carrelage. Un seul interlocuteur pour votre projet, de l'étude à la réception.",
      },
      { property: "og:title", content: "Rénovation intérieure — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Un seul interlocuteur pour votre projet de rénovation intérieure autour de Bouloc, Fronton, Aucamville, Blagnac et Grenade.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/renovation-interieure" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/renovation-interieure" }],
  }),
  component: Page,
});

const prestations = [
  {
    title: "Rénovation globale",
    text: "Reprise complète d'un logement ou d'un étage : dépose, reprise des supports, cloisonnement, sols, finitions. Un planning unique pour l'ensemble des lots.",
  },
  {
    title: "Préparation des supports",
    text: "Décollage de papiers peints, décapage, traitement de l'humidité de surface, ratissage et enduits de lissage avant finition.",
  },
  {
    title: "Placo et cloisons",
    text: "Création ou modification de cloisons, doublages, faux plafonds, bandes et finition prête à peindre.",
  },
  {
    title: "Isolation intérieure",
    text: "Isolation thermique et acoustique par l'intérieur, en doublage sur ossature, avec traitement des points singuliers.",
  },
  {
    title: "Aménagement intérieur",
    text: "Redistribution des volumes, rangements intégrés, habillages et menuiseries d'agencement.",
  },
  {
    title: "Cuisine et salle de bains",
    text: "Rénovation des pièces d'eau : reprise des supports, étanchéité, faïence, carrelage et finitions adaptées à l'humidité.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Rénovation intérieure"
        intro="De la pièce à reprendre à la maison entière, nous menons des rénovations complètes en gardant la maîtrise des finitions — parce que c'est là que se juge le résultat."
        image={img}
        imageAlt="Intérieur en cours de rénovation, cloisons neuves et sols protégés"
      />

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow text-primary-foreground/60">Le principe</p>
            <h2 className="mt-5 text-4xl leading-[1.06] lg:text-6xl">
              Un seul interlocuteur pour votre projet de rénovation
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[17px] leading-relaxed text-primary-foreground/70">
              Vous n'avez pas à coordonner les intervenants, à relancer les uns pour débloquer les
              autres, ni à arbitrer entre des devis qui ne se recoupent pas. Laurent organise le
              chantier, planifie les corps de métier complémentaires et reste votre contact du
              premier échange à la réception des travaux.
            </p>
          </div>
        </div>
      </Section>

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
            <Eyebrow>Déroulé</Eyebrow>
            <SectionTitle>Comment se passe un chantier</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Une visite sur place permet de mesurer, comprendre l'existant et identifier les
              contraintes. Le devis reprend ensuite chaque poste séparément, avec les surfaces, les
              produits et les finitions retenues.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Le planning est annoncé avant le démarrage. Pendant les travaux, un point régulier est
              fait sur l'avancement et les éventuels ajustements, toujours validés avant exécution.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un projet de rénovation à étudier ?"
        text="Expliquez-nous l'état actuel des lieux et ce que vous souhaitez obtenir. Nous vous rappelons pour organiser une visite."
      />
    </>
  );
}
