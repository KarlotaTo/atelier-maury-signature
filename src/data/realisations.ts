/**
 * Réalisations.
 *
 * Les photos ci-dessous sont des visuels d'illustration en attendant
 * les photos des chantiers réels de l'entreprise.
 */


export type RealisationBeforeAfter = {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export type Realisation = {
  order: number;
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

/** Contenu éditable dans le CMS : un fichier JSON par réalisation dans src/content/realisations. */
const files = import.meta.glob<Realisation>("../content/realisations/*.json", { eager: true, import: "default" });

export const realisations: Realisation[] = Object.values(files).sort((a, b) => a.order - b.order);

export const getRealisation = (slug: string) => realisations.find((r) => r.slug === slug);
