import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { BookingForm } from "@/components/BookingForm";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Leistungen — Vienna Transfer" },
      {
        name: "description",
        content:
          "Flughafen-Transfer, Stadt-Taxi und Business/VIP-Chauffeurservice in Wien. Festpreise, 24/7, lizenziert & versichert.",
      },
      { property: "og:title", content: "Leistungen — Vienna Transfer" },
      {
        property: "og:description",
        content: "Flughafen-Transfer, Stadt-Taxi und Business/VIP-Service in Wien.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();
  const cards = [
    { ...t.services.airport, icon: "✈️" },
    { ...t.services.city, icon: "🚖" },
    { ...t.services.vip, icon: "⭐" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{t.services.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.services.subtitle}</p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cards.map((s) => (
          <div key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <span className="text-4xl">{s.icon}</span>
            <h2 className="mt-5 font-heading text-2xl font-bold">{s.title}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <BookingForm />
      </div>
    </div>
  );
}
