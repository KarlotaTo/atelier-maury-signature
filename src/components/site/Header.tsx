import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { nav, site, hasPhone, telHref } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "border-line bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 lg:px-10">
        <Link to="/" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl leading-none tracking-tight text-ink">
            Maury <span className="text-accent">Laurent</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.28em] text-muted-foreground sm:inline">
            Depuis {site.since}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline text-[13px] tracking-wide text-ink-soft transition-colors hover:text-ink"
              activeProps={{ className: "text-accent" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {hasPhone() && (
            <a
              href={telHref()}
              className="hidden items-center gap-2 text-sm text-ink lg:flex"
              aria-label={`Appeler ${site.name}`}
            >
              <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
              {site.phone}
            </a>
          )}
          <Link
            to="/contact"
            className="hidden items-center bg-accent px-5 py-3 text-[11px] uppercase tracking-[0.2em] text-accent-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Demander un devis
          </Link>
          <button
            type="button"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background xl:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-2 lg:px-10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-sm text-ink-soft"
            >
              Accueil
            </Link>
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-sm text-ink-soft"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-5 mb-4 bg-accent px-5 py-4 text-center text-[11px] uppercase tracking-[0.2em] text-accent-foreground"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
