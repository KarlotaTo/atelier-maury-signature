import { Section, Eyebrow, SectionTitle, Lead, PageHero, PrestationList, FinalCta } from "@/components/site/ui";
import { Rich } from "@/components/site/Rich";

/** Contenu d'une page savoir-faire, éditable dans le CMS (src/content/pages/*.json). */
export type ServiceContent = {
  seo: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleSeoPrefix: string;
    title: string;
    intro: string;
    image: string;
    imageAlt: string;
  };
  chantier: { title: string; text: string }[];
  principe?: { eyebrow: string; title: string; text: string };
  prestations: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  methode: { eyebrow: string; title: string; lead: string; text: string };
  cta: { title: string; text: string };
};

export function ServicePage({ content }: { content: ServiceContent }) {
  const { hero, chantier, principe, prestations, methode, cta } = content;
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={
          <>
            <span className="sr-only">{hero.titleSeoPrefix} : </span>
            {hero.title}
          </>
        }
        intro={hero.intro}
        image={hero.image}
        imageAlt={hero.imageAlt}
        extra={
          chantier.length > 0 ? (
            <div className="mt-12 border-t border-line pt-8">
              <p className="eyebrow">Sur le chantier</p>
              <ul className="mt-6 space-y-5">
                {chantier.map((item) => (
                  <li key={item.title} className="grid gap-1 sm:grid-cols-[14rem_1fr] sm:gap-6">
                    <span className="text-[15px] font-medium text-ink">{item.title}</span>
                    <span className="text-[15px] leading-relaxed text-muted-foreground">
                      <Rich text={item.text} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : undefined
        }
      />

      {principe?.title && (
        <Section tone="dark">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="eyebrow text-primary-foreground/60">{principe.eyebrow}</p>
              <h2 className="mt-5 text-4xl leading-[1.06] lg:text-6xl">
                <Rich text={principe.title} />
              </h2>
            </div>
            <div className="lg:col-span-6">
              <p className="text-[17px] leading-relaxed text-primary-foreground/70">
                <Rich text={principe.text} />
              </p>
            </div>
          </div>
        </Section>
      )}

      <Section>
        <Eyebrow>{prestations.eyebrow}</Eyebrow>
        <SectionTitle>{prestations.title}</SectionTitle>
        <div className="mt-14">
          <PrestationList items={prestations.items} />
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>{methode.eyebrow}</Eyebrow>
            <SectionTitle>
              <Rich text={methode.title} />
            </SectionTitle>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Lead>
              <Rich text={methode.lead} />
            </Lead>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              <Rich text={methode.text} />
            </p>
          </div>
        </div>
      </Section>

      <FinalCta title={cta.title} text={cta.text} />
    </>
  );
}
