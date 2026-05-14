import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Gauge, Wrench, ShieldCheck, Clock, Snowflake, BatteryCharging, Zap, Cog, Car, Droplet, Disc, Settings } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Auto Repair Services — A Plus Auto Repair, Houston" },
      { name: "description", content: "Diagnostics, brakes, engine, transmission, AC, electrical, scheduled maintenance and more. Full-service auto repair in Houston, TX." },
      { property: "og:title", content: "Services — A Plus Auto Repair" },
      { property: "og:description", content: "Full-service auto repair in Houston, TX." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Gauge, t: "Computer Diagnostics", d: "Modern OBD-II scan tools paired with decades of pattern recognition. We find root causes, not just codes." },
  { icon: Disc, t: "Brakes & Rotors", d: "Pads, rotors, calipers, brake fluid flush. Stopping power restored — safely and at a fair price." },
  { icon: Wrench, t: "Engine Repair", d: "Timing belts, head gaskets, valve covers, full rebuilds. Quality parts and meticulous workmanship." },
  { icon: Cog, t: "Transmission Service", d: "Fluid services, leaks, shift issues, and rebuilds. We diagnose first to avoid unnecessary replacements." },
  { icon: Snowflake, t: "AC & Heating", d: "Cold air restored. Recharge, leak detection, compressor replacement — Houston summers handled." },
  { icon: BatteryCharging, t: "Battery & Starting", d: "Batteries, alternators, starters tested and replaced. Free battery checks in our parking lot." },
  { icon: Zap, t: "Electrical Systems", d: "Wiring, sensors, lights, modules. The kind of problems other shops give up on — we trace them down." },
  { icon: Droplet, t: "Oil & Fluid Services", d: "Conventional, synthetic-blend, and full-synthetic oil changes. Coolant, brake, transmission, and power-steering flushes." },
  { icon: Car, t: "Suspension & Steering", d: "Struts, shocks, control arms, tie rods, alignments. Smooth ride and predictable handling." },
  { icon: ShieldCheck, t: "Pre-Purchase Inspections", d: "Buying used? Bring it by. We'll tell you what's actually under that paint job." },
  { icon: Clock, t: "Scheduled Maintenance", d: "Manufacturer-recommended service intervals — so small things stay small things." },
  { icon: Settings, t: "Tune-Ups", d: "Spark plugs, ignition coils, air & fuel filters. Restored power and fuel economy." },
];

function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Every repair your car will ever need — done honestly."
        subtitle="From a 20-minute oil change to a full engine rebuild. All makes, all models, all done with the same care."
      />

      <section className="container-luxe py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <article key={s.t} className="card-luxe p-7 hover:border-[var(--ember)] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--ember)]/10 text-[var(--ember)] mb-5">
                <s.icon className="size-5" />
              </div>
              <h2 className="text-lg font-semibold mb-2">{s.t}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-luxe py-16">
        <div className="card-luxe p-10 md:p-14 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <p className="eyebrow mb-4">How it works</p>
            <h2 className="display-lg">Three steps, no surprises.</h2>
          </div>
          <ol className="md:col-span-2 space-y-6">
            {[
              { n: "01", h: "Bring it in or call ahead", p: "Schedule by phone or just stop by. We'll get you on the lift quickly." },
              { n: "02", h: "Honest diagnosis & written estimate", p: "We inspect, explain, and quote — in plain English. No work begins without your okay." },
              { n: "03", h: "Quality repair, guaranteed", p: "Repairs done right with quality parts, backed by our warranty on parts and labor." },
            ].map((s) => (
              <li key={s.n} className="flex gap-5 pb-6 border-b border-[var(--hairline)] last:border-0 last:pb-0">
                <span className="font-mono text-[var(--ember)] text-sm pt-1">{s.n}</span>
                <div>
                  <h3 className="font-semibold mb-1">{s.h}</h3>
                  <p className="text-muted-foreground text-sm">{s.p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
