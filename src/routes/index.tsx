import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Star, ShieldCheck, Wrench, Gauge, Clock, MapPin, Quote, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-garage.jpg";
import diagImg from "@/assets/service-diagnostics.jpg";
import brakeImg from "@/assets/service-brakes.jpg";
import { SITE } from "@/lib/site";
import { CTASection } from "@/components/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Plus Auto Repair — Honest Mechanics in Houston, TX" },
      { name: "description", content: "Houston's most trusted independent auto repair shop on Bissonnet St. Honest diagnostics, fair pricing, and 4.7★ from 141+ reviews. Call (281) 530-7574." },
      { property: "og:title", content: "A Plus Auto Repair — Honest Mechanics in Houston" },
      { property: "og:description", content: "The honest second opinion Houston drivers trust." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: Gauge, title: "Diagnostics", desc: "We find the actual cause — not the easiest thing to replace." },
  { icon: Wrench, title: "Engine & Transmission", desc: "From timing belts to full rebuilds, done right the first time." },
  { icon: ShieldCheck, title: "Brakes & Suspension", desc: "Pads, rotors, struts, alignment — safety work we'd trust on our own kids' cars." },
  { icon: Clock, title: "Scheduled Maintenance", desc: "Oil, fluids, tune-ups. Keep your car running like new for years." },
];

const trust = [
  { stat: "4.7★", label: "Google rating" },
  { stat: "141+", label: "Happy customers" },
  { stat: "20+", label: "Years on Bissonnet" },
  { stat: "100%", label: "Honest quotes" },
];

const reviews = [
  { name: "Shaun", text: "A car mechanic who is honest and trustworthy. They're a myth — until you meet Shaji. If I have a major repair and he's within a 5-hour drive, he's the only one touching my car. 6 stars.", role: "Repeat customer · 4 years" },
  { name: "Jatin Sahney", text: "He will not make you overspend. I have been scared by big-name shops, but Shaji checked the car and only repaired what was truly needed. Cars running well 3-4 years later. He is my go-to guy.", role: "Loyal customer" },
  { name: "Sandip Bhattacharya", text: "The most honest, ethical person. He gave me the real dirty details and empowered me to make my own decision. You got a new customer for good, sir.", role: "New customer" },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Premium car in A Plus Auto Repair workshop" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>

        <div className="container-luxe relative pt-20 pb-28 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] bg-background/50 backdrop-blur-md px-3 py-1.5 text-xs animate-float-up">
              <Star className="size-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              <span className="font-medium">{SITE.rating}</span>
              <span className="text-muted-foreground">· {SITE.reviewCount} Google reviews · Houston, TX</span>
            </div>

            <h1 className="display-xl mt-6 animate-float-up" style={{ animationDelay: "0.05s" }}>
              The honest mechanic <br />
              <span className="text-[var(--ember)]">Houston</span> drivers trust.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-float-up" style={{ animationDelay: "0.1s" }}>
              No upsells. No scare tactics. Just precise diagnostics and fair-priced repairs
              from Shaji and the team — quietly keeping Houston on the road since day one.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-float-up" style={{ animationDelay: "0.15s" }}>
              <a href={SITE.phoneHref} className="btn-ember">
                <Phone className="size-4" /> Call {SITE.phone}
              </a>
              <Link to="/contact" className="btn-ghost">
                Get a free quote <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground animate-float-up" style={{ animationDelay: "0.2s" }}>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[var(--ember)]" /> Free second opinions</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[var(--ember)]" /> Written estimate, no surprises</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="size-4 text-[var(--ember)]" /> All makes & models</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[var(--hairline)] bg-[var(--surface)]/40">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-4">
          {trust.map((t, i) => (
            <div key={t.label} className={`py-8 px-4 ${i !== 0 ? "md:border-l" : ""} ${i % 2 !== 0 ? "border-l" : ""} ${i >= 2 ? "border-t md:border-t-0" : ""} border-[var(--hairline)] text-center`}>
              <div className="font-display text-3xl md:text-4xl font-bold text-[var(--ember)]">{t.stat}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-luxe py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-10 mb-14 items-end">
          <div>
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="display-lg">Full-service repair, performed with the patience of someone who actually likes cars.</h2>
          </div>
          <p className="text-muted-foreground md:text-lg">
            From a quick oil change to a full engine rebuild — every job gets the same
            attention to detail. We diagnose first, explain in plain English, and only
            fix what genuinely needs fixing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div key={s.title} className="card-luxe p-7 group hover:border-[var(--ember)] transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--ember)]/10 text-[var(--ember)] mb-6 group-hover:bg-[var(--ember)] group-hover:text-[var(--ember-foreground)] transition-colors">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-[var(--ember)] hover:gap-3 transition-all">
            See every service we offer <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="container-luxe py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative card-luxe overflow-hidden aspect-[4/5] md:aspect-[5/6]">
          <img src={diagImg} alt="Modern automotive diagnostics in progress" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1280} height={960} />
        </div>
        <div>
          <p className="eyebrow mb-4">Why drivers stay for years</p>
          <h2 className="display-lg mb-6">We tell you what's wrong, then ask if you'd like us to fix it.</h2>
          <div className="space-y-5 text-muted-foreground">
            {[
              { h: "Diagnostics first, parts second", p: "Modern scan tools and decades of pattern recognition — so the fix is the actual fix." },
              { h: "Plain-English estimates", p: "No mystery line items. You'll know the part, the labor, and the why before we start." },
              { h: "Repairs that hold", p: "We use quality OEM-grade parts and stand behind the workmanship in writing." },
            ].map((f) => (
              <div key={f.h} className="flex gap-4">
                <div className="mt-1 h-2 w-2 rounded-full bg-[var(--ember)] shrink-0" />
                <div>
                  <p className="text-foreground font-medium">{f.h}</p>
                  <p className="text-sm">{f.p}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/about" className="btn-ghost mt-9">Meet the shop <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-luxe py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-4">In their own words</p>
            <h2 className="display-lg max-w-2xl">"You can blindly trust them."</h2>
          </div>
          <Link to="/reviews" className="btn-ghost">Read all reviews <ArrowRight className="size-4" /></Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <figure key={r.name} className="card-luxe p-7 flex flex-col">
              <Quote className="size-6 text-[var(--ember)] mb-5" />
              <blockquote className="text-[15px] leading-relaxed text-foreground/90 flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--hairline)]">
                <div className="flex items-center gap-1 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <div className="font-medium text-sm">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GUARANTEE / IMAGE BLOCK */}
      <section className="container-luxe py-24">
        <div className="card-luxe overflow-hidden grid md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            <img src={brakeImg} alt="Detailed brake assembly inspection" className="absolute inset-0 h-full w-full object-cover" loading="lazy" width={1280} height={960} />
          </div>
          <div className="p-10 md:p-14">
            <p className="eyebrow mb-4">Our guarantee</p>
            <h2 className="display-lg mb-5">If we wouldn't replace it on our own car, we won't recommend it on yours.</h2>
            <p className="text-muted-foreground mb-8">
              Every repair comes with a written estimate, a warranty on parts and labor,
              and a standing offer: bring back any concern and we'll make it right.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={SITE.phoneHref} className="btn-ember"><Phone className="size-4" /> Talk to Shaji</a>
              <Link to="/services" className="btn-ghost">Our services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* MAP / VISIT */}
      <section className="container-luxe py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow mb-4">Visit the shop</p>
            <h2 className="display-lg mb-6">13001 Bissonnet St,<br />Houston, TX 77099</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3"><MapPin className="size-5 text-[var(--ember)]" /> {SITE.address}</li>
              <li className="flex gap-3"><Phone className="size-5 text-[var(--ember)]" /> <a href={SITE.phoneHref}>{SITE.phone}</a></li>
              <li className="flex gap-3"><Clock className="size-5 text-[var(--ember)] mt-0.5" /><div>{SITE.hours.map(h => <div key={h.day}><span className="text-foreground">{h.day}</span> <span className="text-muted-foreground">· {h.time}</span></div>)}</div></li>
            </ul>
            <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn-ember mt-8">Open in Google Maps <ArrowRight className="size-4" /></a>
          </div>
          <div className="card-luxe overflow-hidden h-[380px]">
            <iframe
              title="A Plus Auto Repair location"
              src="https://www.google.com/maps?q=13001+Bissonnet+St,+Houston,+TX+77099&output=embed"
              className="w-full h-full border-0 grayscale-[0.4] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
