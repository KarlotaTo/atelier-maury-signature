import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import heroImg from "@/assets/hero-interieur.jpg";
import peintureImg from "@/assets/peinture-decorative.jpg";
import renovationImg from "@/assets/renovation.jpg";
import parquetImg from "@/assets/parquet.jpg";
import atelierImg from "@/assets/atelier.jpg";
import mursImg from "@/assets/murs-enduits.jpg";
import facadeImg from "@/assets/facade.jpg";
import entretienImg from "@/assets/entretien-bati.jpg";
import { Section, Eyebrow, SectionTitle, Lead, CtaPair, FinalCta } from "@/components/site/ui";
import { site, communes, engagements, avis, hasPhone, telHref } from "@/data/site";
import { realisations } from "@/data/realisations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Maury Laurent — Peinture, décoration et rénovation à Bouloc (31)",
      },
      {
        name: "description",
        content:
          "Entreprise familiale depuis 1994 à Bouloc : peinture intérieure et décorative, rénovation intérieure, parquets et ravalement. Devis détaillé, interlocuteur unique.",
      },
      {
        property: "og:title",
        content: "Maury Laurent — Peinture, décoration et rénovation à Bouloc",
      },
      {
        property: "og:description",
        content:
          "Quatre générations d'artisans. Peinture, décoration et rénovation intérieure autour de Bouloc, Fronton, Aucamville, Blagnac et Grenade.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomeAndConstructionBusiness",
          name: "Maury Laurent",
          description:
            "Entreprise familiale de peinture, décoration et rénovation à Bouloc depuis 1994.",
          foundingDate: "1994",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bouloc",
            addressRegion: "Occitanie",
            postalCode: "31620",
            addressCountry: "FR",
          },
          areaServed: ["Bouloc", "Fronton", "Aucamville", "Blagnac", "Grenade"],
          knowsAbout: [
            "Peinture intérieure",
            "Peinture décorative",
            "Rénovation intérieure",
            "Parquet",
            "Ravalement de façade",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const expertises = [
  {
    to: "/peinture-decoration",
    label: "Peinture & décoration",
    text: "Peinture, effets, textures, chaux, teintes.",
    img: peintureImg,
    alt: "Application d'un enduit à la chaux au spalter sur un mur intérieur",
  },
  {
    to: "/sols-parquets",
    label: "Sols & parquets",
    text: "Parquet, parquet massif, revêtements de sols.",
    img: parquetImg,
    alt: "Parquet en chêne massif rénové posé en point de Hongrie",
  },
  {
    to: "/murs-revetements",
    label: "Murs & revêtements",
    text: "Enduits, murs, placo, isolation.",
    img: mursImg,
    alt: "Mur intérieur enduit et poncé avant mise en peinture",
  },
  {
    to: "/renovation-interieure",
    label: "Rénovation intérieure",
    text: "Aménagement, cuisines, salles de bains, cloisons.",
    img: renovationImg,
    alt: "Chantier de rénovation intérieure avec sols protégés et cloisons neuves",
  },
  {
    to: "/facades-exterieur",
    label: "Façades & extérieur",
    text: "Ravalement, fissures, peinture extérieure.",
    img: facadeImg,
    alt: "Façade de maison en cours de ravalement",
  },
  {
    to: "/entretien-bati",
    label: "Entretien & bâti",
    text: "Toiture, démoussage, clôtures.",
    img: entretienImg,
    alt: "Entretien extérieur d'une maison : toiture et clôture",
  },
] as const;

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 lg:px-10 lg:pt-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="fade-up lg:col-span-6">
              <Eyebrow>Bouloc · Haute-Garonne · depuis {site.since}</Eyebrow>
              <h1 className="mt-6 text-[3.25rem] leading-[0.98] tracking-tight lg:text-[5.5rem]">
                L'art de rénover,
                <br />
                <span className="italic text-accent">transmis</span> depuis
                <br />
                quatre générations
              </h1>
            </div>
            <div className="lg:col-span-6 lg:pb-3">
              <p className="max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                Entreprise familiale de peinture, décoration et rénovation. Laurent Maury et son
                fils accompagnent des projets intérieurs complets, de l'étude des couleurs à la
                réception du chantier, avec un seul interlocuteur du début à la fin.
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
            src={heroImg}
            alt="Séjour rénové avec mur peint en bleu nuit, murs clairs et parquet en chêne"
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
            <Eyebrow>Notre approche</Eyebrow>
            <SectionTitle>
              Un travail de finition, pas un simple coup de peinture
            </SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              La qualité d'un intérieur tient à ce qui ne se voit pas : la préparation des supports,
              le choix des produits, la précision des raccords. Nous prenons le temps nécessaire à
              chaque étape, sur des chantiers menés par une équipe restreinte et stable.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Cette exigence s'applique aussi bien à une pièce à rafraîchir qu'à la rénovation
              complète d'une maison. Vous échangez avec la personne qui réalise et suit les
              travaux.
            </p>
          </div>
        </div>
      </Section>

      {/* EXPERTISES */}
      <Section tone="sand">
        <Eyebrow>Savoir-faire</Eyebrow>
        <SectionTitle>Six expertises, un même niveau d'exigence</SectionTitle>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {expertises.map((e) => (
            <Link key={e.to} to={e.to} className="group block">
              <div className="overflow-hidden">
                <img
                  src={e.img}
                  alt={e.alt}
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
            <p className="eyebrow text-primary-foreground/60">Rénovation globale</p>
            <h2 className="mt-5 text-4xl leading-[1.06] lg:text-6xl">
              Une rénovation de A à Z,
              <br />
              un seul interlocuteur
            </h2>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-primary-foreground/70">
              Peinture, cloisons, sols, coordination des corps de métier complémentaires :
              votre projet avance sans que vous ayez à multiplier les contacts, ni à arbitrer entre
              des intervenants qui ne se parlent pas.
            </p>
            <ul className="mt-10 space-y-4 border-t border-white/15 pt-8 text-[15px] text-primary-foreground/80">
              {[
                "Visite sur place et compréhension du projet",
                "Devis détaillé poste par poste",
                "Planning annoncé avant démarrage",
                "Suivi de chantier par un référent unique",
                "Réception des travaux et points de reprise",
              ].map((s, i) => (
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
                Découvrir la rénovation intérieure
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={atelierImg}
              alt="Outils d'artisan peintre : brosses, couteaux et nuancier sur un établi"
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
            <Eyebrow>Réalisations</Eyebrow>
            <SectionTitle>Chantiers sélectionnés</SectionTitle>
          </div>
          <Link
            to="/realisations"
            className="link-underline text-sm uppercase tracking-[0.18em] text-ink"
          >
            Toutes les réalisations
          </Link>
        </div>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
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
            <Eyebrow>L'entreprise</Eyebrow>
            <SectionTitle>Une histoire de famille</SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              L'entreprise a été créée en 1994 par Laurent Maury, quatrième génération d'artisans.
              Le métier s'y transmet par la pratique : les gestes, l'exigence de finition et la
              relation directe avec les clients.
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Aujourd'hui, Laurent travaille avec son fils. Deux regards, deux générations, une
              même manière de mener un chantier.
            </p>
            <Link
              to="/entreprise"
              className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em] text-ink"
            >
              Notre histoire
            </Link>
          </div>
        </div>
      </Section>

      {/* ENGAGEMENTS */}
      <Section>
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

      {/* AVIS */}
      <Section tone="sand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Avis clients</Eyebrow>
            <SectionTitle>La parole de nos clients</SectionTitle>
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Avis Google · 5/5
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
            <Eyebrow>Zones d'intervention</Eyebrow>
            <SectionTitle>Autour de Bouloc, au nord de Toulouse</SectionTitle>
            <Link
              to="/zones-intervention"
              className="link-underline mt-8 inline-block text-sm uppercase tracking-[0.18em] text-ink"
            >
              Voir toutes les communes
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

      <FinalCta />
    </>
  );
}
