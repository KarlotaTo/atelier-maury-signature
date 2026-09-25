/**
 * Réalisations.
 *
 * Les photos ci-dessous sont des visuels d'illustration en attendant
 * les photos des chantiers réels de l'entreprise.
 */

import realRenovation from "@/assets/real-renovation.jpg";
import realChaux from "@/assets/real-chaux.jpg";
import realFacade from "@/assets/real-facade.jpg";
import beforeSalon from "@/assets/before-salon.jpg";
import afterSalon from "@/assets/after-salon.jpg";
import beforeFacade from "@/assets/before-facade.jpg";
import afterFacade from "@/assets/after-facade.jpg";

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
    slug: "renovation-maison-familiale",
    title: "Rénovation complète d'une maison familiale",
    city: "Bouloc",
    type: "Rénovation intérieure",
    seoTitle: "Rénovation d"une maison familiale à Bouloc | Maury Laurent",
    summary: "Avant/après : rénovation complète des pièces de vie d"une maison à Bouloc. Cloisons, peinture, parquet et un mur bleu profond qui sublime les poutres.",
    description: "Comment moderniser une maison sans lui faire perdre sa mémoire ? Dans cette maison familiale de Bouloc, les pièces de vie ont été entièrement reprises : préparation des supports, nouveaux cloisonnements, peinture des murs et plafonds, pose d'un parquet et finitions soignées. Plutôt qu'un blanc qui aurait isolé les poutres d'origine, nous avons choisi un mur d'accent bleu profond : sa froideur fait ressortir la chaleur du bois et donne au séjour un vrai centre de gravité.",
    prestations: [
      "Préparation des supports",
      "Cloisons et plafonds",
      "Peinture intérieure",
      "Revêtements de sols",
    ],
    beforeAfter: [
      {
        beforeImage: beforeSalon,
        afterImage: afterSalon,
        beforeAlt: "Séjour avant rénovation, murs abîmés et parquet usé",
        afterAlt: "Séjour rénové avec mur bleu profond, poutres blanchies et parquet clair",
      },
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
    seoTitle: "Enduit à la chaux à Fronton | Maury Laurent",
    summary: 'Réalisation à Fronton : un enduit à la chaux travaillé à la main dans une chambre. Texture nuagée, teintes chaudes et finitions au détail près.',
    description: "À quoi ressemble un mur qui respire ? Dans cette chambre à Fronton, nous avons posé un enduit à la chaux en plusieurs passes, après une préparation soignée du support, puis travaillé la texture à la main pour un rendu nuagé aux teintes chaudes, comme la lumière du soir sur les vignes. Matière vivante, la chaux change avec les heures. Les finitions ont été reprises au détail près autour des menuiseries et des appliques.",
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
    seoTitle: "Ravalement de façade à Grenade (31) | Maury Laurent",
    summary: "Avant/après : ravalement d'une maison de village à Grenade. Fissures traitées, finition ton pierre, encadrements en pierre et volets repeints.",
    description: "Comment rendre sa dignité à une façade sans lui retirer son âge ? Sur cette maison de village de Grenade, bastide du XIIIᵉ siècle, tout a commencé par le diagnostic des supports et de l'origine des fissures. Ont suivi le traitement des fissures, le nettoyage, une finition ton pierre accordée au bâti voisin et la reprise des encadrements en pierre apparente. Les volets ont été repeints dans la foulée : la maison n'a pas l'air neuve, elle a l'air entretenue.",
    prestations: [
      "Diagnostic des supports",
      "Traitement des fissures",
      "Nettoyage",
      "Peinture extérieure",
    ],
    beforeAfter: [
      {
        beforeImage: beforeFacade,
        afterImage: afterFacade,
        beforeAlt: "Façade de maison avant ravalement, enduit fissuré et volets vieillis",
        afterAlt: "Façade de maison après ravalement, enduit crème et volets neufs",
      },
    ],
    images: [
      {
        src: realFacade,
        alt: "Façade de maison de village ravalée, enduit crème et entourages en pierre",
      },
    ],
  },
];

export const getRealisation = (slug: string) => realisations.find((r) => r.slug === slug);
