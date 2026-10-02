import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
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
  "Découvrez la rénovation et la peinture intérieure d’une maison à Bouloc : salon lumineux, mur graphique, entrée rose poudré et chambre rénovée avec parquet naturel.";

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
        about: ["Peinture intérieure", "Mise en couleur", "Pose de parquet"],
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
  ["Prestations", "Peinture intérieure · Mise en couleur · Pose de parquet"],
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
              <div key={label} className="bg-sand px-5 py-7 sm:px-8">
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
                Dans le salon, l’objectif était avant tout de gagner en luminosité. Les murs ont été
                repeints essentiellement en blanc, avec une touche graphique originale sur le mur
                situé derrière la télévision.
              </p>
              <p>
                Un rectangle noir se terminant en pointe vient créer un contraste avec le blanc et
                rappeler certains meubles plus sombres présents dans la pièce.
              </p>
              <p>
                La hauteur importante du salon constituait le principal défi technique. Après la
                mise en protection du sol et des meubles, un échafaudage a été installé afin de
                réaliser les travaux en hauteur.
              </p>
            </TextSection>

            <BeforeAfterSlider
              className="mt-14"
              beforeImage={murGraphiqueChantier.url}
              afterImage={murGraphiqueFini.url}
              beforeLabel="Chantier"
              afterLabel="Après"
              beforeAlt="Mur graphique noir en cours de réalisation, mobilier protégé dans le salon"
              afterAlt="Mur graphique noir dans un salon repeint en blanc à Bouloc"
            />
          </div>
        </section>

        <section className="bg-sand text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <TextSection eyebrow="Entrée & couloir" title="Une entrée et un couloir plus doux et lumineux">
              <p>
                L’entrée et le couloir, auparavant dans des tonalités grises et vieillissantes, ont
                été modernisés avec une nouvelle mise en couleur.
              </p>
              <p>
                Le plafond a été repeint en blanc tandis que les murs ont reçu une teinte pastel rose
                poudré, apportant davantage de douceur et de luminosité à cet espace.
              </p>
            </TextSection>
          </div>
        </section>

        <section className="bg-background text-ink">
          <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">
            <TextSection eyebrow="La chambre d’Isabelle" title="Une chambre lumineuse avec une touche de vert matcha">
              <p>
                La chambre d’Isabelle était auparavant peinte en orange. Pour maximiser la luminosité,
                trois murs ont été repeints en blanc pur.
              </p>
              <p>
                Le mur situé derrière la tête de lit a quant à lui été réalisé dans une teinte vert
                matcha, apportant une touche naturelle et chaleureuse à la pièce.
              </p>
              <p>
                Le sol a également été rénové avec la pose d’un parquet naturel flottant après
                préparation et isolation.
              </p>
            </TextSection>

            <BeforeAfterSlider
              className="mt-14"
              beforeImage={chambreSolPrepare.url}
              afterImage={chambreParquet.url}
              beforeLabel="Préparation"
              afterLabel="Parquet"
              beforeAlt="Préparation et isolation du sol avant la pose du parquet, mur vert matcha"
              afterAlt="Chambre rénovée avec parquet naturel flottant à Bouloc"
            />
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
                    src: salonEchafaudage.url,
                    alt: "Échafaudage installé pour les travaux de peinture en hauteur dans le salon",
                    width: 1200,
                    height: 1600,
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
              <h2 className="mt-5 text-4xl leading-[1.08] lg:text-5xl">Une rénovation pensée pièce par pièce</h2>
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