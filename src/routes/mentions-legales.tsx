import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";
import { site } from "@/data/site";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/mentions-legales")({
  head: () =>
    buildSeoHead({
      title: "Mentions légales | MAURY LAURENT",
      description:
        "Mentions légales de MAURY LAURENT, entrepreneur individuel spécialisé dans les travaux de peinture à Bouloc et en Haute-Garonne.",
      path: "/mentions-legales",
      breadcrumbLabel: "Mentions légales",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Mentions légales",
        description:
          "Mentions légales de MAURY LAURENT, entrepreneur individuel spécialisé dans les travaux de peinture à Bouloc et en Haute-Garonne.",
        url: "https://maury-laurent.lnkio.fr/mentions-legales",
      },
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales"
        intro="Retrouvez ci-dessous les informations administratives et juridiques relatives au site internet de MAURY LAURENT."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl">Éditeur du site</h2>
            <p>
              Le présent site est édité par :
              <br />
              <strong>MAURY LAURENT</strong>
              <br />
              Entrepreneur individuel
            </p>
            <p>
              <strong>Adresse du siège social :</strong>
              <br />
              14 impasse de la Seube
              <br />
              31620 Bouloc
              <br />
              France
            </p>
            <ul className="mt-4 list-none space-y-2 pl-0">
              <li>
                <strong>SIREN :</strong> 395 277 510
              </li>
              <li>
                <strong>SIRET :</strong> 395 277 510 00057
              </li>
              <li>
                <strong>Numéro de TVA intracommunautaire :</strong> FR73 395 277 510
              </li>
              <li>
                <strong>Code APE / NAF :</strong> 43.34G – Travaux de peinture
              </li>
              <li>
                <strong>Date d'immatriculation :</strong> 02/06/1994
              </li>
            </ul>
            <p className="mt-6">
              <strong>Téléphone :</strong>{" "}
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="underline hover:text-accent">
                {site.phone}
              </a>
              <br />
              <strong>E-mail :</strong>{" "}
              <a href={`mailto:${site.email}`} className="underline hover:text-accent">
                {site.email}
              </a>
            </p>

            <h2 className="mt-14 text-3xl">Activité</h2>
            <p>MAURY LAURENT exerce une activité de travaux de peinture.</p>

            <h2 className="mt-14 text-3xl">Directeur de la publication</h2>
            <p>
              <strong>Directeur de la publication : MAURY LAURENT</strong>
            </p>

            <h2 className="mt-14 text-3xl">Hébergement</h2>
            <p>
              Le site est hébergé par :
              <br />
              <strong>OVH SAS</strong>
              <br />
              2 rue Kellermann
              <br />
              59100 Roubaix
              <br />
              France
            </p>
            <ul className="mt-4 list-none space-y-2 pl-0">
              <li>
                <strong>RCS Lille Métropole :</strong> 424 761 419
              </li>
              <li>
                <strong>SIREN :</strong> 424 761 419
              </li>
              <li>
                <strong>TVA intracommunautaire :</strong> FR22 424 761 419
              </li>
            </ul>

            <h2 className="mt-14 text-3xl">Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments présents sur ce site, notamment les textes, photographies,
              illustrations, graphismes, logo, éléments visuels et contenus, est protégé par les
              dispositions légales applicables en matière de propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, modification, adaptation ou utilisation, totale ou
              partielle, de ces éléments sans autorisation préalable de leur titulaire est interdite,
              sauf dans les cas prévus par la loi.
            </p>

            <h2 className="mt-14 text-3xl">Responsabilité</h2>
            <p>
              MAURY LAURENT s'efforce de fournir sur ce site des informations exactes et
              régulièrement mises à jour.
            </p>
            <p>
              Toutefois, malgré le soin apporté à la mise à disposition des informations, MAURY
              LAURENT ne peut garantir l'exactitude, l'exhaustivité ou l'actualité de l'ensemble des
              contenus présents sur le site.
            </p>
            <p>
              L'utilisateur reconnaît utiliser les informations disponibles sur le site sous sa
              propre responsabilité.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
