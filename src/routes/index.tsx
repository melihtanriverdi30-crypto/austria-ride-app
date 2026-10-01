import { createFileRoute, Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { COMPANY } from "@/lib/config";
import { BookingForm } from "@/components/BookingForm";
import { IconPlane, IconTaxi, IconStar, IconPhone, IconChat, IconCheck } from "@/components/icons";
import heroImg from "@/assets/hero-vienna.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vienna Transfer — Taxi & Airport Transfer in Wien" },
      {
        name: "description",
        content:
          "Ihr lizenzierter Taxi- und Flughafentransfer in Wien. Festpreise, 24/7, mehrsprachig. Jetzt per WhatsApp oder E-Mail buchen.",
      },
      { property: "og:title", content: "Vienna Transfer — Taxi & Airport Transfer in Wien" },
      {
        property: "og:description",
        content: "Festpreise, 24/7 erreichbar, mehrsprachig. Taxi & Flughafentransfer in Wien.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();

  const serviceCards = [
    { ...t.services.airport, icon: <IconPlane /> },
    { ...t.services.city, icon: <IconTaxi /> },
    { ...t.services.vip, icon: <IconStar /> },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Taxi in Vienna"
          width={1920}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink-foreground/20 bg-ink-foreground/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {t.hero.badge}
          </p>
          <h1 className="mt-6 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base text-ink-foreground/80 md:text-lg">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
            >
              {t.cta.book}
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-foreground/30 bg-ink-foreground/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-colors hover:bg-ink-foreground/20"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{t.services.title}</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{t.services.subtitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCards.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="text-primary">{s.icon}</span>
              <h3 className="mt-4 font-heading text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">
            {t.nav.services} →
          </Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{t.why.title}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-heading text-lg font-bold text-primary">
                  ✓
                </span>
                <h3 className="mt-4 font-heading text-base font-bold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 md:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{t.form.title}</h2>
            <p className="mt-3 text-muted-foreground">{t.contact.subtitle}</p>
            <div className="mt-8 space-y-4">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">📞</span>
                <span>
                  <span className="block text-xs text-muted-foreground">{t.contact.phone}</span>
                  <span className="font-heading text-lg font-bold">{COMPANY.phone}</span>
                </span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1da851]">💬</span>
                <span>
                  <span className="block text-xs text-muted-foreground">WhatsApp</span>
                  <span className="font-heading text-lg font-bold">{COMPANY.phone}</span>
                </span>
              </a>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>
    </div>
  );
}
