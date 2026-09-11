/**
 * Informations de l'entreprise.
 * Ne pas inventer de coordonnées, chiffres, labels ou avis.
 */

export const site = {
  name: "Maury Laurent",
  baseline: "Peinture, décoration et rénovation",
  city: "Bouloc",
  since: 1994,
  phone: "06 03 06 87 50",
  email: "maury.laurent60@gmail.com",
  address: "Bouloc, Haute-Garonne (31)",
};

export const hasPhone = () => site.phone.trim().length > 0;
export const telHref = () => `tel:${site.phone.replace(/\s/g, "")}`;

export const expertises = [
  { to: "/peinture-decoration", label: "Peinture & décoration" },
  { to: "/sols-parquets", label: "Sols & parquets" },
  { to: "/murs-revetements", label: "Murs & revêtements" },
  { to: "/renovation-interieure", label: "Rénovation intérieure" },
  { to: "/facades-exterieur", label: "Façades & extérieur" },
  { to: "/entretien-bati", label: "Entretien & bâti" },
] as const;

export const nav = [
  { to: "/realisations", label: "Réalisations" },
  { to: "/entreprise", label: "L'entreprise" },
  { to: "/zones-intervention", label: "Zones d'intervention" },
] as const;

export const communes = [
  { slug: "bouloc", name: "Bouloc", main: true },
  { slug: "fronton", name: "Fronton", main: false },
  { slug: "castelginest", name: "Castelginest", main: false },
  { slug: "aucamville", name: "Aucamville", main: false },
  { slug: "l-union", name: "L'Union", main: false },
  { slug: "grenade", name: "Grenade", main: false },
  { slug: "blagnac", name: "Blagnac", main: false },
];

export const engagements = [
  {
    title: "Un interlocuteur unique",
    text: "Laurent suit personnellement chaque chantier, de la première visite à la réception des travaux. Un seul contact, une seule responsabilité.",
  },
  {
    title: "Préparation des supports",
    text: "La qualité d'une finition se joue avant la peinture : rebouchage, ponçage, traitement des fissures, impression adaptée au support.",
  },
  {
    title: "Chantier propre",
    text: "Protection des sols et du mobilier, rangement quotidien, remise en état en fin de chantier. Les logements habités restent vivables.",
  },
  {
    title: "Devis détaillé",
    text: "Chaque poste est chiffré ligne par ligne : surfaces, préparation, produits, finitions. Aucun montant global sans explication.",
  },
  {
    title: "Respect des délais",
    text: "Un planning est annoncé avant le démarrage et tenu. En cas d'aléa, vous êtes prévenu immédiatement.",
  },
  {
    title: "Suivi après travaux",
    text: "Un point est fait à la réception, et l'entreprise reste joignable ensuite pour toute reprise ou question.",
  },
];
