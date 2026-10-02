/**
 * Pages locales par commune (/zones-intervention/$commune).
 * Règle : ne jamais présenter une réalisation d'une autre commune comme locale.
 * Seule réalisation locale en ligne : Bouloc (rénovation et peinture intérieure).
 */

export type ExpertiseKey =
  | "peinture"
  | "sols"
  | "murs"
  | "renovation"
  | "facades"
  | "entretien";

export type Zone = {
  order: number;
  /** Siège de l'entreprise */
  main: boolean;
  slug: string;
  name: string;
  /** Formulation « à … » */
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  hubText: string;
  localTitle: string;
  localParagraphs: string[];
  projects: { title: string; text: string }[];
  expertisesTitle: string;
  expertises: { key: ExpertiseKey; text: string }[];
  showcaseTitle: string;
  showcaseText: string;
  neighbours: string[];
};

/** Contenu éditable dans le CMS : un fichier JSON par commune dans src/content/villes. */
const files = import.meta.glob<Zone>("../content/villes/*.json", { eager: true, import: "default" });

export const zones: Zone[] = Object.values(files).sort((a, b) => a.order - b.order);

export const getZone = (slug: string) => zones.find((z) => z.slug === slug);
