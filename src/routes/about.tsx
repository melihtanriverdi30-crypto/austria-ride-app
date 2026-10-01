import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import fleetImg from "@/assets/fleet-chauffeur.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über uns — Vienna Transfer" },
      {
        name: "description",
        content:
          "Lizenziertes Taxi- und Transferunternehmen aus Wien: gepflegte Fahrzeuge, freundliche Fahrer, ehrliche Festpreise — 24/7.",
      },
      { property: "og:title", content: "Über uns — Vienna Transfer" },
      { property: "og:description", content: "Lizenziertes Taxi- und Transferunternehmen aus Wien." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{t.about.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{t.about.text}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {t.why.items.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading text-sm font-bold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img
            src={fleetImg}
            alt="Chauffeur at Vienna Airport"
            width={1376}
            height={768}
            loading="lazy"
            className="w-full rounded-2xl border border-border object-cover shadow-lg"
          />
          <div className="mt-6 rounded-2xl bg-ink p-6 text-ink-foreground">
            <h2 className="font-heading text-xl font-bold">{t.about.fleet}</h2>
            <p className="mt-2 text-sm text-ink-foreground/80">{t.about.fleetText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
