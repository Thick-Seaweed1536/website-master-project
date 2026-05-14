import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — A Plus Auto Repair, Houston" },
      { name: "description", content: "Common questions about pricing, warranty, second opinions, and how we work at A Plus Auto Repair in Houston." },
      { property: "og:title", content: "Frequently Asked Questions" },
      { property: "og:description", content: "Honest answers to common questions." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }),
    }],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Do you give free estimates?", a: "Yes. Bring your car in or describe the issue over the phone and we'll provide a clear written estimate before any work begins." },
  { q: "Will you give me a second opinion on a quote from another shop?", a: "Absolutely — and most often it doesn't cost you a thing. A lot of our long-term customers found us this way." },
  { q: "What kinds of vehicles do you service?", a: "All makes and models, foreign and domestic. From everyday commuters to luxury vehicles." },
  { q: "Do you warranty your work?", a: "Yes. Repairs come with a written warranty on parts and labor. If something isn't right, we make it right." },
  { q: "How do I schedule an appointment?", a: "The fastest way is calling (281) 530-7574. You can also use the contact form on our website." },
  { q: "Where are you located?", a: "13001 Bissonnet St, Houston, TX 77099 — easy to find with plenty of parking." },
  { q: "What are your hours?", a: "Monday through Friday 9:00 AM – 5:00 PM, Saturday 9:00 AM – 2:00 PM. Closed Sunday." },
  { q: "Do you offer payment options?", a: "Yes, we accept all major payment methods. Ask us about options when you bring your vehicle in." },
];

function FAQPage() {
  return (
    <div>
      <PageHero
        eyebrow="FAQ"
        title="Honest answers to common questions."
        subtitle="Don't see your question? Call us — we'd rather have a real conversation."
      />

      <section className="container-luxe py-20 max-w-3xl">
        <div className="space-y-3">
          {faqs.map((f, i) => <Item key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-luxe overflow-hidden">
      <button onClick={() => setOpen(v => !v)} className="w-full p-6 flex items-center justify-between text-left gap-6">
        <span className="font-medium">{q}</span>
        {open ? <Minus className="size-4 text-[var(--ember)] shrink-0" /> : <Plus className="size-4 text-[var(--ember)] shrink-0" />}
      </button>
      {open && <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
