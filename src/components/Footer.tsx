import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/config";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
              V
            </span>
            <span className="font-heading text-lg font-bold">{COMPANY.name}</span>
          </div>
          <p className="mt-3 text-sm text-ink-foreground/70">
            {COMPANY.city} · {t.contact.hoursValue}
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">
            {t.footer.quick}
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary">{t.nav.services}</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">{t.nav.pricing}</Link></li>
            <li><Link to="/about" className="hover:text-primary">{t.nav.about}</Link></li>
            <li><Link to="/contact" className="hover:text-primary">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">
            {t.nav.contact}
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-primary">{COMPANY.phone}</a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-primary">{COMPANY.email}</a>
            </li>
            <li>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-4 py-4 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {COMPANY.name} — {t.footer.rights}
      </div>
    </footer>
  );
}
