import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/entretien-bati.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/entretien-bati")({
  head: () => buildSeoHead({
    title: "Entretien extérieur et clôtures à Bouloc | Maury Laurent",
    description: "Nettoyage et pose de clôtures, boiseries, traitement anti-mousse : l'entretien extérieur de votre maison à Bouloc, Castelginest et Aucamville.",
    path: "/entretien-bati",
    ogType: "article",
    breadcrumbLabel: "Entretien et bâti",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Entretien extérieur de maison",
      name: "Entretien & bâti",
      description:
        "Nettoyage, réparation et pose de clôtures, entretien des boiseries et menuiseries extérieures, traitement anti-mousse des surfaces extérieures et des toitures.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

const prestations = [
  {
    title: "Clôtures",
    text: "Une clôture est la première chose que l'on voit de votre maison, avant même la façade. Nous la nettoyons pour lui rendre sa teinte, la réparons quand elle fatigue et la posons quand elle doit être remplacée : bois, grillage ou panneaux, alignement tiré au cordeau.",
  },
  {
    title: "Entretien extérieur",
    text: "Portails, volets, avant-toits, boiseries : nous les préparons, les protégeons et les repeignons pour qu'ils traversent les étés brûlants et les hivers humides. Des petits gestes qui prolongent la vie de tout le bâti.",
  },
  {
    title: "Démoussage",
    text: "Murets, terrasses, surfaces extérieures : nettoyage des mousses et lichens avec une méthode adaptée à chaque matériau, car un nettoyage trop agressif abîme ce qu'il prétend protéger.",
  },
  {
    title: "Toiture",
    text: "Nettoyage des mousses puis application d'un traitement : progressif, qui continue de nettoyer dans le temps, ou plus robuste, à effet immédiat. Nous vous conseillons selon l'état de la couverture.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Entretien extérieur à Bouloc : </span>
            Entretien & bâti
          </>
        }
        intro="Une maison ne se dégrade jamais d'un coup. Elle prévient, discrètement : une clôture qui verdit, un portail qui s'écaille, une terrasse qui glisse après la pluie. Nous savons lire ces signaux et intervenir tant que c'est encore simple, à Bouloc, Castelginest, Aucamville et alentour."
        image={img}
        imageAlt="Maison de campagne avec toiture en tuiles entretenue et clôture en bois dans un jardin soigné"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Prendre soin de ce qui entoure la maison</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Approche</Eyebrow>
            <SectionTitle>Combien coûte un petit signe qu'on laisse passer ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Sur le moment, rien. Mais un poteau de clôture qui bouge se redresse en une matinée ;
              après un coup de vent d'autan, c'est toute la travée qu'il faut refaire. Une boiserie
              qui grise se protège en une couche ; une fois fendue, elle se remplace.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Chaque intervention commence par un état des lieux : ce qui doit être traité
              maintenant, ce qui peut attendre, ce qu'il faudra surveiller. Et si un souci
              réapparaît, nous savons revenir.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Votre maison vous envoie des signaux ?"
        text="Clôture fatiguée, boiseries qui grisent, surfaces qui verdissent : décrivez-nous ce que vous observez. Nous venons faire le point et vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
