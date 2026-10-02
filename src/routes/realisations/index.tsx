import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Section, Eyebrow, SectionTitle, CtaPair, FinalCta } from "@/components/site/ui";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { realisations } from "@/data/realisations";
import { zones } from "@/data/zones";
import { buildSeoHead, absoluteUrl, BUSINESS_ID } from "@/lib/seo";
import sejourBlanc from "@/assets/realisations/sejour-blanc-lumineux.jpg.asset.json";
import etagePoutres from "@/assets/realisations/etage-poutres-parquet.jpg.asset.json";
import sejourCheminee from "@/assets/realisations/sejour-cheminee-peinture.jpg.asset.json";
import murGraphique from "@/assets/realisations/renovation-bouloc-mur-graphique-fini.jpeg.asset.json";
import comblesAvant from "@/assets/realisations/combles-avant.jpg.asset.json";
import comblesApres from "@/assets/realisations/combles-apres.jpg.asset.json";
import mezzanine from "@/assets/realisations/mezzanine-charpente.jpg.asset.json";
import chambreParquet from "@/assets/realisations/renovation-bouloc-chambre-parquet.jpeg.asset.json";

const DESCRIPTION =
  "Rénovation intérieure, peinture, décoration, murs, sols et parquets : découvrez les réalisations de Maury Laurent, artisan de la rénovation à Bouloc et au nord de Toulouse.";

export const Route = createFileRoute("/realisations/")({
  head: () =>
    buildSeoHead({
      title: "Réalisations de rénovation et peinture | Maury Laurent, Bouloc",
      description: DESCRIPTION,
      path: "/realisations",
      breadcrumbLabel: "Réalisations",
      schema: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Réalisations",
        description: DESCRIPTION,
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

const linkCls = "text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent";

function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-5 text-[17px] leading-relaxed text-muted-foreground">{children}</div>;
}

function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure>
      <img src={src} alt={alt} loading="lazy" className={`w-full object-cover ${className}`} />
      <figcaption className="mt-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Page() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-line bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-16 pb-20 lg:grid-cols-12 lg:items-center lg:px-10 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-6">
            <Eyebrow>Réalisations</Eyebrow>
            <h1 className="mt-5 text-5xl leading-[1.05] lg:text-6xl">
              Des projets de rénovation réalisés avec soin, de la pièce à la maison entière
            </h1>
            <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Une chambre à rafraîchir, un séjour à éclaircir, des combles à rendre habitables ou une maison à
              reprendre du sol au plafond : depuis 1994, Maury Laurent accompagne des projets très différents, avec
              la même exigence artisanale. Peinture, décoration, murs, sols et façades, chaque chantier raconte une
              façon de travailler.
            </p>
            <div className="mt-10">
              <CtaPair />
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={sejourBlanc.url}
              alt="Séjour rénové aux murs et plafond blancs, baigné de lumière"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* INTRO — texte + photo */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Savoir-faire</Eyebrow>
            <SectionTitle>Des réalisations qui racontent un savoir-faire</SectionTitle>
            <div className="mt-8">
              <Prose>
                <p>
                  Aucun projet ne commence de la même façon. Certains clients veulent moderniser un intérieur
                  resté figé, d'autres retrouver de la luminosité ou changer complètement l'atmosphère d'une pièce.
                  Il y a des murs fatigués à remettre en état, des sols à rénover, une maison entière à transformer,
                  parfois une façade à reprendre.
                </p>
                <p>
                  Entreprise de rénovation et de second œuvre installée à Bouloc, Maury Laurent intervient en
                  peintre en bâtiment autant qu'en artisan rénovation. Pour les travaux qui relèvent de son
                  savoir-faire, vous gardez un seul interlocuteur, du premier rendez-vous à la dernière finition.
                  C'est ce qui permet de mener une rénovation intérieure cohérente, presque clé en main, sans
                  multiplier les intervenants.
                </p>
              </Prose>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Figure
              src={etagePoutres.url}
              alt="Étage rénové : poutres peintes en blanc, murs clairs et parquet en bois"
              caption="Poutres repeintes et parquet en bois à l'étage"
              className="aspect-[4/5]"
            />
          </div>
        </div>
      </Section>

      {/* RÉNOVATION INTÉRIEURE — photo + texte */}
      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <Figure
              src={sejourCheminee.url}
              alt="Séjour en cours de rénovation, murs et plafond repeints autour d'une cheminée en brique"
              caption="Séjour repeint, en fin de chantier"
              className="aspect-[16/9]"
            />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6">
            <Eyebrow>Rénovation intérieure</Eyebrow>
            <SectionTitle>Rénover un intérieur, pièce par pièce ou de A à Z</SectionTitle>
            <div className="mt-8">
              <Prose>
                <p>
                  Certaines interventions sont ciblées : repeindre un séjour, reprendre des plafonds, changer les
                  couleurs d'une chambre. D'autres s'inscrivent dans une rénovation intérieure plus globale, où la
                  préparation des murs, le placo, l'isolation, les revêtements muraux et les sols s'enchaînent dans
                  un ordre précis.
                </p>
                <p>
                  Dans les deux cas, la méthode est la même : protéger, préparer, puis finir proprement. Une
                  rénovation pièce par pièce permet de vivre dans la maison pendant les travaux ; une rénovation de
                  maison complète demande une coordination plus fine. Découvrez notre approche de la{" "}
                  <Link to="/renovation-interieure" className={linkCls}>rénovation intérieure</Link>.
                </p>
              </Prose>
            </div>
          </div>
        </div>
      </Section>

      {/* PEINTURE & DÉCORATION — texte + grande image */}
      <Section>
        <div className="max-w-3xl">
          <Eyebrow>Peinture & décoration</Eyebrow>
          <SectionTitle>De la peinture classique aux finitions décoratives</SectionTitle>
          <div className="mt-8">
            <Prose>
              <p>
                Une peinture intérieure réussie se joue avant le premier coup de rouleau. Lessivage, rebouchage,
                ponçage, sous-couche : la préparation des supports conditionne la tenue et l'aspect final, sur les
                murs comme sur les boiseries.
              </p>
              <p>
                Vient ensuite la mise en couleur. Un mur graphique sombre peut structurer une pièce haute de
                plafond, une peinture à la chaux ou un enduit décoratif apporte de la matière, des effets et des
                textures qu'une peinture lisse ne donne pas. L'artisan peintre conseille, teste, puis applique.
                Tout le détail est sur la page{" "}
                <Link to="/peinture-decoration" className={linkCls}>Peinture & décoration</Link>.
              </p>
            </Prose>
          </div>
        </div>
        <div className="mt-14">
          <Figure
            src={murGraphique.url}
            alt="Mur graphique noir sur toute la hauteur d'un séjour à Bouloc"
            caption="Mur graphique noir, réalisation à Bouloc"
            className="aspect-[4/3] lg:aspect-[16/9]"
          />
        </div>
      </Section>

      {/* COMBLES — avant / après */}
      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>Avant / après</Eyebrow>
          <SectionTitle>Une transformation visible au premier regard</SectionTitle>
          <div className="mt-8">
            <Prose>
              <p>
                Ces combles ont été photographiés à deux étapes du chantier. Faites glisser le curseur pour passer
                de l'un à l'autre.
              </p>
            </Prose>
          </div>
        </div>
        <div className="mt-12">
          <BeforeAfterSlider
            beforeImage={comblesAvant.url}
            afterImage={comblesApres.url}
            beforeLabel="Avant"
            afterLabel="Après"
            beforeAlt="Combles en cours de travaux : plaques de plâtre jointées, isolant et parpaings apparents"
            afterAlt="Combles terminés : murs et rampants blancs autour de la fenêtre"
            frameClassName="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[20/9]"
          />
        </div>
      </Section>

      {/* SOLS, PARQUETS, REVÊTEMENTS — texte + photo */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Murs & sols</Eyebrow>
            <SectionTitle>Les détails qui transforment un intérieur</SectionTitle>
            <div className="mt-8">
              <Prose>
                <p>
                  Un parquet bien posé ou bien rénové change la perception d'une pièce entière. Pose de parquet
                  massif, motifs comme le point de Hongrie, rénovation de parquet ancien : le sol mérite la même
                  attention que les murs. Voir la page{" "}
                  <Link to="/sols-parquets" className={linkCls}>Sols & parquets</Link>.
                </p>
                <p>
                  Côté murs, le détapissage, la pose de papier peint, les revêtements muraux et les enduits
                  demandent eux aussi des supports sains. C'est ce travail qui a été mené dans une véranda à Balma,
                  avec un papier peint végétal. Plus de détails sur{" "}
                  <Link to="/murs-revetements" className={linkCls}>Murs & revêtements</Link>.
                </p>
              </Prose>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <Figure
              src={chambreParquet.url}
              alt="Chambre aux murs orange avec parquet neuf, à Bouloc"
              caption="Parquet posé, Bouloc"
              className="aspect-[3/4]"
            />
            <Figure
              src={mezzanine.url}
              alt="Mezzanine aux murs blancs, charpente apparente en bois et garde-corps"
              caption="Charpente et murs blancs"
              className="aspect-[3/4]"
            />
          </div>
        </div>
      </Section>

      {/* FAÇADES */}
      <Section tone="sand">
        <div className="max-w-3xl">
          <Eyebrow>Extérieur</Eyebrow>
          <SectionTitle>Des projets intérieurs jusqu'aux façades</SectionTitle>
          <div className="mt-8">
            <Prose>
              <p>
                Le savoir-faire ne s'arrête pas à la porte d'entrée. Peinture de façade, ravalement, traitement des
                fissures, boiseries extérieures et clôtures : les travaux extérieurs protègent la maison autant
                qu'ils l'embellissent. Découvrez la page{" "}
                <Link to="/facades-exterieur" className={linkCls}>Façades & extérieur</Link>, ainsi que{" "}
                <Link to="/entretien-bati" className={linkCls}>Entretien & bâti</Link> pour les interventions
                plus ponctuelles.
              </p>
            </Prose>
          </div>
        </div>
      </Section>

      {/* ZONES */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>Secteur</Eyebrow>
            <SectionTitle>Des réalisations à Bouloc et dans le nord de Toulouse</SectionTitle>
            <div className="mt-8">
              <Prose>
                <p>
                  Bouloc est le siège de l'entreprise et son territoire historique. La plupart des projets de
                  rénovation, de peinture et de second œuvre se déroulent dans un rayon proche : Fronton au nord,
                  Castelginest, Aucamville et L'Union vers Toulouse, Grenade et Blagnac à l'ouest.
                </p>
              </Prose>
            </div>
          </div>
          <ul className="grid content-start gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-6">
            {zones.map((z) => (
              <li key={z.slug} className="bg-background">
                <Link
                  to="/zones-intervention/$commune"
                  params={{ commune: z.slug }}
                  className="flex items-center justify-between p-6 transition-colors hover:bg-sand"
                >
                  <span className="text-xl">{z.name}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-accent">
                    {z.slug === "bouloc" ? "Siège" : "Voir →"}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* PAGES FILLES */}
      <Section tone="sand">
        <Eyebrow>Chantiers</Eyebrow>
        <SectionTitle>Explorer les réalisations</SectionTitle>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {realisations.map((r) => (
            <article key={r.slug} className="flex flex-col bg-background">
              <img
                src={r.images[0]!.src}
                alt={r.images[0]!.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-8 lg:p-10">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">{r.type}</p>
                <h3 className="mt-3 text-2xl leading-snug">{r.title}</h3>
                <p className="mt-1 text-sm font-medium text-ink">{r.city}</p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">{r.summary}</p>
                <Link
                  to="/realisations/$slug"
                  params={{ slug: r.slug }}
                  className="mt-8 inline-flex self-start border border-primary px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Voir la réalisation
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <FinalCta
        title="Vous avez un projet similaire ?"
        text="Une pièce à rénover, une maison entière, des travaux de peinture, un nouveau revêtement, un parquet, une façade ou un projet plus global : présentez-nous votre projet, nous venons voir et vous remettons un devis détaillé."
      />
    </>
  );
}
