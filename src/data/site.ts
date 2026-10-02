/**
 * Informations de l'entreprise.
 * Ne pas inventer de coordonnées, chiffres, labels ou avis.
 */

import general from "@/content/general.json";
import technique from "@/content/technique.json";
import avisContent from "@/content/avis.json";
import engagementsContent from "@/content/engagements.json";
import { zones } from "@/data/zones";

export const site = {
  ...general,
  url: technique.siteUrl,
  hours: {
    ...general.hours,
    /** Jours ouvrés : 1 = lundi, 5 = vendredi */
    openWeekdays: [1, 2, 3, 4, 5] as number[],
  },
};

export const hasPhone = () => site.phone.trim().length > 0;
export const telHref = () => `tel:${site.phone.replace(/\s/g, "")}`;

/** Indique si l'entreprise est ouverte à la date donnée (heure locale du client). */
export function isOpen(date = new Date()): boolean {
  const day = date.getDay();
  const hour = date.getHours();
  return site.hours.openWeekdays.includes(day) && hour >= site.hours.openHour && hour < site.hours.closeHour;
}

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

export const communes = zones.map((z) => ({ slug: z.slug, name: z.name, main: z.main }));

/** Avis clients authentiques, issus de la fiche Google de l'entreprise. */
export const avis = avisContent.avis;

export const engagements = engagementsContent.engagements;
