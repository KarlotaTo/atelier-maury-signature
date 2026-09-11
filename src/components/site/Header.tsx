import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { nav, expertises, site, hasPhone, telHref } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropOpen(true);
  };
  const closeDrop = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropOpen(false), 120);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
...
        <nav className="hidden items-center gap-7 lg:flex">
          <div
            className="relative"
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <button
              type="button"
              aria-expanded={dropOpen}
              aria-haspopup="true"
              onClick={() => setDropOpen((v) => !v)}
              onFocus={openDrop}
              className="flex items-center gap-1.5 text-[13px] tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              Expertises
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${dropOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            <div
              className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 transition-all duration-200 ${
                dropOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="border border-line bg-background shadow-[0_24px_60px_-24px_rgba(20,28,45,0.35)]">
                {expertises.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setDropOpen(false)}
                    className="group flex items-center justify-between border-b border-line px-5 py-3.5 text-[13px] tracking-wide text-ink-soft transition-colors last:border-b-0 hover:bg-sand hover:text-ink"
                    activeProps={{ className: "text-accent" }}
                  >
                    {item.label}
                    <span className="h-px w-4 bg-accent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
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
              className="group relative hidden h-10 w-10 items-center justify-center overflow-hidden border border-line text-ink transition-all duration-300 hover:w-auto lg:flex"
              aria-label={`Appeler ${site.name} au ${site.phone}`}
              title={site.phone}
            >
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="max-w-0 overflow-hidden whitespace-nowrap px-0 text-sm opacity-0 transition-all duration-300 group-hover:max-w-[12rem] group-hover:px-2 group-hover:opacity-100">
                {site.phone}
              </span>
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
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-background lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-2 lg:px-10">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 text-sm text-ink-soft"
            >
              Accueil
            </Link>
            <button
              type="button"
              aria-expanded={mobileDrop}
              onClick={() => setMobileDrop((v) => !v)}
              className="flex items-center justify-between border-b border-line py-4 text-sm text-ink-soft"
            >
              Expertises
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${mobileDrop ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
            {mobileDrop &&
              expertises.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 pl-4 text-sm text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
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
