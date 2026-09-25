import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/peinture-decorative.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/peinture-decoration")({
  head: () => buildSeoHead({
    title: "Peintre décorateur à Bouloc et Fronton | Maury Laurent",
    description: "Peintures à effet, textures, chaux, home staging et conseil couleurs à Bouloc, Fronton et L'Union. Artisan peintre décorateur, devis gratuit.",
    path: "/peinture-decoration",
    ogType: "article",
    breadcrumbLabel: "Peinture intérieure et décoration",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Peinture intérieure et décoration",
      name: "Peinture & décoration",
      description:
        "Peinture intérieure, peintures à effet, textures et mouvement, enduits à la chaux, conseil couleurs et home staging, en rénovation comme dans le neuf.",
      provider: {
        "@type": ["GeneralContractor", "HousePainter"],
        name: "Maury Laurent",
        url: "https://maury-laurent.lnkio.fr/",
        telephone: "+33603068750",
        address: { "@type": "PostalAddress", streetAddress: "14 impasse de la Seube", postalCode: "31620", addressLocality: "Bouloc", addressCountry: "FR" },
      },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

const prestations = [
  {
    title: "Peinture intérieure",
    text: "Murs, plafonds, boiseries, portes. Mat, velours ou satiné : la finition se choisit selon la pièce et la lumière. Nous travaillons avec des peintures de qualité, de fabrication française, et des peintures bio pour un intérieur plus sain.",
  },
  {
    title: "Peinture décorative",
    text: "Patines, glacis, camaïeux, murs d'accent : l'art de donner de la profondeur à une surface plane. Un bleu nuit derrière une tête de lit, un soubassement terracotta dans une entrée. Chaque effet est d'abord testé sur place.",
  },
  {
    title: "Effets, textures et mouvement",
    text: "Peintures à mouvement qui font onduler la lumière, textures qui donnent du relief sous la main, effets sablés ou métallisés, béton ciré, stuc. Des rendus travaillés à la main, sur des supports préparés en conséquence.",
  },
  {
    title: "Enduits à la chaux",
    text: "Chaux aérienne ou hydraulique, badigeons, stucs. Une matière vivante, qui respire et vieillit avec noblesse. Idéale pour les maisons anciennes en brique du Frontonnais, elle apporte aussi une profondeur rare aux intérieurs contemporains.",
  },
  {
    title: "Conseil couleurs",
    text: "Orientation des pièces, matériaux existants, circulation entre les espaces : nous analysons, puis nous proposons une palette cohérente, pièce par pièce. Les teintes sont testées sur vos murs, le matin et le soir, avant validation.",
  },
  {
    title: "Home staging",
    text: "Vendre, louer ou redécouvrir sa maison : quelques teintes bien choisies, un mur d'accent et des finitions reprises suffisent à changer la première impression. Nous sommes force de proposition, de l'idée au résultat, à Blagnac, L'Union ou Castelginest.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Peintre décorateur à Bouloc : </span>
            Peinture & décoration
          </>
        }
        intro="Le cœur de notre métier. Une couleur ne se choisit pas sur un nuancier : elle se choisit sur votre mur, sous votre lumière. Peinture intérieure, effets, textures, chaux, home staging : nous travaillons la teinte comme une matière, en rénovation comme dans le neuf, à Bouloc, Fronton et dans tout le nord de Toulouse."
        image={img}
        imageAlt="Artisan appliquant un enduit à la chaux au spalter sur un mur intérieur"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Six façons de travailler la couleur</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Méthode</Eyebrow>
            <SectionTitle>Pourquoi l'essentiel se joue avant la première couche ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Rebouchage, ponçage, dépoussiérage, traitement des fissures, impression adaptée : la
              plus grande partie d'un chantier de peinture se passe à préparer. Sur un mur
              détapissé, nous passons systématiquement un enduit, pour un support parfaitement
              lisse. C'est cette part invisible qui fait qu'une peinture reste belle après dix
              hivers.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Sur les logements habités, les protections sont posées chaque matin et retirées le
              soir. Et si votre projet va au-delà de la peinture, nous pouvons le mener de A à Z, en
              rénovation clé en main.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Une pièce à réinventer ?"
        text="Dites-nous quelles pièces vous voulez transformer et l'atmosphère que vous recherchez, même en trois mots. Nous venons voir, prenons les mesures, puis vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
