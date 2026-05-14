import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import aboutImg from "@/assets/about-craft.jpg";
import { ShieldCheck, HeartHandshake, Wrench, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A Plus Auto Repair, Houston" },
      { name: "description", content: "Meet Shaji and the A Plus Auto Repair team — honest, ethical mechanics serving Houston drivers from 13001 Bissonnet St." },
      { property: "og:title", content: "About A Plus Auto Repair" },
      { property: "og:description", content: "Honest, ethical auto repair in Houston since day one." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, h: "Honesty over revenue", p: "If your car doesn't need it, we won't recommend it. Full stop." },
  { icon: HeartHandshake, h: "Customers, not transactions", p: "Most of our work is repeat business and referrals. We earned every one." },
  { icon: Wrench, h: "Craft over speed", p: "We'd rather take an extra hour and do it once than rush and do it twice." },
  { icon: Sparkles, h: "Plain-English answers", p: "No jargon. We'll show you the part, explain the issue, and respect your decision." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About the shop"
        title="A small shop with a long memory."
        subtitle="A Plus Auto Repair was built on a simple idea: treat every car like it belongs to a friend. Today, that idea has earned us a 4.7-star reputation and a following of customers who'd drive five hours rather than trust anyone else."
      />

      <section className="container-luxe py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="card-luxe overflow-hidden aspect-[4/5]">
          <img src={aboutImg} alt="Master mechanic at work" className="h-full w-full object-cover" loading="lazy" width={1080} height={1350} />
        </div>
        <div>
          <p className="eyebrow mb-4">The story</p>
          <h2 className="display-lg mb-6">Run by Shaji. Trusted by Houston.</h2>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>For years, drivers across Houston have walked through our doors carrying quotes from big-name shops — quotes for repairs they didn't need at prices they couldn't justify.</p>
            <p>Our answer has always been the same: pop the hood, look honestly, and tell the customer the truth. Sometimes the answer is "you don't need anything." Sometimes it's a real repair done at a fair price. Either way, you leave knowing what's actually going on with your car.</p>
            <p className="text-foreground italic">"You can blindly trust them." — Rishi Singh, Google review</p>
          </div>
        </div>
      </section>

      <section className="container-luxe py-24">
        <p className="eyebrow mb-4">What we believe</p>
        <h2 className="display-lg max-w-3xl mb-14">Four things we won't compromise on.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.h} className="card-luxe p-7">
              <v.icon className="size-6 text-[var(--ember)] mb-5" />
              <h3 className="font-semibold mb-2">{v.h}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.p}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe py-24">
        <div className="card-luxe p-10 md:p-14 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4">A standing invitation</p>
          <h2 className="display-lg mb-5">Bring us a quote you don't trust.</h2>
          <p className="text-muted-foreground mb-8">We'll inspect your car for free and tell you straight. That's how most of our long-term customers found us.</p>
          <Link to="/contact" className="btn-ember">Request a free second opinion</Link>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
