/**
 * Réalisations.
 *
 * IMPORTANT : aucune réalisation réelle n'a été fournie. Les entrées ci-dessous
 * sont des FICHES MODÈLES clairement identifiées comme placeholders
 * (isPlaceholder: true). Elles servent de gabarit : il suffit d'ajouter un objet
 * à ce tableau, avec ses images, pour publier une nouvelle réalisation.
 */

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
  beforeAfter?: { before: string; after: string; alt: string };
  isPlaceholder: boolean;
};

export const realisations: Realisation[] = [
  {
    slug: "modele-renovation-complete",
    title: "Rénovation complète d'une maison familiale",
    city: "Bouloc",
    type: "Rénovation intérieure",
    year: "À compléter",
    summary:
      "Fiche modèle — remplacer par une réalisation réelle : photos, descriptif et prestations.",
    description:
      "Emplacement réservé à la description du chantier : contexte, état initial, contraintes, choix techniques et matériaux retenus, déroulé des interventions et résultat obtenu. Le texte définitif sera rédigé à partir des éléments transmis par l'entreprise.",
    prestations: [
      "Préparation des supports",
      "Cloisons et plafonds",
      "Peinture intérieure",
      "Revêtements de sols",
    ],
    images: [],
    isPlaceholder: true,
  },
  {
    slug: "modele-peinture-decorative",
    title: "Peinture décorative et enduits à la chaux",
    city: "Fronton",
    type: "Peinture & décoration",
    year: "À compléter",
    summary:
      "Fiche modèle — remplacer par une réalisation réelle : photos, descriptif et prestations.",
    description:
      "Emplacement réservé à la description du chantier : nuancier retenu, effets et textures réalisés, nombre de couches, finitions et rendu final.",
    prestations: ["Conseil couleurs", "Enduits à la chaux", "Effets et textures", "Finitions"],
    images: [],
    isPlaceholder: true,
  },
  {
    slug: "modele-facade",
    title: "Ravalement de façade",
    city: "Grenade",
    type: "Façades & extérieur",
    year: "À compléter",
    summary:
      "Fiche modèle — remplacer par une réalisation réelle : photos, descriptif et prestations.",
    description:
      "Emplacement réservé à la description du chantier : diagnostic des supports, traitement des fissures, nettoyage, système de finition appliqué et teinte retenue.",
    prestations: [
      "Diagnostic des supports",
      "Traitement des fissures",
      "Nettoyage",
      "Peinture extérieure",
    ],
    images: [],
    isPlaceholder: true,
  },
];

export const getRealisation = (slug: string) => realisations.find((r) => r.slug === slug);
