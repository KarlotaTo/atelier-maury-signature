import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Section, Eyebrow, FinalCta } from "@/components/site/ui";
import { getRealisation } from "@/data/realisations";

export const Route = createFileRoute("/realisations/$slug")({
  loader: ({ params }) => {
    const realisation = getRealisation(params.slug);
    if (!realisation) throw notFound();
    return realisation;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Réalisation introuvable — Maury Laurent" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} à ${loaderData.city} — Maury Laurent` },
        { name: "description", content: loaderData.summary },
        { property: "og:title", content: `${loaderData.title} — Maury Laurent` },
        { property: "og:description", content: loaderData.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: Page,
});

function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 text-4xl">Réalisation introuvable</h1>
        <p className="mt-4 text-muted-foreground">
          Cette fiche n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/realisations"
          className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em] text-ink"
        >
          Toutes les réalisations
        </Link>
      </div>
    </Section>
  );
}

function Page() {
  const r = Route.useLoaderData();
  const beforeAfterItems = r.beforeAfter?.filter((item) => item.beforeImage && item.afterImage) ?? [];

  return (
    <>
      <Section>
        <Link
          to="/realisations"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Toutes les réalisations
        </Link>
        <p className="eyebrow mt-10">{r.type}</p>
        <h1 className="mt-5 max-w-3xl text-4xl leading-[1.06] lg:text-6xl">{r.title}</h1>
        <p className="mt-4 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          {r.city}
        </p>
        <p className="mt-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          {r.description}
        </p>

        {beforeAfterItems.length > 0 && (
          <div className="mt-16">
            <Eyebrow>Avant / Après</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-3xl leading-tight lg:text-4xl">
              Découvrez la transformation du projet.
            </h2>
            <div className="mt-8 grid gap-8">
              {beforeAfterItems.map((item, index) => (
                <BeforeAfterSlider
                  key={`${item.beforeImage}-${item.afterImage}-${index}`}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeLabel={item.beforeLabel ?? "Avant"}
                  afterLabel={item.afterLabel ?? "Après"}
                  beforeAlt={item.beforeAlt}
                  afterAlt={item.afterAlt}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2">
          {r.images.length > 0 ? (
            r.images.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full bg-background object-cover"
              />
            ))
          ) : (
            <div className="flex aspect-[4/3] items-center justify-center bg-background text-center text-xs uppercase tracking-[0.18em] text-muted-foreground sm:col-span-2">
              Photos du chantier à ajouter
            </div>
          )}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Prestations</Eyebrow>
            <h2 className="mt-5 text-3xl leading-tight lg:text-4xl">
              Interventions réalisées sur ce chantier
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-line border-y border-line">
              {r.prestations.map((p) => (
                <li key={p} className="py-4 text-[15px] text-ink-soft">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FinalCta />
    </>
  );
}
