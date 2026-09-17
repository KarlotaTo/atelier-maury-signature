import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle, PageHero, FinalCta } from "@/components/site/ui";
import { realisations } from "@/data/realisations";

export const Route = createFileRoute("/realisations/")({
  head: () => ({
    meta: [
      { title: "Réalisations en peinture et rénovation autour de Bouloc — Maury Laurent" },
      {
        name: "description",
        content:
          "Chantiers de peinture, décoration et rénovation menés autour de Bouloc, Fronton et Grenade par une entreprise familiale depuis 1994.",
      },
      { property: "og:title", content: "Réalisations — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Chantiers sélectionnés : rénovation complète, peinture décorative, ravalement de façade autour de Bouloc.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/realisations" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/realisations" }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Réalisations"
        intro="Une sélection de chantiers menés autour de Bouloc. Chaque fiche détaille le contexte, les prestations réalisées et le résultat obtenu."
      />

      <Section>
        <Eyebrow>Chantiers</Eyebrow>
        <SectionTitle>Travaux sélectionnés</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {realisations.map((r) => (
            <Link
              key={r.slug}
              to="/realisations/$slug"
              params={{ slug: r.slug }}
              className="group bg-background p-8 transition-colors hover:bg-sand lg:p-10"
            >
              <img
                src={r.images[0]!.src}
                alt={r.images[0]!.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent">{r.type}</p>
              <h2 className="mt-3 text-2xl leading-snug">{r.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{r.city}</p>
            </Link>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Votre projet pourrait être le prochain"
        text="Parlez-nous de votre maison ou de votre appartement : nous vous proposons une visite et un devis détaillé."
      />
    </>
  );
}
