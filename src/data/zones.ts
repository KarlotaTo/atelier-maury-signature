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

export const zones: Zone[] = [
  {
    slug: "bouloc",
    name: "Bouloc",
    seoTitle: "Entreprise de rénovation à Bouloc | Peinture & second œuvre",
    description:
      "Entreprise de rénovation à Bouloc depuis 1994 : peinture, décoration, rénovation intérieure, sols et second œuvre. Laurent Maury vous accompagne de A à Z.",
    eyebrow: "Artisan rénovation · Bouloc",
    h1: "Entreprise de rénovation et peinture à Bouloc",
    intro:
      "Artisan de la rénovation à Bouloc depuis 1994, Laurent Maury rénove maisons et appartements avec son fils : peinture, décoration, sols, placo, isolation et revêtements, avec un seul interlocuteur du premier rendez-vous à la réception.",
    hubText:
      "Le siège de l'entreprise et son territoire historique : c'est ici que l'activité est née en 1994.",
    localTitle: "Bouloc, là où tout a commencé",
    localParagraphs: [
      "L'entreprise a été créée à Bouloc en 1994 et n'en est jamais partie. Elle s'inscrit dans une famille de quatre générations d'artisans ; aujourd'hui, Laurent travaille aux côtés de son fils, qui reprend les gestes et l'exigence du métier.",
      "Être installé sur place change la manière de conduire un chantier : les visites se calent facilement, les reprises se font sans délai et le suivi ne s'arrête pas le jour de la réception. Beaucoup de projets à Bouloc viennent d'ailleurs de voisins ou de clients qui ont déjà fait appel à l'entreprise.",
      "Les demandes sont variées : repeindre un intérieur devenu terne, moderniser une pièce, refaire les sols d'une chambre ou mener une rénovation clé en main sur toute une maison. Dans chaque cas, l'entreprise de second œuvre prend en charge les travaux qui relèvent de son savoir-faire et organise le chantier pièce par pièce.",
    ],
    projects: [
      { title: "Repeindre et éclaircir", text: "Murs, plafonds et boiseries remis en peinture après une vraie préparation des supports." },
      { title: "Rénover pièce par pièce", text: "Un planning qui permet de continuer à vivre dans la maison pendant les travaux." },
      { title: "Refaire les sols", text: "Préparation du support et pose de parquet pour transformer une chambre ou un séjour." },
    ],
    expertisesTitle: "Les travaux de rénovation réalisés à Bouloc",
    expertises: [
      { key: "peinture", text: "Peinture intérieure, mise en couleur et peinture décorative, de la teinte douce au mur graphique." },
      { key: "renovation", text: "Rénovation complète ou ciblée d'une maison, coordonnée de A à Z par un interlocuteur unique." },
      { key: "sols", text: "Pose et rénovation de parquet, préparation des sols avant finition." },
      { key: "murs", text: "Enduits, placo, isolation et papier peint pour des murs sains et nets." },
      { key: "facades", text: "Peinture et rénovation de façade, entretien des boiseries extérieures." },
      { key: "entretien", text: "Petites reprises et entretien du bâti pour les maisons du village." },
    ],
    showcaseTitle: "Une rénovation à Bouloc, en images",
    showcaseText:
      "Salon éclairci, mur graphique noir derrière la télévision et chambre rénovée avec un parquet naturel : un chantier mené pièce par pièce dans une maison de Bouloc.",
    neighbours: ["fronton", "castelginest", "aucamville", "grenade", "l-union", "blagnac"],
  },
  {
    slug: "fronton",
    name: "Fronton",
    seoTitle: "Peintre et rénovation à Fronton | Laurent Maury",
    description:
      "Peinture, décoration et rénovation intérieure à Fronton. Découvrez le savoir-faire de Laurent Maury, artisan de la rénovation et du second œuvre.",
    eyebrow: "Peinture & décoration · Fronton",
    h1: "Peintre et entreprise de rénovation à Fronton",
    intro:
      "Au cœur du vignoble frontonnais, les maisons de caractère comme les pavillons récents demandent des finitions soignées. Laurent Maury y réalise peinture, décoration et rénovation intérieure, avec la même exigence de préparation.",
    hubText:
      "Peinture décorative, enduits à la chaux et rénovation intérieure pour les maisons de Fronton.",
    localTitle: "Donner du caractère à une maison de Fronton",
    localParagraphs: [
      "À Fronton, beaucoup de projets partent d'une envie de matière : un enduit à la chaux dans une pièce de vie, une peinture à effet pour réchauffer un séjour, une mise en couleur qui accompagne des murs anciens plutôt que de les masquer.",
      "La chaux et les enduits décoratifs demandent un support bien préparé et un geste régulier. L'artisan peintre commence donc toujours par l'état des murs : rebouchage, traitement des fissures, ponçage, impression adaptée.",
      "Quand le projet dépasse la décoration, l'entreprise de second œuvre prend aussi en charge placo, isolation, sols et revêtements, pour rénover une pièce ou une maison sans multiplier les intervenants.",
    ],
    projects: [
      { title: "Peinture décorative", text: "Effets, textures et chaux pour donner du relief aux murs." },
      { title: "Remise en état des murs", text: "Fissures, enduits et préparation avant toute finition." },
      { title: "Rénovation intérieure", text: "Une pièce ou une maison entière, suivie par un seul interlocuteur." },
    ],
    expertisesTitle: "Les savoir-faire mobilisés à Fronton",
    expertises: [
      { key: "peinture", text: "Peinture décorative, chaux, enduits décoratifs et mise en couleur." },
      { key: "murs", text: "Enduits, placo, isolation et revêtements muraux." },
      { key: "renovation", text: "Rénovation intérieure pièce par pièce ou clé en main." },
      { key: "sols", text: "Pose et rénovation de parquet." },
    ],
    showcaseTitle: "Le savoir-faire de Laurent Maury, en images",
    showcaseText:
      "Ce chantier a été réalisé à Bouloc, tout près de Fronton : il illustre le soin apporté à la peinture intérieure, à la mise en couleur et aux sols.",
    neighbours: ["bouloc", "grenade", "castelginest"],
  },
  {
    slug: "castelginest",
    name: "Castelginest",
    seoTitle: "Peinture et rénovation intérieure à Castelginest | Laurent Maury",
    description:
      "Laurent Maury intervient à Castelginest pour vos travaux de peinture, rénovation intérieure, murs, revêtements et second œuvre.",
    eyebrow: "Rénovation intérieure · Castelginest",
    h1: "Peinture et rénovation intérieure à Castelginest",
    intro:
      "Maison familiale à rafraîchir, pièces à réaménager, murs fatigués : à Castelginest, Laurent Maury accompagne les rénovations intérieures, de la préparation des supports à la dernière couche de peinture.",
    hubText:
      "Peinture intérieure, murs et revêtements pour moderniser les maisons de Castelginest.",
    localTitle: "Moderniser une maison à Castelginest",
    localParagraphs: [
      "Les maisons de Castelginest ont souvent été construites ou agrandies en plusieurs étapes. Au fil des années, les murs se marquent, les plafonds jaunissent et les pièces ne correspondent plus à la façon dont la famille vit.",
      "Avant de choisir une couleur, il faut traiter ce qui se voit à la lumière rasante : fissures, anciens raccords, enduits irréguliers. La préparation des supports est le poste qui fait la différence sur le rendu final, et elle est chiffrée à part dans le devis.",
      "Pour une rénovation de maison plus large, l'entreprise de rénovation intérieure regroupe peinture, placo, isolation et revêtements muraux dans un même planning.",
    ],
    projects: [
      { title: "Rafraîchir un intérieur", text: "Murs, plafonds et boiseries repeints dans des tons choisis ensemble." },
      { title: "Rénover les murs", text: "Enduits, reprises de fissures, placo et papier peint." },
      { title: "Réaménager une pièce", text: "Cloisons en placo, isolation et finitions coordonnées." },
    ],
    expertisesTitle: "Vos travaux de rénovation à Castelginest",
    expertises: [
      { key: "peinture", text: "Peinture intérieure et décoration, du plafond aux boiseries." },
      { key: "murs", text: "Préparation des supports, enduits, placo, isolation et papier peint." },
      { key: "renovation", text: "Rénovation de maison pièce par pièce ou complète." },
      { key: "entretien", text: "Reprises et entretien courant du bâti." },
    ],
    showcaseTitle: "Un exemple de rénovation intérieure, à Bouloc",
    showcaseText:
      "Ce chantier n'a pas été réalisé à Castelginest mais à Bouloc. Il montre la méthode appliquée à chaque rénovation intérieure : préparation, mise en couleur, finitions.",
    neighbours: ["bouloc", "aucamville", "fronton"],
  },
  {
    slug: "aucamville",
    name: "Aucamville",
    seoTitle: "Peintre et rénovation intérieure à Aucamville | Laurent Maury",
    description:
      "Peinture intérieure et rénovation à Aucamville : murs, revêtements, sols et travaux de second œuvre réalisés par Laurent Maury.",
    eyebrow: "Murs, sols & peinture · Aucamville",
    h1: "Peintre et rénovation intérieure à Aucamville",
    intro:
      "Aux portes de Toulouse, Aucamville compte maisons et appartements qui changent souvent de propriétaires. Laurent Maury y intervient pour repeindre, changer les revêtements, refaire les sols et rénover l'intérieur avant ou après une installation.",
    hubText:
      "Revêtements, papier peint, enduits et sols pour les maisons et appartements d'Aucamville.",
    localTitle: "Changer de décor à Aucamville",
    localParagraphs: [
      "Un achat récent à Aucamville s'accompagne souvent d'une même liste : retirer d'anciens papiers peints, reprendre les murs, repeindre, et parfois refaire les sols avant d'emménager.",
      "Le détapissage et la remise en état des murs se font avant toute finition. Viennent ensuite le choix entre peinture, nouveau papier peint ou enduit, puis la pose de parquet si les sols doivent suivre.",
      "Pour un appartement comme pour une maison, ce peintre en bâtiment et artisan du second œuvre coordonne ces étapes dans un planning annoncé à l'avance.",
    ],
    projects: [
      { title: "Avant d'emménager", text: "Détapissage, préparation et peinture de l'ensemble du logement." },
      { title: "Nouveaux revêtements", text: "Papier peint, enduits et revêtements muraux." },
      { title: "Refaire les sols", text: "Pose de parquet et rénovation des sols existants." },
    ],
    expertisesTitle: "Les savoir-faire proposés à Aucamville",
    expertises: [
      { key: "murs", text: "Détapissage, enduits, papier peint, placo et isolation." },
      { key: "peinture", text: "Peinture intérieure des murs, plafonds et boiseries." },
      { key: "sols", text: "Parquet massif cloué, point de Hongrie, rénovation de parquet." },
      { key: "renovation", text: "Rénovation d'appartement ou de maison, clé en main." },
    ],
    showcaseTitle: "Une rénovation menée à Bouloc",
    showcaseText:
      "Réalisé à Bouloc et non à Aucamville, ce chantier associe peinture intérieure et pose de parquet : deux demandes fréquentes sur les logements d'Aucamville.",
    neighbours: ["castelginest", "l-union", "bouloc"],
  },
  {
    slug: "l-union",
    name: "L'Union",
    seoTitle: "Entreprise de rénovation intérieure à L'Union | Laurent Maury",
    description:
      "Projet de rénovation à L'Union ? Laurent Maury intervient pour vos travaux de peinture, décoration, sols, revêtements et rénovation intérieure.",
    eyebrow: "Rénovation clé en main · L'Union",
    h1: "Entreprise de rénovation intérieure à L'Union",
    intro:
      "Rénover plusieurs pièces à L'Union sans jongler entre les artisans : Laurent Maury prend en charge peinture, décoration, sols et revêtements dans un seul chantier, suivi de A à Z.",
    hubText:
      "Rénovation clé en main, décoration et sols pour les maisons de L'Union.",
    localTitle: "Coordonner plusieurs travaux à L'Union",
    localParagraphs: [
      "À L'Union, les projets portent souvent sur plusieurs pièces à la fois : un séjour à moderniser, des chambres à refaire, des sols usés à remplacer. La difficulté n'est pas chaque tâche, mais leur enchaînement.",
      "Une entreprise de rénovation qui réalise elle-même peinture, placo, isolation, sols et revêtements évite les temps morts entre corps de métier et garde une seule responsabilité sur le résultat.",
      "Le devis est détaillé poste par poste, le planning annoncé avant le démarrage, et Laurent reste votre interlocuteur jusqu'à la réception des travaux.",
    ],
    projects: [
      { title: "Rénovation clé en main", text: "Plusieurs pièces coordonnées dans un seul planning." },
      { title: "Décoration intérieure", text: "Mise en couleur, peintures à effet et enduits décoratifs." },
      { title: "Sols et parquets", text: "Parquet posé ou rénové pour accompagner la nouvelle décoration." },
    ],
    expertisesTitle: "Les travaux de rénovation à L'Union",
    expertises: [
      { key: "renovation", text: "Rénovation intérieure complète, un seul interlocuteur." },
      { key: "peinture", text: "Peinture et décoration, de la teinte au mur graphique." },
      { key: "sols", text: "Pose et rénovation de parquet." },
      { key: "murs", text: "Placo, isolation, enduits et revêtements muraux." },
    ],
    showcaseTitle: "Une rénovation pièce par pièce, à Bouloc",
    showcaseText:
      "Ce chantier a été réalisé à Bouloc. Il illustre une rénovation intérieure coordonnée : peinture du salon, mur graphique et parquet dans la chambre.",
    neighbours: ["aucamville", "blagnac", "castelginest"],
  },
  {
    slug: "grenade",
    name: "Grenade",
    seoTitle: "Peintre, rénovation et façades à Grenade | Laurent Maury",
    description:
      "Peinture, rénovation intérieure et ravalement de façade à Grenade. Découvrez les réalisations et le savoir-faire de Laurent Maury.",
    eyebrow: "Intérieur & façades · Grenade",
    h1: "Peintre et entreprise de rénovation à Grenade",
    intro:
      "Bastide aux maisons anciennes et quartiers plus récents, Grenade réunit des besoins très différents. Laurent Maury y intervient à l'intérieur comme à l'extérieur : peinture, rénovation intérieure, peinture et ravalement de façade.",
    hubText:
      "Peinture de façade, ravalement et rénovation intérieure, de la bastide aux quartiers récents.",
    localTitle: "De la façade à l'intérieur, à Grenade",
    localParagraphs: [
      "Une façade qui farine, des fissures qui s'ouvrent, des boiseries qui grisent : à Grenade, l'extérieur est souvent le premier chantier. Le ravalement de façade commence par un diagnostic des fissures et du support, avant le traitement et la mise en peinture.",
      "Les travaux extérieurs comprennent aussi clôtures et boiseries, pour une maison cohérente de la rue au jardin.",
      "À l'intérieur, la même entreprise de second œuvre prend le relais : peinture intérieure, placo, isolation, revêtements et sols, avec un seul interlocuteur pour l'ensemble.",
    ],
    projects: [
      { title: "Ravalement de façade", text: "Traitement des fissures, préparation et peinture de façade." },
      { title: "Travaux extérieurs", text: "Clôtures, boiseries et entretien extérieur." },
      { title: "Rénovation intérieure", text: "Peinture, murs et sols, pièce par pièce." },
    ],
    expertisesTitle: "Les travaux de rénovation à Grenade",
    expertises: [
      { key: "facades", text: "Peinture de façade, ravalement, traitement des fissures, clôtures et boiseries." },
      { key: "entretien", text: "Entretien extérieur et reprises du bâti." },
      { key: "peinture", text: "Peinture intérieure et décoration." },
      { key: "renovation", text: "Rénovation intérieure complète ou ciblée." },
      { key: "murs", text: "Placo, isolation, enduits et revêtements." },
    ],
    showcaseTitle: "Une rénovation intérieure, à Bouloc",
    showcaseText:
      "Ce chantier a été réalisé à Bouloc. Il montre le soin apporté à la peinture intérieure et aux finitions, que l'on retrouve sur chaque projet à Grenade.",
    neighbours: ["bouloc", "fronton", "blagnac"],
  },
  {
    slug: "blagnac",
    name: "Blagnac",
    seoTitle: "Peinture et rénovation intérieure à Blagnac | Laurent Maury",
    description:
      "Peinture et rénovation intérieure à Blagnac : décoration, murs, revêtements, sols et travaux de second œuvre par Laurent Maury.",
    eyebrow: "Maison & appartement · Blagnac",
    h1: "Peinture et rénovation intérieure à Blagnac",
    intro:
      "Appartement à remettre au goût du jour ou maison à rénover : à Blagnac, Laurent Maury réalise peinture intérieure, décoration, murs, revêtements et sols, avec un devis détaillé et un planning tenu.",
    hubText:
      "Peinture intérieure et rénovation d'appartements comme de maisons à Blagnac.",
    localTitle: "Rénover un appartement ou une maison à Blagnac",
    localParagraphs: [
      "À Blagnac, une part importante des demandes concerne des appartements : la contrainte est alors d'intervenir proprement, dans un espace habité ou entre deux locations, avec des délais clairs.",
      "Protection des sols et du mobilier, rangement quotidien, remise en état en fin de chantier : la tenue du chantier compte autant que la finition. La peinture des murs, des plafonds et des boiseries suit une préparation soignée.",
      "Pour une rénovation de maison, l'artisan rénovation ajoute placo, isolation, revêtements muraux et sols, toujours avec le même interlocuteur.",
    ],
    projects: [
      { title: "Rénovation d'appartement", text: "Peinture, revêtements et sols dans un logement habité." },
      { title: "Décoration intérieure", text: "Mise en couleur et peinture décorative." },
      { title: "Murs et sols", text: "Enduits, papier peint, parquet." },
    ],
    expertisesTitle: "Vos travaux de rénovation à Blagnac",
    expertises: [
      { key: "peinture", text: "Peinture intérieure et décoration." },
      { key: "renovation", text: "Rénovation de maison ou d'appartement." },
      { key: "murs", text: "Enduits, placo, isolation et revêtements muraux." },
      { key: "sols", text: "Pose et rénovation de parquet." },
    ],
    showcaseTitle: "Un chantier de référence, à Bouloc",
    showcaseText:
      "Ce chantier a été réalisé à Bouloc, pas à Blagnac. Il donne une idée concrète du rendu d'une rénovation intérieure menée par Laurent Maury.",
    neighbours: ["aucamville", "l-union", "grenade"],
  },
];

export const getZone = (slug: string) => zones.find((z) => z.slug === slug);
