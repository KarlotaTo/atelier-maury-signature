import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle, PageHero, FinalCta } from "@/components/site/ui";
import { realisations } from "@/data/realisations";
import { buildSeoHead, absoluteUrl, BUSINESS_ID } from "@/lib/seo";

export const Route = createFileRoute("/realisations/")({
  head: () =>
    buildSeoHead({
      title: "Nos réalisations de rénovation à Bouloc | Maury Laurent",
      description:
        "Avant/après de nos chantiers à Bouloc, Fronton et Grenade : rénovation de maison, enduits à la chaux, ravalement de façade.",
      path: "/realisations",
      breadcrumbLabel: "Réalisations",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Réalisations",
        description: "Avant/après de nos chantiers à Bouloc, Fronton et Grenade : rénovation de maison, enduits à la chaux, ravalement de façade.",
        url: absoluteUrl("/realisations"),
        about: { "@id": BUSINESS_ID },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: realisations.map((r, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: r.title,
            url: absoluteUrl(`/realisations/${r.slug}`),
          })),
        },
      },
    }),
  component: Page,
});


function Page() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Réalisations"
        intro="Un beau résultat ne dit rien du chemin parcouru. Voici une sélection de chantiers menés autour de Bouloc, de la rénovation complète d'une maison à un mur travaillé à la chaux : pour chacun, le contexte, les choix faits et le résultat obtenu."
      />

      <Section>
        <Eyebrow>Chantiers</Eyebrow>
        <SectionTitle>Trois maisons, trois histoires</SectionTitle>
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
        text="Parlez-nous de votre maison ou de votre appartement, qu'il s'agisse d'une pièce ou d'une rénovation complète : nous venons voir et vous remettons un devis gratuit et détaillé."
      />
    </>
  );
}
