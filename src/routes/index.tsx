import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import { Section, Eyebrow, SectionTitle, Lead, CtaPair, FinalCta } from "@/components/site/ui";
import { Rich } from "@/components/site/Rich";
import content from "@/content/pages/accueil.json";
import { site, communes, avis, hasPhone, telHref } from "@/data/site";
import { realisations } from "@/data/realisations";
import { buildSeoHead, localBusinessSchema, BUSINESS_ID, SITE_URL } from "@/lib/seo";


export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: content.seo.title,
      description: content.seo.description,
      path: "/",
      schema: [
        localBusinessSchema,
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: SITE_URL,
          inLanguage: "fr-FR",
          publisher: { "@id": BUSINESS_ID },
        },
      ],
    }),
  component: Home,
});


const { hero, approche, expertises, renovationGlobale, histoire, engagements } = content;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="fade-up lg:col-span-6">
              <Eyebrow>{hero.eyebrow}</Eyebrow>
              <h1 className="mt-6 text-[3.25rem] leading-[0.98] tracking-tight lg:text-[5.5rem]">
                <span className="sr-only">{hero.titleSeoPrefix} : </span>
                <Rich text={hero.title} emClassName="italic text-accent" />
              </h1>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                {hero.intro}
              </p>
              <div className="mt-8">
                <CtaPair />
              </div>
              {hasPhone() && (
                <a href={telHref()} className="mt-6 inline-block text-sm text-ink">
                  ou appelez le <span className="text-accent">{site.phone}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-[1400px] px-5 lg:px-10">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            width={1600}
            height={1104}
            className="h-[52vh] w-full object-cover lg:h-[76vh]"
          />
        </div>
      </section>

      {/* PROPOSITION DE VALEUR */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{approche.eyebrow}</Eyebrow>
            <SectionTitle>
              <Rich text={approche.title} />
            </SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              <Rich text={approche.lead} />
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              <Rich text={approche.text} />
            </p>
          </div>
        </div>
      </Section>

      {/* EXPERTISES */}
      <Section tone="sand">
        <Eyebrow>{expertises.eyebrow}</Eyebrow>
        <SectionTitle>{expertises.title}</SectionTitle>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.items.map((e) => (
            <Link key={e.link} to={e.link} className="group block">
              <div className="overflow-hidden">
                <img
                  src={e.image}
                  alt={e.imageAlt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-6 flex items-center gap-2 text-2xl">
                {e.label}
                <ArrowUpRight className="h-4 w-4 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{e.text}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* A à Z */}
      <Section tone="dark">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow text-primary-foreground/60">{renovationGlobale.eyebrow}</p>
            <h2 className="mt-5 text-4xl leading-[1.06] lg:text-6xl">
              <Rich text={renovationGlobale.title} />
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-primary-foreground/70">
              <Rich text={renovationGlobale.text} />
            </p>
            <ul className="mt-10 space-y-4 border-t border-white/15 pt-8 text-[15px] text-primary-foreground/80">
              {renovationGlobale.steps.map((s, i) => (
                <li key={s} className="flex gap-5">
                  <span className="text-[oklch(0.72_0.12_25)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/renovation-interieure"
                className="link-underline text-sm uppercase tracking-[0.18em]"
              >
                {renovationGlobale.linkLabel}
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={renovationGlobale.image}
              alt={renovationGlobale.imageAlt}
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* REALISATIONS */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{content.realisations.eyebrow}</Eyebrow>
            <SectionTitle>{content.realisations.title}</SectionTitle>
          </div>
          <Link
            to="/realisations"
            className="link-underline text-sm uppercase tracking-[0.18em] text-ink"
          >
            {content.realisations.linkLabel}
          </Link>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
          {realisations.map((r) => (
            <Link
              key={r.slug}
              to="/realisations/$slug"
              params={{ slug: r.slug }}
              className="group bg-background p-8 transition-colors hover:bg-sand lg:p-10"
            >
              <div className="overflow-hidden">
                <img
                  src={r.images[0]!.src}
                  alt={r.images[0]!.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent">{r.type}</p>
              <h3 className="mt-3 text-2xl leading-snug">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.city}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* HISTOIRE */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{histoire.eyebrow}</Eyebrow>
            <SectionTitle>{histoire.title}</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              <Rich text={histoire.lead} />
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              <Rich text={histoire.text} />
            </p>
            <Link
              to="/entreprise"
              className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em] text-ink"
            >
              {histoire.linkLabel}
            </Link>
          </div>
        </div>
      </Section>

      {/* ENGAGEMENTS */}
      <Section>
        <Eyebrow>{engagements.eyebrow}</Eyebrow>
        <SectionTitle>{engagements.title}</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {engagements.items.map((e) => (
            <article key={e.title} className="bg-background p-8 lg:p-10">
              <h3 className="rule-accent text-2xl">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* AVIS */}
      <Section tone="sand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{content.avis.eyebrow}</Eyebrow>
            <SectionTitle>{content.avis.title}</SectionTitle>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            {content.avis.note}
          </p>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {avis.map((a) => (
            <figure key={a.author} className="flex flex-col bg-background p-8 lg:p-10">
              <div
                className="flex items-center gap-1 text-accent"
                aria-label={`${a.rating} étoiles sur 5`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4"
                    fill={i < a.rating ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                «&nbsp;{a.text}&nbsp;»
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-display text-lg">{a.author}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Avis Google · {a.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ZONES */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{content.zones.eyebrow}</Eyebrow>
            <SectionTitle>{content.zones.title}</SectionTitle>
            <Lead className="mt-6">
              {content.zones.lead}
            </Lead>
            <Link
              to="/zones-intervention"
              className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em] text-ink"
            >
              {content.zones.linkLabel}
            </Link>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {communes.map((c) => (
                <li
                  key={c.slug}
                  className="group flex items-center gap-4 bg-background p-5 transition-colors last:sm:col-span-2 hover:bg-sand"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center border border-line text-accent transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-primary-foreground">
                    <MapPin className="size-4" strokeWidth={1.5} />
                  </span>
                  <p className="font-display text-2xl">{c.name}</p>
                  {c.main && (
                    <span className="ml-auto text-[11px] uppercase tracking-[0.18em] text-accent">
                      Siège de l'entreprise
                    </span>
                  )}
                </li>
              ))}
            </ul>
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
