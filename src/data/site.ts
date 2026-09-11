/**
 * Informations de l'entreprise.
 * Les valeurs marquées TODO sont des placeholders à compléter par le client.
 * Ne pas inventer de coordonnées, chiffres, labels ou avis.
 */

export const site = {
  name: "Maury Laurent",
  baseline: "Peinture, décoration et rénovation",
  city: "Bouloc",
  since: 1994,
  // TODO client : renseigner le numéro de téléphone réel
  phone: "",
  // TODO client : renseigner l'adresse email réelle
  email: "",
  // TODO client : renseigner l'adresse postale réelle
  address: "Bouloc, Haute-Garonne (31)",
};

export const hasPhone = () => site.phone.trim().length > 0;
export const telHref = () => `tel:${site.phone.replace(/\s/g, "")}`;

export const nav = [
  { to: "/peinture-decoration", label: "Peinture & décoration" },
  { to: "/renovation-interieure", label: "Rénovation intérieure" },
  { to: "/sols-revetements", label: "Sols & revêtements" },
  { to: "/facades-exterieur", label: "Façades & extérieur" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/entreprise", label: "L'entreprise" },
  { to: "/zones-intervention", label: "Zones d'intervention" },
] as const;

export const communes = [
  {
    slug: "bouloc",
    name: "Bouloc",
    main: true,
    text: "Secteur principal. Siège de l'entreprise : interventions quotidiennes sur la commune et les hameaux alentour, avec des délais de déplacement très courts.",
  },
  {
    slug: "fronton",
    name: "Fronton",
    main: false,
    text: "Maisons de vignoble, bâtis anciens et constructions récentes : peinture intérieure, rénovation et ravalement.",
  },
  {
    slug: "castelginest",
    name: "Castelginest",
    main: false,
    text: "Pavillons et maisons familiales : peinture intérieure, sols et reprises de finition avant emménagement.",
  },
  {
    slug: "aucamville",
    name: "Aucamville",
    main: false,
    text: "Appartements et maisons de ville : rafraîchissement complet, préparation soignée des supports, chantiers habités.",
  },
  {
    slug: "l-union",
    name: "L'Union",
    main: false,
    text: "Peinture et rénovation intérieure sur des logements récents comme anciens, avec des interventions planifiées sans délai de déplacement.",
  },
  {
    slug: "grenade",
    name: "Grenade",
    main: false,
    text: "Rénovation de bâtis anciens, enduits à la chaux, parquets et façades.",
  },
  {
    slug: "blagnac",
    name: "Blagnac",
    main: false,
    text: "Rénovation intérieure, peinture décorative et home staging avant mise en vente ou en location.",
  },
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
