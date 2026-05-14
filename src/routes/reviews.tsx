import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Star, Quote } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — A Plus Auto Repair, Houston" },
      { name: "description", content: "Read what Houston drivers say about A Plus Auto Repair. 4.7★ from 141+ Google reviews." },
      { property: "og:title", content: "Reviews — A Plus Auto Repair" },
      { property: "og:description", content: "Real reviews from real Houston drivers." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const reviews = [
  { name: "Rishi Singh", rating: 5, when: "7 months ago", text: "Very professional and very honest folks! You can blindly trust them!" },
  { name: "Sandip Bhattacharya", rating: 5, when: "3 years ago", text: "The most honest best person is Shaji and he runs his business so ethically. Long story short, he provided me the 'real dirty details' and empowered me in making my decision! You got a new customer for good, sir, much appreciated." },
  { name: "Jatin Sahney", rating: 5, when: "4 years ago", text: "Excellent place. Shaji is very knowledgeable and trusting. He will not make you overspend and repair where truly needed. I have been scared by so many big name auto repair shops but when I went to Shaji for second opinion he checked the car and made repairs only on absolute needed stuff. Cars running well since 3-4 years. He is my go to guy for auto repairs." },
  { name: "Shaun", rating: 5, when: "4 years ago", text: "Such person is not supposed to exist — a car/auto mechanic who is honest, trustworthy. They're a myth. They just don't exist. Glad to have found the first mechanic who shatters this myth. Folks, meet Shaji. Yes, he's real. If I have a major car service/repair and he's within a 5 hour drive (yes, you heard me right the first time), he's the only one touching my car. 6 stars." },
];

function ReviewsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Reviews"
        title="141+ Houston drivers, one verdict: trust him."
        subtitle="A 4.7-star reputation built one honest repair at a time. Here's what real customers wrote on Google."
      >
        <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn-ember">See all Google reviews</a>
      </PageHero>

      <section className="container-luxe py-20">
        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <figure key={r.name} className="card-luxe p-8">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} className="size-4 fill-[var(--gold)] text-[var(--gold)]" />)}
                </div>
                <span className="text-xs text-muted-foreground">{r.when}</span>
              </div>
              <Quote className="size-6 text-[var(--ember)] mb-4" />
              <blockquote className="text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-[var(--hairline)] text-sm font-medium">— {r.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-muted-foreground mb-5">Have we worked on your car? We'd love to hear from you.</p>
          <a href={SITE.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost">Leave a Google review</a>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
