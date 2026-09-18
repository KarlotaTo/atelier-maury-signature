import { createFileRoute } from "@tanstack/react-router";
import atelierImg from "@/assets/atelier.jpg";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
import { engagements, site } from "@/data/site";
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";

export const Route = createFileRoute("/entreprise")({
  head: () => buildSeoHead({
    title: "Entreprise familiale de rénovation à Bouloc | Maury Laurent",
    description: "Découvrez Maury Laurent, entreprise familiale de peinture, décoration et rénovation installée à Bouloc depuis 1994.",
    path: "/entreprise",
    breadcrumbLabel: "L’entreprise",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "L’entreprise",
      description: "Découvrez Maury Laurent, entreprise familiale de peinture, décoration et rénovation installée à Bouloc depuis 1994.",
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
        title="Une histoire de famille, un métier de main"
        intro={`Créée en ${site.since} par Laurent Maury, quatrième génération d'artisans, l'entreprise est installée à ${site.city}. Le métier s'y transmet par la pratique : les gestes, l'exigence de finition et la relation directe avec les clients.`}
        image={atelierImg}
        imageAlt="Outils d'artisan peintre : brosses, couteaux et nuancier sur un établi"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>La famille</Eyebrow>
            <SectionTitle>Quatre générations, deux mains aujourd'hui</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Aujourd'hui, Laurent travaille avec son fils. Deux regards, deux générations, une
              même manière de mener un chantier : peu de monde, du temps donné à la préparation,
              et une responsabilité assumée de bout en bout.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              L'entreprise reste volontairement à taille humaine : chaque chantier est suivi
              personnellement, et le client échange toujours avec la personne qui réalise les
              travaux.
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
            <SectionTitle>Comment se déroule un chantier</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {[
                ["Visite sur place", "Compréhension du projet, relevés, état des supports."],
                ["Devis détaillé", "Chaque poste est chiffré ligne par ligne, sans zone floue."],
                ["Planning", "Un calendrier est annoncé avant démarrage et tenu."],
                ["Réalisation", "Chantier propre, protections quotidiennes, référent unique."],
                ["Réception", "Point de fin de chantier ensemble, reprises si nécessaire."],
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
        text="Une visite sur place, un échange direct avec Laurent, puis un devis détaillé poste par poste."
      />
    </>
  );
}
