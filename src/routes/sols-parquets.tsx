import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/parquet.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/sols-parquets")({
  head: () => buildSeoHead({
    title: "Parquet massif et pose de sols à Bouloc | Maury Laurent",
    description: "Carrelage remplacé par un parquet massif cloué, point de Hongrie, rénovation de parquet à Bouloc, Castelginest et Blagnac. Devis gratuit.",
    path: "/sols-parquets",
    ogType: "article",
    breadcrumbLabel: "Sols et parquets",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Pose et rénovation de parquet et revêtements de sols",
      name: "Sols & parquets",
      description:
        "Remplacement de carrelage par un parquet massif cloué, pose de parquet massif en lames droites, point de Hongrie ou bâtons rompus, remplacement et rénovation de parquet ancien, revêtements de sols.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

const prestations = [
  {
    title: "Du carrelage au parquet massif",
    text: "Nous déposons le carrelage existant, reprenons le support et posons un parquet massif cloué, la pose traditionnelle par excellence. La pièce se réchauffe, l'acoustique s'adoucit, la maison gagne en caractère.",
  },
  {
    title: "Parquet massif cloué",
    text: "Lames droites, point de Hongrie ou bâtons rompus. Finition huilée pour un toucher mat et chaleureux, ou vitrifiée pour les pièces très passantes. Un sol qui se ponce, se renouvelle et se transmet.",
  },
  {
    title: "Remplacement ou rénovation",
    text: "Parquet usé jusqu'à la languette ? Nous déposons l'ancien massif pour en poser un nouveau. Encore sain ? Ponçage, reprise des lames abîmées et nouvelle finition. Nous vous disons franchement ce que nous voyons.",
  },
  {
    title: "Revêtements de sols",
    text: "Sols souples, ragréage, préparation des chapes : pour les pièces où le parquet n'est pas la bonne réponse, nous garantissons un support parfaitement plan, condition d'un revêtement durable.",
  },
  {
    title: "Finitions et raccords",
    text: "Plinthes, seuils, barres de jonction, reprises de peinture après pose. C'est au raccord entre le sol et le mur que l'on reconnaît un travail soigné, et nous le réalisons nous-mêmes.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Pose de parquet massif à Bouloc : </span>
            Sols & revêtements
          </>
        }
        intro="On regarde les murs, mais on vit sur le sol. Remplacement de carrelage par un parquet massif cloué, point de Hongrie, rénovation de parquet ancien : nous posons des sols qui durent des générations, à Bouloc, Castelginest, Blagnac et dans tout le nord de Toulouse."
        image={img}
        imageAlt="Parquet en chêne massif rénové posé en point de Hongrie dans une pièce lumineuse"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Du carrelage au chêne massif, nos savoir-faire</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Bon à savoir</Eyebrow>
            <SectionTitle>Et si on enlevait enfin ce carrelage ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Beaucoup de maisons du nord toulousain ont gardé le carrelage beige des années 1980
              et 1990 : froid sous le pied, sonore sous les pas. Le remplacer par un parquet massif
              cloué change tout. La pièce se réchauffe, le son s'adoucit, la maison gagne une âme.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              C'est un vrai chantier (dépose, évacuation, reprise du support, pose, finition), mené
              pièce par pièce pour que la maison reste habitable. Et s'il s'inscrit dans une
              rénovation plus large, nous la menons de A à Z.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un sol qui mérite mieux ?"
        text="Indiquez-nous la surface, le sol actuel et celui dont vous rêvez : chêne clair, point de Hongrie, carrelage à remplacer… Nous venons voir, prenons le métrage et vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
