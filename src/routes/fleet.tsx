import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { COMPANY } from "@/lib/config";
import sedanImg from "@/assets/fleet-sedan.jpg";
import vanImg from "@/assets/fleet-van.jpg";
import groupImg from "@/assets/fleet-group.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Unsere Flotte — Alpina Taxi" },
      {
        name: "description",
        content:
          "Unsere Fahrzeuge: Standard-Limousine, Business-Van und Gruppenfahrzeug bis 8 Personen — klimatisiert, gepflegt und voll versichert.",
      },
      { property: "og:title", content: "Unsere Flotte — Alpina Taxi" },
      { property: "og:description", content: "Moderne Fahrzeuge für jeden Anlass — vom Stadt-Taxi bis zum Gruppentransfer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FleetPage,
});

function FleetPage() {
  const { t } = useLanguage();
  const images = [sedanImg, vanImg, groupImg];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{t.fleet.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.fleet.subtitle}</p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {t.fleet.vehicles.map((v, i) => (
          <div
            key={v.name}
            className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10"
          >
            <img
              src={images[i]}
              alt={v.name}
              width={1376}
              height={768}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="p-6">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {v.capacity}
              </span>
              <h2 className="mt-3 font-heading text-xl font-bold">{v.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-primary/30 bg-primary/5 p-6">
        <p className="text-sm font-medium">{t.fleet.note}</p>
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
