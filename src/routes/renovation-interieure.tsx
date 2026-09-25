import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/renovation.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/renovation-interieure")({
  head: () => buildSeoHead({
    title: "Rénovation clé en main à Bouloc, L'Union | Maury Laurent",
    description: "Rénovation de maison clé en main ou travaux ciblés à Bouloc, L'Union et Blagnac : un seul artisan de A à Z, devis gratuit sans rajout.",
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

const prestations = [
  {
    title: "Rénovation globale",
    text: "Reprise complète d'une maison, d'un appartement ou d'un étage : dépose, supports, cloisons, sols, peintures, finitions. Un planning unique et une vision d'ensemble qui évite les incohérences.",
  },
  {
    title: "Préparation des supports",
    text: "Décollage des papiers peints, décapage, traitement de l'humidité, ratissage. Un mur détapissé reçoit toujours un enduit : c'est ce qui transforme un mur fatigué en toile vierge.",
  },
  {
    title: "Placo et cloisons",
    text: "Créer une chambre, ouvrir une cuisine, dessiner un dressing, baisser un plafond. Nous redistribuons les volumes pour qu'ils collent enfin à votre façon de vivre.",
  },
  {
    title: "Isolation intérieure",
    text: "Isolation thermique et acoustique par doublage, avec un traitement soigné des points singuliers, là où se logent les ponts thermiques. Plus de confort l'hiver comme l'été.",
  },
  {
    title: "Aménagement intérieur",
    text: "Rangements intégrés, niches, habillages, menuiseries d'agencement : les détails qui font passer une maison de « bien » à « faite pour nous ».",
  },
  {
    title: "Cuisine et salle de bains",
    text: "Supports adaptés, faïence, peintures résistantes à l'humidité, finitions qui supportent la vapeur. Des pièces d'eau rénovées pour rester belles au quotidien.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Rénovation clé en main à Bouloc : </span>
            Rénovation intérieure
          </>
        }
        intro="Rénover une maison, c'est un peu la réécrire : garder ce qui a de l'âme, corriger ce qui gêne, inventer ce qui manque. Rénovation clé en main ou chantier ciblé, de la pièce à la maison entière : nous menons tout de A à Z, à Bouloc, L'Union, Blagnac et dans tout le nord de Toulouse."
        image={img}
        imageAlt="Intérieur en cours de rénovation, cloisons neuves et sols protégés"
      />

      <Section tone="dark">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow text-primary-foreground/60">Le principe</p>
            <h2 className="mt-5 text-4xl leading-[1.06] lg:text-6xl">
              Combien d'artisans faut-il pour rénover une maison ? Ici, une seule famille.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[17px] leading-relaxed text-primary-foreground/70">
              Plaquiste, peintre, parqueteur, plombier… Une rénovation mobilise souvent cinq ou six
              métiers qui s'attendent les uns les autres. Avec Maury Laurent, pas de relances ni de « c'est
              la faute de celui d'avant » : Laurent et son fils réalisent eux-mêmes votre
              rénovation, sans faire appel à un autre prestataire. Un seul contact, une seule
              responsabilité, du premier café dans votre cuisine jusqu'à la remise des clés.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Ce que nous transformons</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Déroulé</Eyebrow>
            <SectionTitle>Comment se passe une rénovation avec nous ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Tout commence par une visite chez vous : nous mesurons, observons l'existant et surtout
              nous vous écoutons. Le devis, gratuit, détaille chaque poste pièce par pièce, et il
              est tenu : aucun rajout une fois signé.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Le planning est annoncé avant le démarrage, puis respecté. La maison peut rester
              habitable, le chantier étant organisé par zones. À la fin, nous faisons ensemble le
              tour de chaque pièce, et nous restons joignables ensuite.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Votre maison a une seconde vie à écrire ?"
        text="Décrivez les lieux tels qu'ils sont et tels que vous les rêvez, ou simplement la pièce qui vous gêne. Laurent vous rappelle pour organiser une visite et vous remettre un devis gratuit et détaillé."
      />
    </>
  );
}
