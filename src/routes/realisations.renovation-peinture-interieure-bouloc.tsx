import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectGallery } from "@/components/site/ProjectGallery";
import { Button } from "@/components/ui/button";
import salonHero from "@/assets/realisations/renovation-bouloc-salon-lumineux.jpeg.asset.json";
import salonEchafaudage from "@/assets/realisations/renovation-bouloc-salon-echafaudage.jpeg.asset.json";
import murGraphiqueChantier from "@/assets/realisations/renovation-bouloc-mur-graphique-chantier.jpeg.asset.json";
import murGraphiqueFini from "@/assets/realisations/renovation-bouloc-mur-graphique-fini.jpeg.asset.json";
import murGraphiqueDetail from "@/assets/realisations/renovation-bouloc-mur-graphique-detail.jpeg.asset.json";
import chambreSolPrepare from "@/assets/realisations/renovation-bouloc-chambre-sol-prepare.jpeg.asset.json";
import chambreParquet from "@/assets/realisations/renovation-bouloc-chambre-parquet.jpeg.asset.json";
import { absoluteUrl, buildSeoHead, BUSINESS_ID } from "@/lib/seo";

const path = "/realisations/renovation-peinture-interieure-bouloc";
const title = "Rénovation et peinture intérieure d’une maison à Bouloc";
const description =
  "Découvrez la rénovation et la peinture intérieure d’une maison à Bouloc : salon lumineux, mur graphique et chambre rénovée avec parquet naturel.";

export const Route = createFileRoute("/realisations/renovation-peinture-interieure-bouloc")({
  head: () =>
    buildSeoHead({
      title: "Rénovation et peinture intérieure à Bouloc | Maury Laurent",
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
        about: ["Peinture intérieure", "Mise en couleur", "Pose de parquet", "Papier peint"],
        contentLocation: {
          "@type": "Place",
          name: "Bouloc",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bouloc",
            addressCountry: "FR",
          },
        },
      },
    }),
  component: RenovationBoulocPage,
});

const facts = [
  ["Lieu", "Bouloc"],
  ["Type de projet", "Rénovation intérieure"],
  ["Prestations", "Peinture intérieure · Mise en couleur · Pose de parquet · Papier peint"],
];

function TextSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
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

function RenovationBoulocPage() {
  return (
    <>
      <main>
        <section className="bg-background text-ink">
          <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-10 lg:px-10 lg:pb-16 lg:pt-14">
            <Link
              to="/realisations"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Toutes les réalisations
            </Link>

            <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="eyebrow">Réalisation · Bouloc</p>
                <h1 className="mt-5 max-w-5xl text-5xl leading-[1.02] lg:text-7xl">{title}</h1>
              </div>
              <p className="text-[17px] leading-relaxed text-muted-foreground lg:col-span-4">
                Isabelle souhaitait redonner de la lumière et de la fraîcheur à son intérieur. Les
                anciennes peintures étaient devenues ternes et plusieurs pièces ont été repensées
                avec de nouvelles couleurs, des finitions plus contemporaines et un travail de
                rénovation adapté à chaque espace.
              </p>
            </div>

            <img
              src={salonHero.url}
              alt="Salon rénové et repeint en blanc à Bouloc"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="mt-12 aspect-[4/3] w-full object-cover sm:aspect-[16/10] lg:aspect-[16/8]"
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
            <TextSection eyebrow="Le salon" title="Un salon plus lumineux avec une touche graphique">
              <p>
                Dans le salon, l'objectif principal était de gagner en luminosité. Les murs ont donc
                été repeints essentiellement en blanc.
              </p>
              <p>
                Pour apporter une touche d'originalité, le mur situé derrière la télévision a été
                travaillé avec une forme graphique noire : un rectangle qui se termine en pointe.
                Cette teinte sombre rappelle certains meubles de la pièce et crée un contraste
                élégant avec les murs blancs.
              </p>
              <p>
                La hauteur importante du salon représentait le principal défi technique. Après la
                mise en protection du sol et des meubles, un échafaudage a été installé afin de
                permettre les travaux en hauteur dans de bonnes conditions.
              </p>
            </TextSection>

            <div className="mt-14 grid gap-5 lg:grid-cols-12">
              <img
                src={salonEchafaudage.url}
                alt="Échafaudage installé pour les travaux de peinture en hauteur dans le salon"
                width={1200}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover lg:col-span-5"
              />
              <img
                src={murGraphiqueChantier.url}
                alt="Mur graphique noir en cours de réalisation dans le salon"
                width={1200}
                height={1600}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover lg:col-span-7"
              />
            </div>
          </div>
        </section>

        <section className="bg-sand text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <TextSection eyebrow="Entrée & couloir" title="Une entrée et un couloir modernisés">
              <p>
                L'entrée et le couloir présentaient une décoration devenue vieillissante, notamment
                avec leurs anciennes teintes grises.
              </p>
              <p>
                Pour transformer ces espaces sans les assombrir, le plafond a été repeint en blanc
                tandis que les murs ont reçu une teinte pastel rose poudré.
              </p>
              <p>
                Cette association apporte davantage de douceur et de lumière à ces espaces de
                circulation.
              </p>
            </TextSection>
          </div>
        </section>

        <section className="bg-background text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <TextSection eyebrow="La chambre" title="Une chambre lumineuse avec une touche de vert matcha">
              <p>
                La chambre d'Isabelle était auparavant peinte en orange. Pour apporter davantage de
                clarté et créer une atmosphère plus apaisante, trois murs ont été repeints en blanc pur.
              </p>
              <p>
                Le quatrième mur, situé derrière la tête de lit, a été réalisé dans une teinte vert
                matcha. Cette couleur apporte une touche naturelle et chaleureuse tout en structurant
                visuellement la chambre.
              </p>
              <p>
                Le sol a également été rénové : après préparation et isolation, un parquet naturel
                flottant a été posé pour compléter la transformation.
              </p>
            </TextSection>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <figure>
                <img
                  src={chambreSolPrepare.url}
                  alt="Préparation et isolation du sol avant la pose du parquet dans une chambre"
                  width={901}
                  height={1600}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Préparation et isolation du sol
                </figcaption>
              </figure>
              <figure>
                <img
                  src={chambreParquet.url}
                  alt="Pose de parquet naturel dans une chambre à Bouloc"
                  width={1170}
                  height={1546}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Parquet naturel après la pose
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="bg-sand text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <TextSection eyebrow="La véranda" title="Une véranda transformée avec un papier peint végétal">
              <p>
                Un second chantier a également été réalisé dans la maison, cette fois dans la véranda.
              </p>
              <p>
                L'ancien papier peint a été retiré afin de préparer les surfaces pour la pose d'un
                nouveau papier peint végétal.
              </p>
              <p>
                Ce choix apporte une ambiance naturelle à cette pièce lumineuse et crée un lien visuel
                avec l'extérieur.
              </p>
            </TextSection>
          </div>
        </section>

        <section className="bg-background text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <p className="eyebrow">Galerie</p>
            <h2 className="mt-5 text-4xl leading-[1.08] lg:text-5xl">La transformation en images</h2>
            <div className="mt-12">
              <ProjectGallery
                images={[
                  {
                    src: murGraphiqueFini.url,
                    alt: "Mur graphique noir terminé dans le salon rénové",
                    width: 1600,
                    height: 1200,
                  },
                  {
                    src: murGraphiqueDetail.url,
                    alt: "Détail du mur graphique noir et des murs blancs du salon",
                    width: 1200,
                    height: 1600,
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-sand text-ink">
          <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-16 lg:grid-cols-12 lg:items-center lg:px-10 lg:py-20">
            <div className="lg:col-span-8">
              <p className="eyebrow">À Bouloc et alentour</p>
              <h2 className="mt-5 text-4xl leading-[1.08] lg:text-5xl">Un projet de peinture intérieure à Bouloc ?</h2>
              <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted-foreground">
                Cette rénovation illustre l'importance d'adapter les couleurs, les matériaux et les
                techniques aux caractéristiques de chaque pièce. Laurent Maury accompagne les
                particuliers dans leurs projets de peinture intérieure et de rénovation à Bouloc et
                dans les communes alentours.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                <Link to="/peinture-decoration" className="link-underline text-ink">Peinture & décoration</Link>
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
    </>
  );
}