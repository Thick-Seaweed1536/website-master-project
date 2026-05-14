import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import heroImg from "@/assets/hero-garage.jpg";
import shopImg from "@/assets/gallery-shop.jpg";
import diagImg from "@/assets/service-diagnostics.jpg";
import brakeImg from "@/assets/service-brakes.jpg";
import craftImg from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — A Plus Auto Repair, Houston" },
      { name: "description", content: "A look inside our Houston auto repair shop, the work we do, and the cars we keep on the road." },
      { property: "og:title", content: "Gallery — A Plus Auto Repair" },
      { property: "og:description", content: "Inside the shop." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const items = [
  { src: heroImg, alt: "Vehicle in repair bay", h: "Bay 01", t: "Diagnostics underway" },
  { src: shopImg, alt: "Shop floor", h: "The shop", t: "Bissonnet St, Houston" },
  { src: craftImg, alt: "Engine work", h: "Engine repair", t: "Hands-on, every time" },
  { src: diagImg, alt: "OBD-II diagnostics", h: "Scan tools", t: "Modern diagnostics" },
  { src: brakeImg, alt: "Brake assembly", h: "Brake service", t: "Stopping power restored" },
  { src: heroImg, alt: "Customer car detail", h: "After service", t: "Ready for the road" },
];

function GalleryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery"
        title="Inside the shop, on the lift, and back on the road."
        subtitle="A small look at what a typical day at A Plus Auto Repair looks like."
      />

      <section className="container-luxe py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <figure key={i} className="card-luxe overflow-hidden group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={it.src} alt={it.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={960} />
              </div>
              <figcaption className="p-5 flex items-center justify-between">
                <span className="font-medium text-sm">{it.h}</span>
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{it.t}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
