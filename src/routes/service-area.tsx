import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area — A Plus Auto Repair, Houston" },
      { name: "description", content: "Serving Houston, Alief, Sugar Land, Stafford, Bellaire, Mission Bend, Sharpstown and surrounding Southwest Houston neighborhoods." },
      { property: "og:title", content: "Service Area — A Plus Auto Repair" },
      { property: "og:description", content: "Serving Southwest Houston and surrounding communities." },
      { property: "og:url", content: "/service-area" },
    ],
    links: [{ rel: "canonical", href: "/service-area" }],
  }),
  component: ServiceAreaPage,
});

const areas = [
  "Houston (77099)", "Alief", "Sugar Land", "Stafford",
  "Bellaire", "Sharpstown", "Mission Bend", "Westchase",
  "Meyerland", "Missouri City", "Richmond", "Katy",
];

function ServiceAreaPage() {
  return (
    <div>
      <PageHero
        eyebrow="Service area"
        title="Houston drivers — and the ones who'll drive a little farther."
        subtitle="Based on Bissonnet Street in Southwest Houston, we serve drivers from across the metro who want honest, expert auto repair."
      />

      <section className="container-luxe py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="eyebrow mb-4">Neighborhoods we serve</p>
          <h2 className="display-lg mb-8">Convenient for Southwest Houston.</h2>
          <ul className="grid grid-cols-2 gap-2">
            {areas.map(a => (
              <li key={a} className="card-luxe p-4 flex items-center gap-2">
                <MapPin className="size-4 text-[var(--ember)]" />
                <span className="text-sm">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted-foreground">Outside this list? Call us — chances are we can still help.</p>
          <Link to="/contact" className="btn-ember mt-6">Request a quote</Link>
        </div>
        <div className="card-luxe overflow-hidden h-[480px]">
          <iframe
            title="A Plus Auto Repair location map"
            src="https://www.google.com/maps?q=13001+Bissonnet+St,+Houston,+TX+77099&output=embed"
            className="w-full h-full border-0 grayscale-[0.4] contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
