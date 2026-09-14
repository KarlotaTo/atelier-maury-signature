import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { Check, Clock } from "lucide-react";
import { Section, Eyebrow, SectionTitle, Lead, PageHero } from "@/components/site/ui";
import { site, communes, hasPhone, telHref, isOpen } from "@/data/site";

function OpenBadge({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState<boolean | null>(null);
  useEffect(() => {
    setOpen(isOpen());
    const id = setInterval(() => setOpen(isOpen()), 60000);
    return () => clearInterval(id);
  }, []);
  if (open === null) return null;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] tracking-wide ${
        open
          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
          : "border-slate-200 bg-slate-100 text-slate-600"
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-emerald-500" : "bg-slate-400"}`} />
      {open ? "Ouvert" : "Fermé"}
      <span className="text-muted-foreground">· {site.hours.range}</span>
    </span>
  );
}

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { intent?: string } =>
    typeof search["intent"] === "string" ? { intent: search["intent"] } : {},
  head: () => ({
    meta: [
      { title: "Contact et devis gratuit à Bouloc — Maury Laurent" },
      {
        name: "description",
        content:
          "Demandez un devis détaillé pour vos travaux de peinture, décoration ou rénovation à Bouloc et au nord de Toulouse. Visite sur place, interlocuteur unique.",
      },
      { property: "og:title", content: "Contact — Maury Laurent" },
      {
        property: "og:description",
        content:
          "Décrivez votre projet : visite sur place et devis détaillé poste par poste.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

const inputClass =
  "w-full border border-line bg-background px-4 py-3.5 text-[15px] text-ink placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none";

function Page() {
  const { intent } = Route.useSearch();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO client : brancher l'envoi réel (email ou service de formulaire)
    // une fois les coordonnées de l'entreprise confirmées.
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        intro="Décrivez les travaux envisagés en quelques lignes : nous vous répondons pour organiser une visite sur place, suivie d'un devis détaillé poste par poste."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="border border-line bg-sand p-10">
                <Check className="h-8 w-8 text-accent" aria-hidden="true" />
                <h2 className="mt-5 text-3xl">Votre message est prêt</h2>
                <p className="mt-4 max-w-md text-[17px] leading-relaxed text-muted-foreground">
                  Le formulaire sera relié à la messagerie de l'entreprise dès que l'adresse email
                  définitive nous aura été transmise. Merci de votre demande.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Nom
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Téléphone
                    </label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Email
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="city" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Commune
                    </label>
                    <select id="city" name="city" className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Choisir
                      </option>
                      {communes.map((c) => (
                        <option key={c.slug} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                      <option value="autre">Autre commune</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="type" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Type de travaux
                    </label>
                    <select id="type" name="type" className={inputClass} defaultValue={intent === "projet" ? "" : ""}>
                      <option value="">À définir ensemble</option>
                      <option value="peinture">Peinture & décoration</option>
                      <option value="sols">Sols & parquets</option>
                      <option value="murs">Murs & revêtements</option>
                      <option value="renovation">Rénovation intérieure</option>
                      <option value="facades">Façades & extérieur</option>
                      <option value="entretien">Entretien & bâti</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Pièces concernées, état actuel, rendu souhaité, délais éventuels…"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent px-8 py-4 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="border border-line bg-sand p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Coordonnées
              </p>
              <p className="mt-4 font-display text-2xl">{site.name}</p>
              <p className="mt-2 text-[15px] text-muted-foreground">{site.address}</p>
              <ul className="mt-6 space-y-3 text-[15px]">
                <li>
                  {hasPhone() ? (
                    <a href={telHref()} className="text-ink underline-offset-4 hover:underline">
                      {site.phone}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">[Téléphone à compléter]</span>
                  )}
                </li>
                <li>
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="text-ink underline-offset-4 hover:underline">
                      {site.email}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">[Email à compléter]</span>
                  )}
                </li>
              </ul>
            </div>
            <div className="mt-6 border border-line p-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                Bon à savoir
              </p>
              <ul className="mt-4 space-y-3 text-[15px] text-muted-foreground">
                <li>Visite sur place avant tout devis</li>
                <li>Devis détaillé poste par poste</li>
                <li>Un seul interlocuteur du début à la fin</li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
