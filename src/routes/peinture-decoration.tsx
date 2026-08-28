import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/peinture-decorative.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";

export const Route = createFileRoute("/peinture-decoration")({
  head: () => ({
    meta: [
      { title: "Peinture intérieure et décorative à Bouloc — Maury Laurent" },
      {
        name: "description",
        content:
          "Peinture intérieure, effets et textures, enduits à la chaux, conseil couleurs et home staging autour de Bouloc, Fronton et Blagnac.",
      },
      { property: "og:title", content: "Peinture & décoration — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Finitions soignées, préparation des supports, peinture décorative et conseil couleurs par une entreprise familiale depuis 1994.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/peinture-decoration" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/peinture-decoration" }],
  }),
  component: Page,
});

const prestations = [
  {
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries, portes et menuiseries. Préparation complète des supports, choix de finition mate, satinée ou velours selon la pièce et la lumière.",
  },
  {
    title: "Peinture décorative",
    text: "Travail de la matière et de la nuance : patines, glacis, camaïeux, murs d'accent. Chaque projet fait l'objet d'échantillons réalisés sur place.",
  },
  {
    title: "Effets et textures",
    text: "Béton ciré décoratif, stuc, effets sablés ou métallisés. Des rendus travaillés à la main, appliqués sur des supports préparés en conséquence.",
  },
  {
    title: "Enduits à la chaux",
    text: "Chaux aérienne ou hydraulique, badigeons et stucs. Une finition minérale respirante, particulièrement adaptée aux bâtis anciens.",
  },
  {
    title: "Conseil couleurs",
    text: "Analyse de la lumière, des volumes et des matériaux existants, puis proposition d'une palette cohérente pièce par pièce, avec essais avant validation.",
  },
  {
    title: "Home staging",
    text: "Mise en valeur d'un bien avant vente ou location : harmonisation des teintes, reprise des finitions, interventions ciblées à fort impact visuel.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Peinture & décoration"
        intro="Le cœur du métier. Une peinture réussie tient à la préparation, au produit choisi et à la régularité de l'application — un travail visible dans les angles, les raccords et la lumière rasante."
        image={img}
        imageAlt="Artisan appliquant un enduit à la chaux au spalter sur un mur intérieur"
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
            <SectionTitle>Le soin apporté aux supports</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Rebouchage, ponçage, dépoussiérage, traitement des fissures et impression adaptée :
              l'essentiel du temps d'un chantier de peinture se joue avant la couche de finition.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Sur les logements habités, les protections sont posées chaque matin et retirées le
              soir. Le chantier est laissé propre et praticable en fin de journée.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un projet de peinture ou de décoration ?"
        text="Décrivez les pièces concernées et vos attentes de rendu : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
