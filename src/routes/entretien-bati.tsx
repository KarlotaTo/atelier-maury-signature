import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/entretien-bati.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead, serviceSchema } from "@/lib/seo";

export const Route = createFileRoute("/entretien-bati")({
  head: () => buildSeoHead({
    title: "Démoussage et entretien du bâti à Bouloc | Maury Laurent",
    description: "Entretien du bâti, démoussage de toiture, clôtures et petits travaux extérieurs à Bouloc, Fronton et au nord de Toulouse.",
    path: "/entretien-bati",
    ogType: "article",
    breadcrumbLabel: "Entretien et bâti",
    schema: serviceSchema("Entretien du bâti", "Entretien du bâti, démoussage de toiture, clôtures et petits travaux extérieurs à Bouloc, Fronton et au nord de Toulouse.", "/entretien-bati"),
  }),
  component: Page,
});

const prestations = [
  {
    title: "Toiture",
    text: "Petites reprises et entretien courant de la couverture : remplacement d'éléments, contrôle des points sensibles, remise en état localisée.",
  },
  {
    title: "Démoussage",
    text: "Nettoyage et démoussage des toitures et surfaces extérieures, avec des méthodes adaptées au matériau pour ne pas l'agresser.",
  },
  {
    title: "Clôtures",
    text: "Pose, réparation et entretien des clôtures : bois, grillage ou panneaux, avec des fondations propres et un alignement soigné.",
  },
  {
    title: "Entretien extérieur",
    text: "Petits travaux qui prolongent la vie du bâti : reprises de boiseries, protections, finitions extérieures et retouches de peinture.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title="Entretien & bâti"
        intro="Une maison se protège par l'entretien régulier. Toiture, démoussage, clôtures : des interventions ciblées qui évitent les grosses réparations de demain."
        image={img}
        imageAlt="Maison de campagne avec toiture en tuiles entretenue et clôture en bois dans un jardin soigné"
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
            <Eyebrow>Approche</Eyebrow>
            <SectionTitle>Prévenir plutôt que réparer</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Mousse sur la toiture, clôture qui bouge, boiseries qui grisent : ces signes se
              traitent facilement quand on s'y prend tôt. Nous intervenons sur des entretiens
              ponctuels comme sur un suivi régulier.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Chaque intervention est précédée d'un état des lieux, et vous repartez avec des
              conseils clairs sur ce qu'il conviendra de surveiller.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un entretien à prévoir sur votre maison ?"
        text="Décrivez ce qui doit être vérifié ou repris : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
