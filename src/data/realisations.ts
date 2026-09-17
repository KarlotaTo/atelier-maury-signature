/**
 * Réalisations.
 *
 * Les photos ci-dessous sont des visuels d'illustration en attendant
 * les photos des chantiers réels de l'entreprise.
 */

import realRenovation from "@/assets/real-renovation.jpg";
import realChaux from "@/assets/real-chaux.jpg";
import realFacade from "@/assets/real-facade.jpg";

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
  summary: string;
  description: string;
  prestations: string[];
  images: { src: string; alt: string }[];
  /** Renseigner un ou plusieurs duos uniquement lorsque les deux photos du même cadrage existent. */
  beforeAfter?: RealisationBeforeAfter[];
};

export const realisations: Realisation[] = [
  {
    slug: "renovation-maison-familiale",
    title: "Rénovation complète d'une maison familiale",
    city: "Bouloc",
    type: "Rénovation intérieure",
    summary:
      "Reprise complète des pièces de vie : préparation des supports, peinture, parquet et finitions.",
    description:
      "Rénovation des pièces de vie d'une maison familiale : reprise des supports, cloisonnement, peinture des murs et plafonds, pose d'un parquet et finitions soignées. Le mur d'accent en bleu profond structure le séjour et dialogue avec les poutres d'origine.",
    prestations: [
      "Préparation des supports",
      "Cloisons et plafonds",
      "Peinture intérieure",
      "Revêtements de sols",
    ],
    images: [
      {
        src: realRenovation,
        alt: "Séjour rénové avec mur d'accent bleu profond, poutres apparentes et parquet clair",
      },
    ],
  },
  {
    slug: "enduits-chaux-chambre",
    title: "Peinture décorative et enduits à la chaux",
    city: "Fronton",
    type: "Peinture & décoration",
    summary:
      "Enduit à la chaux travaillé à la main dans une chambre : texture nuagée et teintes chaudes.",
    description:
      "Réalisation d'un enduit à la chaux dans une chambre : préparation du support, application en plusieurs passes et travail de la texture pour un rendu nuagé aux teintes chaudes. Les finitions sont reprises au détail près autour des menuiseries et des appliques.",
    prestations: ["Conseil couleurs", "Enduits à la chaux", "Effets et textures", "Finitions"],
    images: [
      {
        src: realChaux,
        alt: "Mur de chambre en enduit à la chaux aux teintes terracotta et sable",
      },
    ],
  },
  {
    slug: "ravalement-facade",
    title: "Ravalement de façade",
    city: "Grenade",
    type: "Façades & extérieur",
    summary:
      "Ravalement d'une façade en pierre : traitement des fissures, enduit de finition et reprise des entourages.",
    description:
      "Ravalement complet d'une façade de maison de village : diagnostic des supports, traitement des fissures, nettoyage, application d'un système de finition ton pierre et reprise des entourages en pierre apparente. Les volets ont été repeints dans la foulée.",
    prestations: [
      "Diagnostic des supports",
      "Traitement des fissures",
      "Nettoyage",
      "Peinture extérieure",
    ],
    images: [
      {
        src: realFacade,
        alt: "Façade de maison de village ravalée, enduit crème et entourages en pierre",
      },
    ],
  },
];

export const getRealisation = (slug: string) => realisations.find((r) => r.slug === slug);
