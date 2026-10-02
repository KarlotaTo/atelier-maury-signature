import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { Section, Eyebrow, SectionTitle, Lead, FinalCta } from "@/components/site/ui";
import { engagements } from "@/data/site";
import { getZone, zones, type ExpertiseKey } from "@/data/zones";
import { absoluteUrl, buildSeoHead, BUSINESS_ID } from "@/lib/seo";
import imgPeinture from "@/assets/peinture-decorative.jpg";
import imgSols from "@/assets/parquet.jpg";
import imgMurs from "@/assets/murs-enduits.jpg";
import imgRenovation from "@/assets/renovation.jpg";
import imgFacades from "@/assets/facade.jpg";
import imgEntretien from "@/assets/entretien-bati.jpg";
import salonHero from "@/assets/realisations/renovation-bouloc-salon-lumineux.jpeg.asset.json";
import murChantier from "@/assets/realisations/renovation-bouloc-mur-graphique-chantier.jpeg.asset.json";
import murFini from "@/assets/realisations/renovation-bouloc-mur-graphique-fini.jpeg.asset.json";
import chambreParquet from "@/assets/realisations/renovation-bouloc-chambre-parquet.jpeg.asset.json";

const expertiseMap: Record<ExpertiseKey, { to: string; label: string; img: string }> = {
  peinture: { to: "/peinture-decoration", label: "Peinture & décoration", img: imgPeinture },
  sols: { to: "/sols-parquets", label: "Sols & parquets", img: imgSols },
  murs: { to: "/murs-revetements", label: "Murs & revêtements", img: imgMurs },
  renovation: { to: "/renovation-interieure", label: "Rénovation intérieure", img: imgRenovation },
  facades: { to: "/facades-exterieur", label: "Façades & extérieur", img: imgFacades },
  entretien: { to: "/entretien-bati", label: "Entretien & bâti", img: imgEntretien },
};

const heroImages: Record<string, string> = {
  bouloc: salonHero.url,
  fronton: imgPeinture,
  castelginest: imgMurs,
  aucamville: imgSols,
  "l-union": imgRenovation,
  grenade: imgFacades,
  blagnac: imgRenovation,
};

const BOULOC_PROJECT = "/realisations/renovation-peinture-interieure-bouloc";

export const Route = createFileRoute("/zones-intervention/$commune")({
  loader: ({ params }) => {
    const zone = getZone(params.commune);
    if (!zone) throw notFound();
    return { slug: zone.slug };
  },
  head: ({ loaderData }) => {
    const zone = loaderData ? getZone(loaderData.slug) : undefined;
    if (!zone) return { meta: [{ title: "Commune introuvable" }, { name: "robots", content: "noindex" }] };
    const path = `/zones-intervention/${zone.slug}`;
    const head = buildSeoHead({
      title: zone.seoTitle,
      description: zone.description,
      path,
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: zone.h1,
        description: zone.description,
        url: absoluteUrl(path),
        about: { "@id": BUSINESS_ID },
        spatialCoverage: { "@type": "City", name: zone.name },
      },
    });
    head.scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Zones d’intervention", item: absoluteUrl("/zones-intervention") },
          { "@type": "ListItem", position: 3, name: zone.name, item: absoluteUrl(path) },
        ],
      }),
    });
    return head;
  },
  notFoundComponent: () => (
    <Section>
      <h1 className="text-4xl">Commune introuvable</h1>
      <Link to="/zones-intervention" className="mt-6 inline-block text-accent underline">
        Voir les zones d'intervention
      </Link>
    </Section>
  ),
  component: ZonePage,
});

const steps = [
  ["Visite et métrage", "Laurent vient sur place, écoute le projet et relève les surfaces."],
  ["Devis gratuit détaillé", "Chaque poste chiffré ligne par ligne : préparation, produits, finitions."],
  ["Planning annoncé", "Les dates sont fixées avant le démarrage, et tenues."],
  ["Suivi du chantier", "Un interlocuteur unique, présent du premier jour au dernier."],
  ["Réception des travaux", "Un point complet ensemble, puis l'entreprise reste joignable."],
];

function ZonePage() {
  const { slug } = Route.useLoaderData();
  const zone = getZone(slug)!;
  const isBouloc = zone.slug === "bouloc";

  return (
    <>
      <section className="border-b border-line bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-16 pb-20 lg:grid-cols-12 lg:px-10 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-7">
            <nav aria-label="Fil d'Ariane" className="mb-6 text-xs text-muted-foreground">
              <Link to="/zones-intervention" className="hover:text-accent">Zones d'intervention</Link>
              <span className="mx-2">/</span>
              <span>{zone.name}</span>
            </nav>
            <Eyebrow>{zone.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-5xl leading-[1.03] lg:text-7xl">{zone.h1}</h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{zone.intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex bg-accent px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-accent-foreground hover:opacity-90">
                Demander un devis
              </Link>
              <Link to="/realisations" className="inline-flex border border-primary bg-primary px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-ink">
                Voir les réalisations
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroImages[zone.slug]}
              alt={isBouloc ? "Salon lumineux rénové par Laurent Maury dans une maison de Bouloc" : `Travaux de ${(zone.eyebrow.split(" · ")[0] ?? "").toLowerCase()} par Laurent Maury`}
              fetchPriority="high"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{zone.name}</Eyebrow>
            <SectionTitle>{zone.localTitle}</SectionTitle>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            {zone.localParagraphs.map((p) => (
              <Lead key={p.slice(0, 20)}>{p}</Lead>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {zone.projects.map((p, i) => (
            <article key={p.title} className="bg-background p-8">
              <span className="text-sm text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-2xl">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Savoir-faire</Eyebrow>
        <SectionTitle>{zone.expertisesTitle}</SectionTitle>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {zone.expertises.map(({ key, text }) => {
            const e = expertiseMap[key];
            return (
              <Link key={key} to={e.to} className="group flex flex-col border border-line bg-background">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={e.img} alt={`${e.label} — savoir-faire de Laurent Maury`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl">{e.label}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-accent">
                    Découvrir <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <Eyebrow>{isBouloc ? "Réalisation à Bouloc" : "Exemple · réalisation à Bouloc"}</Eyebrow>
            <SectionTitle>{zone.showcaseTitle}</SectionTitle>
            <Lead className="mt-6">{zone.showcaseText}</Lead>
            <Link to={BOULOC_PROJECT} className="mt-8 inline-flex items-center gap-2 bg-primary px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-ink">
              Voir la réalisation <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <BeforeAfterSlider
              beforeImage={murChantier.url}
              afterImage={murFini.url}
              beforeLabel="Chantier"
              afterLabel="Après"
              beforeAlt="Salon en cours de rénovation à Bouloc, mur graphique en préparation"
              afterAlt="Salon rénové à Bouloc avec mur graphique noir"
            />
            <img src={chambreParquet.url} alt="Chambre rénovée avec parquet naturel dans une maison de Bouloc" loading="lazy" className="mt-6 aspect-[16/9] w-full object-cover" />
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <p className="eyebrow">Un seul interlocuteur</p>
        <h2 className="mt-5 max-w-3xl text-4xl leading-[1.08] lg:text-5xl">Une rénovation suivie de A à Z</h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-primary-foreground/80">
          Laurent et son fils prennent en charge une rénovation intérieure de la pièce à la maison entière à {zone.name} : peinture, placo, isolation, sols et revêtements, sans multiplier les intervenants.
        </p>
        <ol className="mt-14 grid gap-px bg-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="bg-primary p-7">
              <span className="text-sm text-primary-foreground/60">Étape {i + 1}</span>
              <h3 className="mt-3 text-xl">{t}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-primary-foreground/75">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <Eyebrow>Pourquoi Laurent Maury ?</Eyebrow>
        <SectionTitle>Les engagements de l'entreprise</SectionTitle>
        <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {engagements.map((e) => (
            <article key={e.title} className="bg-background p-8">
              <h3 className="text-2xl">{e.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{e.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-[15px] text-muted-foreground">
          En savoir plus sur <Link to="/entreprise" className="text-accent underline">l'entreprise</Link>, ses{" "}
          <Link to="/realisations" className="text-accent underline">réalisations</Link> et l'ensemble des{" "}
          <Link to="/zones-intervention" className="text-accent underline">zones d'intervention</Link>.
        </p>
      </Section>

      <Section tone="sand">
        <Eyebrow>Secteur</Eyebrow>
        <SectionTitle>Interventions dans les communes voisines</SectionTitle>
        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-3">
          {zone.neighbours.map((n) => {
            const z = zones.find((x) => x.slug === n)!;
            return (
              <Link key={n} to="/zones-intervention/$commune" params={{ commune: n }} className="group flex items-center gap-4 bg-background p-6 hover:bg-sand">
                <MapPin className="size-5 text-accent" strokeWidth={1.5} />
                <span className="text-xl">{z.h1}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[13px] uppercase tracking-[0.14em]">
          {Object.values(expertiseMap).map((e) => (
            <Link key={e.to} to={e.to} className="text-muted-foreground hover:text-accent">{e.label}</Link>
          ))}
        </div>
      </Section>

      <FinalCta
        title={`Un projet de rénovation à ${zone.name} ?`}
        text="Décrivez votre maison ou votre appartement : Laurent vous propose une visite et un devis gratuit détaillé poste par poste."
      />
    </>
  );
}
