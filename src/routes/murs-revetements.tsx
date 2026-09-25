import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/murs-enduits.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/murs-revetements")({
  head: () => buildSeoHead({
    title: "Enduits, placo et isolation à Bouloc | Maury Laurent",
    description: "Enduits, reprise de murs, placo et isolation intérieure à Bouloc, Aucamville et Castelginest. Un support sain avant toute finition.",
    path: "/murs-revetements",
    ogType: "article",
    breadcrumbLabel: "Murs et revêtements",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Enduits, placo et isolation intérieure",
      name: "Murs & revêtements",
      description:
        "Enduits de rebouchage, de lissage et à la chaux, reprise de murs abîmés et après dégât des eaux, cloisons, doublages et plafonds en placo, isolation thermique et acoustique par l'intérieur.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

const prestations = [
  {
    title: "Enduits",
    text: "Rebouchage, lissage, ratissage, enduits traditionnels ou à la chaux. Un mur détapissé reçoit toujours un enduit, pour garantir un support optimal. Le matériau se choisit selon le mur, jamais l'inverse.",
  },
  {
    title: "Murs",
    text: "Murs abîmés, arrachés, marqués par un ancien dégât des eaux : nous traitons, assainissons puis reconstituons une surface saine. Les fissures sont ouvertes et comprises, pas simplement rebouchées.",
  },
  {
    title: "Placo",
    text: "Cloisons, doublages, faux plafonds : créer une chambre, redresser un mur, cacher des réseaux. Ossature d'aplomb, joints invisibles, angles francs. Des surfaces prêtes à peindre, sans surprise sous la lumière rasante.",
  },
  {
    title: "Isolation",
    text: "Isolation thermique et acoustique des murs et plafonds par l'intérieur, contre le froid de janvier comme la chaleur de juillet. Elle est pensée en même temps que les finitions, pour ne rien sacrifier à l'esthétique.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Enduits, placo et isolation à Bouloc : </span>
            Murs & revêtements
          </>
        }
        intro="Personne n'admire un enduit de lissage, personne ne photographie une bande de placo. Pourtant, c'est grâce à eux qu'un mur paraît parfait. Enduits, placo, isolation : nous travaillons ce que vous ne verrez jamais, à Bouloc, Aucamville, Castelginest et dans tout le nord de Toulouse."
        image={img}
        imageAlt="Murs fraîchement enduits et lissés dans une pièce lumineuse en cours de rénovation"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Ce qui se cache derrière une belle finition</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Méthode</Eyebrow>
            <SectionTitle>Que raconte une fissure ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Une fissure a une direction, une ouverture, un âge. Dans le nord toulousain, les sols
              argileux gonflent l'hiver et se rétractent l'été : les maisons bougent au rythme des
              saisons. Reboucher sans comprendre, c'est être certain de revoir la fissure l'année
              suivante.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Chaque chantier commence donc par un diagnostic du support. Sur les murs anciens, nous
              privilégions la chaux, qui laisse respirer la brique. Et quand les murs ne sont
              qu'une étape de votre projet, nous menons la rénovation de A à Z.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Des murs à redresser, à créer ou à réparer ?"
        text="Décrivez-nous l'état de vos murs (fissures, humidité, anciennes finitions) et le résultat attendu. Nous venons diagnostiquer, prenons le métrage et vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
