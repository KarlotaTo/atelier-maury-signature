import { createFileRoute } from "@tanstack/react-router";
import img from "@/assets/facade.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/facades-exterieur")({
  head: () => buildSeoHead({
    title: "Ravalement de façade à Bouloc, Grenade | Maury Laurent",
    description: "Ravalement, réparation des fissures et peinture de façade épaisse, sans crépi, à Bouloc, Grenade, Fronton et au nord de Toulouse. Devis gratuit.",
    path: "/facades-exterieur",
    ogType: "article",
    breadcrumbLabel: "Façades et extérieur",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Ravalement et rénovation de façade",
      name: "Façades & extérieur",
      description:
        "Ravalement de façade, préparation des supports, réparation des fissures, peinture de façade épaisse sans crépi, rénovation des murs extérieurs et mise en peinture des menuiseries extérieures.",
      provider: { "@id": "https://maury-laurent.lnkio.fr/#entreprise" },
      areaServed: ["Bouloc", "Fronton", "Castelginest", "Aucamville", "L'Union", "Grenade", "Blagnac"],
    },
  }),
  component: Page,
});

const prestations = [
  {
    title: "Ravalement",
    text: "Nettoyage, reprise des enduits, réparation des fissures puis application d'une peinture de façade adaptée au support et à l'exposition. Un ravalement réussi ne se contente pas de rafraîchir : il reconstitue une protection durable.",
  },
  {
    title: "Rénovation des murs extérieurs",
    text: "Reprise des enduits dégradés, des soubassements et des points sensibles aux remontées d'humidité, la zone la plus exposée et souvent la plus négligée.",
  },
  {
    title: "Préparation des supports",
    text: "Diagnostic, décapage, brossage, traitement anti-mousse. Un support mal préparé fait cloquer et peler la finition au bout de quelques années : c'est l'étape que nous ne bâclons jamais.",
  },
  {
    title: "Réparation des fissures",
    text: "Chaque fissure est ouverte, traitée et pontée selon sa nature avant la finition. Une fissure traitée en surface réapparaît toujours ; une fissure comprise disparaît.",
  },
  {
    title: "Peinture extérieure",
    text: "Une peinture de façade épaisse, dite plastifiée, qui forme une véritable peau protectrice et tient aux UV comme aux intempéries. Nous ne faisons pas de crépi : nous privilégions une finition peinte, nette et durable.",
  },
  {
    title: "Menuiseries extérieures",
    text: "Volets, portails, boiseries : des volets écaillés suffisent à vieillir une façade impeccable. Nous les préparons, les protégeons et les repeignons pour que l'ensemble raconte la même histoire.",
  },
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Savoir-faire"
        title={
          <>
            <span className="sr-only">Ravalement de façade à Bouloc : </span>
            Façades & extérieur
          </>
        }
        intro="Une façade, c'est la seule partie de votre maison que tout le monde voit, sauf vous. C'est aussi elle qui encaisse le vent d'autan, les orages et les étés brûlants. Préparation, réparation des fissures, peinture de façade : nous la soignons autant que nous l'embellissons, à Bouloc, Grenade, Fronton et dans tout le nord de Toulouse."
        image={img}
        imageAlt="Façade de maison rénovée avec enduit clair et volets bleus"
      />

      <Section>
        <Eyebrow>Prestations</Eyebrow>
        <SectionTitle>Préparer, réparer, protéger</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Avant les travaux</Eyebrow>
            <SectionTitle>Que fait le vent d'autan à votre façade ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Chaud et sec, il dessèche les enduits, accélère le farinage des peintures et peut faire
              sécher une couche trop vite en plein chantier. Nous choisissons donc les produits et
              les jours d'application selon le climat réel, quitte à décaler un chantier de 48 heures
              plutôt que de le compromettre pour dix ans.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Avant toute chose, nous examinons le support, son exposition et l'origine des
              fissures. Dans les centres anciens, comme à Grenade ou Fronton, nous vous accompagnons
              dans le choix des teintes selon les règles d'urbanisme locales.
            </p>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Votre façade a besoin d'une seconde peau ?"
        text="Envoyez-nous quelques photos et l'adresse de votre maison : nous venons établir un diagnostic précis et vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
