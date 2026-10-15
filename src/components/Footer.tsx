import { Link } from "@tanstack/react-router";
import { COMPANY } from "@/lib/config";
import { Mountain } from "lucide-react";
import { alpinaContent } from "@/lib/alpina-content";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t, lang } = useLanguage();
  const legal = alpinaContent[lang].legal;
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-lg font-bold text-primary-foreground">
              <Mountain className="size-6" />
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
            <li><Link to="/fleet" className="hover:text-primary">{t.nav.fleet}</Link></li>
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
              <a href={`tel:${COMPANY.phoneHref}`} className="hover:text-primary"><bdi>{COMPANY.phone}</bdi></a>
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="break-all hover:text-primary"><bdi>{COMPANY.email}</bdi></a>
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
      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto max-w-6xl px-4 py-7 text-sm">
          <h3 className="font-heading font-semibold">{legal.title}</h3>
          <dl className="mt-4 grid gap-4 text-ink-foreground/75 sm:grid-cols-3">
            <div><dt className="text-xs text-ink-foreground/50">{legal.owner}</dt><dd className="mt-1">{COMPANY.owner}</dd></div>
            <div><dt className="text-xs text-ink-foreground/50">{legal.address}</dt><dd className="mt-1"><bdi>{COMPANY.address}</bdi></dd></div>
            <div><dt className="text-xs text-ink-foreground/50">{legal.vat}</dt><dd className="mt-1"><bdi>{COMPANY.vatNumber}</bdi></dd></div>
          </dl>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 px-4 py-4 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} {COMPANY.name} — {t.footer.rights}
      </div>
    </footer>
  );
}
