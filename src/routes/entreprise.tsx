import { createFileRoute } from "@tanstack/react-router";
import { Section, Eyebrow, SectionTitle, Lead, PageHero, FinalCta } from "@/components/site/ui";
import { Rich } from "@/components/site/Rich";
import content from "@/content/pages/entreprise.json";
import { buildSeoHead, BUSINESS_ID, absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/entreprise")({
  head: () => buildSeoHead({
    title: content.seo.title,
    description: content.seo.description,
    path: "/entreprise",
    breadcrumbLabel: "L’entreprise",
    schema: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "L’entreprise",
      description: "Maury Laurent, artisan de la rénovation à Bouloc depuis 1994 : quatre générations d'artisans, une rénovation de A à Z, un seul interlocuteur.",
      url: absoluteUrl("/entreprise"),
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
        title={<><span className="sr-only">{content.hero.titleSeoPrefix} : </span>{content.hero.title}</>}
        intro={content.hero.intro}
        image={content.hero.image}
        imageAlt={content.hero.imageAlt}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{content.famille.eyebrow}</Eyebrow>
            <SectionTitle>{content.famille.title}</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              <Rich text={content.famille.lead} />
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              <Rich text={content.famille.text} />
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>{content.engagements.eyebrow}</Eyebrow>
        <SectionTitle>{content.engagements.title}</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {content.engagements.items.map((e) => (
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
            <Eyebrow>{content.methode.eyebrow}</Eyebrow>
            <SectionTitle>{content.methode.title}</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="divide-y divide-line border-y border-line">
              {content.methode.steps.map(({ title, text }, i) => (
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
        title={content.cta.title}
        text={content.cta.text}
      />
    </>
  );
}
