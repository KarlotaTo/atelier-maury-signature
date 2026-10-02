import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { InterventionMap } from "@/components/site/InterventionMap";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
import { communes, site } from "@/data/site";
import { zones } from "@/data/zones";
import { buildSeoHead, BUSINESS_ID } from "@/lib/seo";
import content from "@/content/pages/zones-intervention.json";

export const Route = createFileRoute("/zones-intervention/")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/zones-intervention",
    breadcrumbLabel: "Zones d’intervention",
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Zones d’intervention",
      description: "Peinture et rénovation à Bouloc, Fronton, Castelginest, Aucamville, L’Union, Grenade et Blagnac. Découvrez nos zones d’intervention.",
      url: "https://maury-laurent.lnkio.fr/zones-intervention",
      about: { "@id": BUSINESS_ID },
    },
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
      />

      <Section>
        <Eyebrow>{content.communes.eyebrow}</Eyebrow>
        <SectionTitle>{content.communes.title}</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {communes.map((c) => (
            <Link
              key={c.slug}
              to="/zones-intervention/$commune"
              params={{ commune: c.slug }}
              className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-sand lg:last:col-span-3"
            >
              <div className="flex items-center gap-5">
                <span className="flex size-12 shrink-0 items-center justify-center border border-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-primary-foreground">
                  <MapPin className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-2xl">{c.name}</h3>
                {c.main && (
                  <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-accent">
                    Siège de l'entreprise
                  </span>
                )}
              </div>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {zones.find((z) => z.slug === c.slug)?.hubText}
              </p>
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent">Voir la page {c.name} →</span>
            </Link>
          ))}
        </div>
        <InterventionMap />
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{content.auDela.eyebrow}</Eyebrow>
            <SectionTitle>{content.auDela.title}</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              {content.auDela.text}
            </Lead>
          </div>
        </div>
      </Section>

      <FinalCta
        title={content.cta.title}
        text={content.cta.text}
      />
    </>
  );
}
