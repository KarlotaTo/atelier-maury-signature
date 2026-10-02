/**
 * Réalisations.
 *
 * Les photos ci-dessous sont des visuels d'illustration en attendant
 * les photos des chantiers réels de l'entreprise.
 */

import verandaBalmaHero from "@/assets/realisations/veranda-balma-hero.jpeg.asset.json";
import renovationBoulocHero from "@/assets/realisations/renovation-bouloc-mur-graphique-detail.jpeg.asset.json";

export type RealisationBeforeAfter = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export type Realisation = {
  slug: string;
  title: string;
  city: string;
  type: string;
  year?: string;
  seoTitle: string;
  summary: string;
  description: string;
  prestations: string[];
  images: { src: string; alt: string }[];
  /** Renseigner un ou plusieurs duos uniquement lorsque les deux photos du même cadrage existent. */
  beforeAfter?: RealisationBeforeAfter[];
};

export const realisations: Realisation[] = [
  {
    slug: "renovation-veranda-balma",
    title: "Rénovation intérieure d’une véranda",
    city: "Balma",
    type: "Papier peint",
    seoTitle: "Rénovation véranda à Balma | Laurent Maury",
    summary:
      "Retrait de l’ancien papier peint, préparation des surfaces et pose d’un papier peint végétal dans une véranda à Balma.",
    description:
      "Une véranda renouvelée par un nouveau décor végétal, après retrait de l’ancien papier peint.",
    prestations: ["Retrait de papier peint", "Préparation des surfaces", "Pose de papier peint"],
    images: [
      {
        src: verandaBalmaHero.url,
        alt: "Véranda rénovée avec papier peint végétal à Balma",
      },
    ],
  },
  {
    slug: "renovation-peinture-interieure-bouloc",
    title: "Rénovation et peinture intérieure d’une maison",
    city: "Bouloc",
    type: "Rénovation intérieure",
    seoTitle: "Rénovation et peinture intérieure à Bouloc | Maury Laurent",
    summary:
      "Rénovation intérieure à Bouloc : mise en peinture du salon, nouvelles couleurs et pose d’un parquet naturel dans la chambre.",
    description:
      "Une rénovation intérieure pensée pièce par pièce pour redonner de la lumière à cette maison de Bouloc.",
    prestations: ["Peinture intérieure", "Mise en couleur", "Pose de parquet"],
    images: [
      {
        src: renovationBoulocHero.url,
        alt: "Mur graphique noir dans un salon rénové à Bouloc",
      },
    ],
  },
];

export const getRealisation = (slug: string) => realisations.find((r) => r.slug === slug);
