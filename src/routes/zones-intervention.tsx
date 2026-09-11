import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
import { communes, site } from "@/data/site";

export const Route = createFileRoute("/zones-intervention")({
  head: () => ({
    meta: [
      { title: "Zones d'intervention : Bouloc, Fronton, Aucamville, Blagnac — Maury Laurent" },
      {
        name: "description",
        content:
          "Maury Laurent intervient à Bouloc (siège de l'entreprise), Fronton, Castelginest, Aucamville, L'Union, Grenade et Blagnac pour vos travaux de peinture et rénovation.",
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
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {communes.map((c) => (
            <article
              key={c.slug}
              className="group flex items-center gap-5 bg-background p-7 transition-colors hover:bg-sand lg:last:col-span-3"
            >
              <span className="flex size-12 shrink-0 items-center justify-center border border-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-primary-foreground">
                <MapPin className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="text-2xl">{c.name}</h3>
              {c.main && (
                <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-accent">
                  Siège de l'entreprise
                </span>
              )}
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
