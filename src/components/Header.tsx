import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { COMPANY } from "@/lib/config";
import { LANGUAGES, useLanguage, type Lang } from "@/lib/i18n";

const NAV = [
  { to: "/", key: "home" },
  { to: "/services", key: "services" },
  { to: "/pricing", key: "pricing" },
  { to: "/about", key: "about" },
  { to: "/contact", key: "contact" },
] as const;

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      {/* Austrian flag accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary-foreground to-primary" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
            V
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-bold tracking-tight">{COMPANY.name}</span>
            <span className="block text-xs text-muted-foreground">{COMPANY.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === item.to
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-accent hover:text-foreground"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center rounded-full border border-border bg-card p-0.5">
            {LANGUAGES.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code as Lang)}
                title={l.name}
                className={`rounded-full px-2 py-1 text-[11px] font-semibold transition-colors ${
                  lang === l.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 md:block"
          >
            {t.cta.book}
          </Link>

          <button
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                pathname === item.to ? "bg-primary/10 text-primary" : "text-foreground/80"
              }`}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
