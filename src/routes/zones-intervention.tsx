import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
import { communes, site } from "@/data/site";

export const Route = createFileRoute("/zones-intervention")({
  head: () => ({
    meta: [
      { title: "Zones d'intervention : Bouloc, Fronton, Aucamville, Blagnac — Maury Laurent" },
      {
        name: "description",
        content:
          "Maury Laurent intervient à Bouloc (secteur principal), Fronton, Castelginest, Aucamville, L'Union, Grenade et Blagnac pour vos travaux de peinture et rénovation.",
      },
      { property: "og:title", content: "Zones d'intervention — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Peinture et rénovation au nord de Toulouse : Bouloc, Fronton, Castelginest, Aucamville, L'Union, Grenade, Blagnac.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/zones-intervention" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/zones-intervention" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Secteurs"
        title="Zones d'intervention"
        intro={`Basée à ${site.city}, l'entreprise intervient au nord de Toulouse, sur un secteur resserré qui garantit des déplacements rapides et un vrai suivi de chantier.`}
      />

      <Section>
        <Eyebrow>Communes</Eyebrow>
        <SectionTitle>Où nous travaillons</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          {communes.map((c) => (
            <article key={c.slug} className="bg-background p-8 lg:p-10">
              <h3 className="flex items-baseline gap-3 text-2xl">
                {c.name}
                {c.main && (
                  <span className="text-[11px] uppercase tracking-[0.18em] text-accent">
                    Secteur principal
                  </span>
                )}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Au-delà ?</Eyebrow>
            <SectionTitle>Votre commune n'est pas listée</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              Ce périmètre est celui des interventions courantes. Pour un projet situé en dehors —
              notamment les rénovations complètes — contactez-nous : chaque demande est étudiée.
            </Lead>
          </div>
        </div>
      </Section>

      <FinalCta
        title="Un projet sur l'une de ces communes ?"
        text="Décrivez votre maison ou votre appartement : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
