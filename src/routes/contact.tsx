import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { COMPANY } from "@/lib/config";
import { BookingForm } from "@/components/BookingForm";
import { IconPhone, IconChat, IconMail, IconClock } from "@/components/icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt & Buchung — Vienna Transfer" },
      {
        name: "description",
        content:
          "Taxi oder Flughafentransfer in Wien buchen: Telefon, WhatsApp oder E-Mail. 24/7 erreichbar, schnelle Bestätigung.",
      },
      { property: "og:title", content: "Kontakt & Buchung — Vienna Transfer" },
      { property: "og:description", content: "Taxi oder Flughafentransfer in Wien buchen — 24/7 erreichbar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{t.contact.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.contact.subtitle}</p>

      <div className="mt-12 grid items-start gap-10 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <a
            href={`tel:${COMPANY.phoneHref}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><IconPhone /></span>
            <span>
              <span className="block text-xs text-muted-foreground">{t.contact.phone}</span>
              <span className="font-heading text-lg font-bold">{COMPANY.phone}</span>
            </span>
          </a>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 text-[#1da851]"><IconChat /></span>
            <span>
              <span className="block text-xs text-muted-foreground">WhatsApp</span>
              <span className="font-heading text-lg font-bold">{COMPANY.phone}</span>
            </span>
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><IconMail /></span>
            <span>
              <span className="block text-xs text-muted-foreground">{t.contact.email}</span>
              <span className="font-heading text-lg font-bold">{COMPANY.email}</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><IconClock /></span>
            <span>
              <span className="block text-xs text-muted-foreground">{t.contact.hours}</span>
              <span className="font-heading text-lg font-bold">{t.contact.hoursValue}</span>
            </span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
