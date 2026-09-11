import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "sand" | "dark";
}) {
  const tones = {
    light: "bg-background text-ink",
    sand: "bg-sand text-ink",
    dark: "bg-primary text-primary-foreground",
  };
  return (
    <section className={`${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-[1400px] px-5 py-20 lg:px-10 lg:py-28">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`mt-5 max-w-3xl text-4xl leading-[1.08] lg:text-5xl ${className}`}>{children}</h2>
  );
}

export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`max-w-2xl text-[17px] leading-relaxed text-muted-foreground ${className}`}>
      {children}
    </p>
  );
}

export function CtaPair({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex bg-accent px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90"
      >
        Demander un devis
      </Link>
      <Link
        to="/contact"
        search={{ intent: "projet" }}
        className={`inline-flex border px-7 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors ${
          tone === "dark"
            ? "border-white/30 text-primary-foreground hover:bg-white/10"
            : "border-ink/25 text-ink hover:bg-ink hover:text-primary-foreground"
        }`}
      >
        Parler de votre projet
      </Link>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-line bg-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 pt-16 pb-20 lg:grid-cols-12 lg:px-10 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.03] lg:text-7xl">{title}</h1>
          <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted-foreground">{intro}</p>
          <div className="mt-10">
            <CtaPair />
          </div>
        </div>
        {image && (
          <div className="lg:col-span-5">
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}

export function PrestationList({
  items,
}: {
  items: { title: string; text: string }[];
}) {
  return (
    <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
      {items.map((item) => (
        <article key={item.title} className="bg-background p-8 lg:p-10">
          <h3 className="text-2xl">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function FinalCta({
  title = "Parlons de votre projet",
  text = "Une visite sur place, un échange sur vos attentes, puis un devis détaillé poste par poste.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <Section tone="dark">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="eyebrow text-primary-foreground/60">Contact</p>
          <h2 className="mt-5 text-4xl leading-[1.08] lg:text-6xl">{title}</h2>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-primary-foreground/70">
            {text}
          </p>
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <CtaPair tone="dark" />
        </div>
      </div>
    </Section>
  );
}
