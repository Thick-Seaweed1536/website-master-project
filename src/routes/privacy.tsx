import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — A Plus Auto Repair" },
      { name: "description", content: "How A Plus Auto Repair collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:description", content: "Privacy policy for A Plus Auto Repair." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: 2026" />

      <section className="container-luxe py-16 max-w-3xl">
        <article className="prose prose-invert space-y-6 text-muted-foreground leading-relaxed">
          <Section h="What we collect">
            We collect only the information you give us directly — your name, phone number, optional email, vehicle details, and the message you send through our contact form. We do not sell or share your information with third parties.
          </Section>
          <Section h="How we use it">
            We use your information solely to respond to your inquiry, schedule service, and follow up on completed work. Phone numbers may be used for appointment reminders.
          </Section>
          <Section h="Cookies & analytics">
            Our website uses minimal technical cookies required for the site to function. We may collect anonymized usage statistics to improve the site.
          </Section>
          <Section h="Embedded content">
            Pages on this site may include embedded content (e.g. Google Maps). Embedded content from other sites behaves as if you visited the other site directly.
          </Section>
          <Section h="Your rights">
            You may request that we delete any personal information we hold about you by contacting us at (281) 530-7574 or via the contact form.
          </Section>
          <Section h="Contact">
            A Plus Auto Repair LLC · 13001 Bissonnet St, Houston, TX 77099 · (281) 530-7574
          </Section>
        </article>
      </section>
    </div>
  );
}

function Section({ h, children }: { h: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-foreground mb-2">{h}</h2>
      <p>{children}</p>
    </div>
  );
}
