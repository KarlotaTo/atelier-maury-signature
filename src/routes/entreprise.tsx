import { createFileRoute } from "@tanstack/react-router";
import atelierImg from "@/assets/atelier.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
const engagements = [
  { title: "Un interlocuteur unique", text: "Laurent suit personnellement chaque chantier, de la première visite à la réception. Un seul contact, une seule responsabilité." },
  { title: "Préparation des supports", text: "C'est là que se joue la tenue d'une finition. Un mur détapissé reçoit toujours un enduit : nous ne bâclons jamais cette étape." },
  { title: "Chantier propre", text: "Sols et mobilier protégés, rangement chaque soir. En fin de chantier, vous retrouvez votre maison comme avant, en plus belle." },
  { title: "Devis gratuit et tenu", text: "Chaque poste chiffré ligne par ligne, pièce par pièce, après métrage. Ce qui est écrit est ce qui sera facturé : aucun rajout." },
  { title: "Respect des délais", text: "Les rendez-vous sont honorés, les dates de travaux tenues. C'est notre premier gage de sérieux." },
  { title: "Suivi après travaux", text: "Un engagement, pas une transaction : nous savons revenir en cas de souci. Travaux couverts par la garantie décennale." },
];
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";

export const Route = createFileRoute("/entreprise")({
  head: () => buildSeoHead({
    title: "Artisan rénovation à Bouloc depuis 1994 | Maury Laurent",
    description: "Maury Laurent, artisan de la rénovation à Bouloc depuis 1994 : quatre générations d'artisans, une rénovation de A à Z, un seul interlocuteur.",
    path: "/entreprise",
    breadcrumbLabel: "L’entreprise",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "L’entreprise",
      description: "Maury Laurent, artisan de la rénovation à Bouloc depuis 1994 : quatre générations d'artisans, une rénovation de A à Z, un seul interlocuteur.",
      url: "https://maury-laurent.lnkio.fr/entreprise",
      about: { "@id": BUSINESS_ID },
    },
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="L'entreprise"
        title={<><span className="sr-only">Artisan de la rénovation à Bouloc depuis 1994 : </span>Une histoire de famille, un métier de main</>}
        intro="Chez les Maury, on a toujours été artisan. Un arrière-grand-père contremaître, un père et un oncle dans le métier : Laurent a grandi au milieu des chantiers. En 1994, il crée son entreprise de rénovation à Bouloc. Aujourd'hui, c'est à son fils qu'il transmet ses gestes."
        image={atelierImg}
        imageAlt="Outils d'artisan peintre : brosses, couteaux et nuancier sur un établi"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>La famille</Eyebrow>
            <SectionTitle>Qu'est-ce qu'on hérite, quand on hérite d'un métier ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Pas des outils : ils s'usent. Pas des clients : ils se méritent. On hérite d'un regard, celui qui repère un défaut avant qu'il n'apparaisse, et d'une façon de se tenir : arriver à l'heure, dire la vérité sur un devis, rendre une maison propre. Finaliste d'un concours national d'apprentis en 1990, Laurent en a fait sa règle.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Aujourd'hui, il travaille avec son fils. Une équipe volontairement à taille humaine, capable de mener une rénovation de A à Z sans faire appel à un autre prestataire. La personne qui vous reçoit est celle qui réalise les travaux.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Engagements</Eyebrow>
        <SectionTitle>Ce sur quoi vous pouvez compter</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {engagements.map((e) => (
            <article key={e.title} className="bg-background p-8 lg:p-10">
              <h3 className="rule-accent text-2xl">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Méthode</Eyebrow>
            <SectionTitle>Comment se déroule un chantier avec nous ?</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {[
                ["Visite sur place", "Compréhension du projet, métrage, état des supports."],
                ["Devis gratuit", "Chaque poste chiffré ligne par ligne, sans rajout."],
                ["Planning", "Un calendrier annoncé avant le démarrage, puis tenu."],
                ["Réalisation", "Chantier propre, référent unique, peintures de qualité."],
                ["Réception", "Tour des pièces ensemble, reprises si nécessaire."],
              ].map(([title, text], i) => (
                <li key={title} className="flex gap-6 py-5">
                  <span className="font-display text-2xl text-accent tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-ink">{title}</p>
                    <p className="mt-1 text-[15px] text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Faites connaissance autour de votre projet"
        text="Une visite chez vous, un échange direct avec Laurent, puis un devis gratuit et détaillé. Aucun engagement, simplement une conversation."
      />
    </>
  );
}
