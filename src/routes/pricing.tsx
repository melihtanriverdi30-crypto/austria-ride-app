import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { COMPANY } from "@/lib/config";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Preise — Vienna Transfer" },
      {
        name: "description",
        content:
          "Faire Festpreise für Taxi und Flughafentransfer in Wien: Flughafen ↔ Innenstadt, Bratislava, Stundensätze. Alle Preise inkl. MwSt.",
      },
      { property: "og:title", content: "Preise — Vienna Transfer" },
      { property: "og:description", content: "Faire Festpreise für Taxi und Flughafentransfer in Wien." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{t.pricing.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.pricing.subtitle}</p>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {t.pricing.rows.map((row, i) => (
          <div
            key={row.route}
            className={`flex items-center justify-between gap-4 px-6 py-5 ${
              i % 2 === 0 ? "bg-card" : "bg-secondary/50"
            }`}
          >
            <span className="font-medium">{row.route}</span>
            <span className="whitespace-nowrap font-heading text-lg font-bold text-primary">
              {t.pricing.from} {row.price}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-sm font-medium">{t.pricing.note}</p>
        <a
          href={`https://wa.me/${COMPANY.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
