# Renforcement SEO complet de Maury Laurent

## Objectif
Rendre chaque page publique clairement compréhensible par Google, renforcer la pertinence locale autour de Bouloc et faciliter l’exploration du site, sans inventer de coordonnées, labels, chantiers ou témoignages.

## Mise en œuvre
1. **Socle SEO partagé**
   - Centraliser l’URL publique et les helpers de métadonnées pour produire des titres, descriptions, URLs canoniques et balises sociales absolues et cohérentes.
   - Ajouter les données structurées d’entreprise locale avec les coordonnées, horaires, zones desservies et expertises déjà confirmés.
   - Ajouter un fil d’Ariane structuré sur les pages internes.

2. **Granularité par page**
   - Optimiser les métadonnées uniques des six expertises, de l’entreprise, des zones, du contact et des réalisations.
   - Ajouter des données structurées adaptées : `Service` sur les expertises, `ContactPage`, `AboutPage`, `CollectionPage` et `CreativeWork` pour les réalisations.
   - Conserver un seul sujet principal par page et renforcer les liens contextuels vers la demande de devis, les expertises et les réalisations pertinentes.

3. **Référencement local**
   - Exploiter proprement les sept communes déjà validées dans les données structurées et les contenus existants.
   - Ne pas créer de pages locales pauvres ou dupliquées ; privilégier une page Zones solide et des signaux locaux naturels dans les pages services.

4. **Exploration et indexation**
   - Faire générer le sitemap avec l’URL publique canonique, toutes les pages d’expertise et toutes les fiches Réalisations.
   - Ajouter la référence du sitemap dans `robots.txt` sans modifier les autorisations actuelles.
   - Vérifier que les pages détail Réalisations ont des métadonnées complètes, une URL canonique et restent accessibles aux moteurs.

5. **Validation**
   - Contrôler les pages desktop et mobile, les balises rendues, le JSON-LD, `robots.txt` et `/sitemap.xml`.
   - Vérifier l’absence d’erreurs et de régression visuelle, puis relancer l’audit SEO disponible.

## Limite importante
Une configuration parfaite améliore l’exploration et la compréhension, mais aucun délai de classement ne peut être garanti. L’autorité locale, les vraies réalisations, la fiche Google Business Profile et les liens entrants resteront déterminants.

## Détails techniques
- URL canonique : `https://maury-laurent.lnkio.fr`
- Les données structurées seront sérialisées dans les `head()` TanStack existants.
- Aucun contenu fictif supplémentaire ne sera ajouté.
