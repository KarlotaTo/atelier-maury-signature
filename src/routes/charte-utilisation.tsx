import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/ui";
import { site } from "@/data/site";
import { buildSeoHead } from "@/lib/seo";

export const Route = createFileRoute("/charte-utilisation")({
  head: () =>
    buildSeoHead({
      title: "Charte d'utilisation | MAURY LAURENT",
      description:
        "Charte d'utilisation du site internet de MAURY LAURENT, artisan spécialisé dans les travaux de peinture.",
      path: "/charte-utilisation",
      breadcrumbLabel: "Charte d'utilisation",
      schema: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Charte d'utilisation du site",
        description:
          "Charte d'utilisation du site internet de MAURY LAURENT, artisan spécialisé dans les travaux de peinture.",
        url: "https://maury-laurent.lnkio.fr/charte-utilisation",
      },
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Règles d'usage"
        title="Charte d'utilisation du site"
        intro="Cette charte définit les conditions d'accès et d'utilisation du site internet de MAURY LAURENT."
      />

      <Section>
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl">Objet</h2>
            <p>
              La présente charte définit les règles applicables à l'utilisation du site internet de
              MAURY LAURENT.
            </p>
            <p>
              L'accès et l'utilisation du site impliquent l'acceptation des présentes règles.
            </p>

            <h2 className="mt-14 text-3xl">Accès au site</h2>
            <p>
              Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet.
            </p>
            <p>
              Les éventuels frais liés à l'accès à Internet et à l'utilisation des équipements
              nécessaires à la consultation du site restent à la charge de l'utilisateur.
            </p>
            <p>
              MAURY LAURENT s'efforce de maintenir le site accessible dans des conditions normales
              d'utilisation, mais ne peut garantir une disponibilité permanente ou exempte
              d'interruption.
            </p>

            <h2 className="mt-14 text-3xl">Utilisation du contenu</h2>
            <p>
              Les contenus disponibles sur le site sont destinés à fournir des informations sur
              l'activité, les prestations et le savoir-faire de MAURY LAURENT.
            </p>
            <p>
              L'utilisateur s'engage à utiliser ces contenus de manière conforme à la législation
              française et à ne pas porter atteinte aux droits de MAURY LAURENT ou de tiers.
            </p>
            <p>
              Toute utilisation frauduleuse, abusive ou détournée du site est interdite.
            </p>

            <h2 className="mt-14 text-3xl">Propriété intellectuelle</h2>
            <p>
              Les contenus, textes, photographies, éléments graphiques, logos et autres éléments
              présents sur le site sont protégés par les dispositions relatives à la propriété
              intellectuelle.
            </p>
            <p>
              Ils ne peuvent être reproduits, copiés, modifiés, distribués ou exploités à des fins
              commerciales sans autorisation préalable.
            </p>

            <h2 className="mt-14 text-3xl">Liens hypertextes</h2>
            <p>Le site peut éventuellement contenir des liens vers des sites internet externes.</p>
            <p>
              MAURY LAURENT n'exerce aucun contrôle sur ces sites et ne peut être tenu responsable
              de leur contenu, de leur disponibilité ou de leurs pratiques.
            </p>
            <p>
              La présence d'un lien vers un site externe ne constitue pas nécessairement une
              recommandation ou une validation de son contenu.
            </p>

            <h2 className="mt-14 text-3xl">Données personnelles</h2>
            <p>
              Lorsque l'utilisateur transmet volontairement des informations personnelles via les
              moyens de contact proposés sur le site, ces informations sont utilisées uniquement
              dans le cadre nécessaire au traitement de sa demande.
            </p>
            <p>
              Les informations transmises peuvent notamment comprendre le nom, le numéro de
              téléphone, l'adresse e-mail et le contenu du message.
            </p>
            <p>
              MAURY LAURENT s'engage à traiter ces données dans le respect de la réglementation
              applicable en matière de protection des données personnelles, notamment du Règlement
              général sur la protection des données (RGPD).
            </p>
            <p>
              Pour toute question relative aux données personnelles ou pour exercer ses droits,
              l'utilisateur peut contacter :
            </p>
            <p>
              <strong>MAURY LAURENT</strong>
              <br />
              14 impasse de la Seube
              <br />
              31620 Bouloc
              <br />
              France
              <br />
              <strong>E-mail :</strong>{" "}
              <a href={`mailto:${site.email}`} className="underline hover:text-accent">
                {site.email}
              </a>
            </p>

            <h2 className="mt-14 text-3xl">Cookies et données de navigation</h2>
            <p>
              Le site peut utiliser des cookies ou technologies similaires nécessaires à son
              fonctionnement, à sa sécurité ou à la mesure de son audience.
            </p>
            <p>
              Lorsque le consentement de l'utilisateur est requis par la réglementation applicable,
              celui-ci doit pouvoir être recueilli ou refusé conformément aux règles en vigueur.
            </p>

            <h2 className="mt-14 text-3xl">Disponibilité et sécurité</h2>
            <p>
              L'utilisateur s'engage à ne pas tenter de perturber le fonctionnement du site, d'en
              compromettre la sécurité ou d'accéder à des ressources auxquelles il n'est pas autorisé
              à accéder.
            </p>
            <p>
              Toute tentative d'intrusion, de dégradation ou d'utilisation malveillante du site est
              interdite.
            </p>

            <h2 className="mt-14 text-3xl">Modification de la charte</h2>
            <p>
              MAURY LAURENT peut être amené à modifier la présente charte afin de tenir compte de
              l'évolution du site, de ses fonctionnalités ou de la réglementation applicable.
            </p>
            <p>
              La version publiée sur le site est la version applicable au moment de la consultation.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
