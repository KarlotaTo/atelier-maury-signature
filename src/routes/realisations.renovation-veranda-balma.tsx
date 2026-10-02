import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { Button } from "@/components/ui/button";
import hero from "@/assets/realisations/veranda-balma-hero.jpeg.asset.json";
import avant from "@/assets/realisations/veranda-balma-avant.jpeg.asset.json";
import apres from "@/assets/realisations/veranda-balma-apres.jpeg.asset.json";
import surfaces from "@/assets/realisations/veranda-balma-surfaces.jpeg.asset.json";
import { absoluteUrl, buildSeoHead, BUSINESS_ID } from "@/lib/seo";

const path = "/realisations/renovation-veranda-balma";
const title = "Rénovation intérieure d’une véranda à Balma";
const description =
  "Découvrez cette rénovation de véranda à Balma : retrait d’un ancien papier peint et pose d’un nouveau décor végétal par Laurent Maury.";

export const Route = createFileRoute("/realisations/renovation-veranda-balma")({
  head: () =>
    buildSeoHead({
      title: "Rénovation véranda à Balma | Laurent Maury",
      description,
      path,
      ogType: "article",
      breadcrumbLabel: title,
      schema: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: title,
        description,
        url: absoluteUrl(path),
        genre: "Rénovation intérieure",
        creator: { "@id": BUSINESS_ID },
        about: ["Retrait de papier peint", "Préparation des surfaces", "Pose de papier peint"],
        contentLocation: {
          "@type": "Place",
          name: "Balma",
          address: { "@type": "PostalAddress", addressLocality: "Balma", addressCountry: "FR" },
        },
      },
    }),
  component: VerandaBalmaPage,
});

const facts = [
  ["Lieu", "Balma"],
  ["Type de projet", "Rénovation intérieure d’une véranda"],
  ["Prestations", "Retrait de papier peint · Préparation des surfaces · Pose de papier peint"],
];

function TextSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-5 text-4xl leading-[1.08] lg:text-5xl">{title}</h2>
      </div>
      <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground lg:col-span-6 lg:col-start-7">
        {children}
      </div>
    </div>
  );
}

function VerandaBalmaPage() {
  return (
    <main>
      <section className="bg-background text-ink">
        <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
          <Link to="/realisations" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden="true" />
            Toutes les réalisations
          </Link>
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">Réalisation · Balma</p>
              <h1 className="mt-5 max-w-5xl text-5xl leading-[1.02] lg:text-7xl">{title}</h1>
            </div>
            <p className="text-[17px] leading-relaxed text-muted-foreground lg:col-span-4">
              À Balma, Laurent Maury est intervenu pour donner un nouveau caractère à cette véranda.
              L’ancien papier peint a été retiré afin de laisser place à un nouveau décor végétal,
              transformant l’atmosphère de cette pièce lumineuse.
            </p>
          </div>
          <img
            src={hero.url}
            alt="Véranda rénovée avec papier peint végétal à Balma"
            width={864}
            height={1920}
            fetchPriority="high"
            className="mt-12 aspect-[4/3] w-full object-cover object-[50%_40%] sm:aspect-[16/10] lg:aspect-[16/8]"
          />
        </div>
      </section>

      <section className="border-y border-line bg-sand text-ink">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-line px-5 sm:grid-cols-3 lg:px-10">
          {facts.map(([label, value]) => (
            <div key={label} className="bg-sand py-7 sm:px-6 sm:first:pl-0 sm:last:pr-0">
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent">{label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-background text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
          <TextSection eyebrow="Le projet" title="Donner une nouvelle atmosphère à la véranda">
            <p>
              Cette véranda disposait déjà d’un cadre particulièrement lumineux, mais son ancien
              papier peint avait perdu de sa fraîcheur.
            </p>
            <p>
              L’objectif était de renouveler l’ambiance de la pièce sans en modifier l’esprit :
              retirer l’ancien revêtement et créer une nouvelle atmosphère grâce à un papier peint
              végétal.
            </p>
          </TextSection>
        </div>
      </section>

      <section className="bg-sand text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
          <TextSection eyebrow="Avant / Après" title="De l’ancien papier peint à un décor végétal">
            <p>
              Le premier travail a consisté à retirer l’ancien papier peint afin de repartir sur une
              surface propre et prête à recevoir le nouveau revêtement.
            </p>
            <p>Un papier peint végétal a ensuite été posé pour renouveler complètement l’ambiance de la véranda.</p>
            <p>
              Le motif apporte une présence décorative forte tout en restant cohérent avec la
              vocation de cette pièce ouverte sur l’extérieur.
            </p>
          </TextSection>
          <BeforeAfterSlider
            className="mt-14"
            beforeImage={avant.url}
            afterImage={apres.url}
            beforeAlt="Véranda avant la pose du papier peint, ancien revêtement retiré"
            afterAlt="Pose d’un papier peint végétal dans une véranda à Balma"
          />
        </div>
      </section>

      <section className="bg-background text-ink">
        <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
          <TextSection eyebrow="Le résultat" title="Un nouveau décor pour une pièce lumineuse">
            <p>
              Le changement de revêtement suffit ici à transformer profondément la perception de la
              véranda.
            </p>
            <p>
              Le nouveau papier peint végétal apporte davantage de personnalité à la pièce et crée un
              lien naturel avec son environnement extérieur.
            </p>
          </TextSection>
          <div className="mt-14">
            <ProjectGallery
              images={[
                { src: surfaces.url, alt: "Murs de la véranda préparés après le retrait de l’ancien papier peint", width: 1920, height: 866 },
                { src: hero.url, alt: "Rénovation intérieure d’une véranda à Balma", width: 864, height: 1920 },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-sand text-ink">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-16 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow">À Balma et alentour</p>
            <h2 className="mt-5 text-4xl leading-[1.08] lg:text-5xl">Votre projet de rénovation intérieure à Balma</h2>
            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
              Cette réalisation illustre une intervention ciblée qui peut suffire à renouveler
              complètement une pièce : la préparation des surfaces, le retrait d’un ancien revêtement
              et la pose d’un nouveau papier peint permettent de donner une nouvelle identité à un
              intérieur.
            </p>
            <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
              Laurent Maury accompagne les particuliers à Balma et dans les communes voisines pour
              leurs projets de peinture intérieure, de rénovation et de décoration murale.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link to="/murs-revetements" className="link-underline text-ink">Murs & revêtements</Link>
              <Link to="/renovation-interieure" className="link-underline text-ink">Rénovation intérieure</Link>
            </div>
          </div>
          <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
            <Button asChild className="h-auto rounded-none bg-primary px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-primary-foreground shadow-none hover:bg-ink">
              <Link to="/contact" search={{ intent: "projet" }}>
                Parler de votre projet
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
