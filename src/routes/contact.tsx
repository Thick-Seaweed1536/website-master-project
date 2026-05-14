import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote — A Plus Auto Repair, Houston" },
      { name: "description", content: "Call (281) 530-7574 or request a free auto repair quote. 13001 Bissonnet St, Houston, TX 77099." },
      { property: "og:title", content: "Contact A Plus Auto Repair" },
      { property: "og:description", content: "Request a free auto repair quote in Houston, TX." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(120).optional().or(z.literal("")),
  vehicle: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a bit about the issue").max(1000),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title="Tell us about your car. We'll do the rest."
        subtitle="Send a quick message or call directly — we usually answer the phone before the third ring."
      />

      <section className="container-luxe py-20 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 card-luxe p-8 md:p-10">
          {submitted ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="size-12 text-[var(--ember)] mx-auto mb-5" />
              <h2 className="display-lg mb-3">Message received.</h2>
              <p className="text-muted-foreground">We'll get back to you shortly. For urgent issues, call <a href={SITE.phoneHref} className="text-[var(--ember)]">{SITE.phone}</a>.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5">
              <h2 className="font-display text-2xl font-semibold mb-2">Request a free quote</h2>
              <p className="text-sm text-muted-foreground mb-6">No obligations, no spam. We'll review and respond personally.</p>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Your name" name="name" error={errors.name} required />
                <Field label="Phone" name="phone" type="tel" error={errors.phone} required />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Email (optional)" name="email" type="email" error={errors.email} />
                <Field label="Vehicle (year / make / model)" name="vehicle" error={errors.vehicle} />
              </div>
              <Field label="What's going on with your car?" name="message" textarea error={errors.message} required />

              <button type="submit" className="btn-ember w-full md:w-auto">Send request</button>
              <p className="text-xs text-muted-foreground">By submitting you agree to be contacted about your inquiry. We never share your info.</p>
            </form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-6">
          <div className="card-luxe p-7">
            <h3 className="font-semibold mb-5">Reach us directly</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><Phone className="size-5 text-[var(--ember)] shrink-0" /><a href={SITE.phoneHref} className="hover:text-[var(--ember)] transition-colors">{SITE.phone}</a></li>
              <li className="flex gap-3"><MapPin className="size-5 text-[var(--ember)] shrink-0" /><span>{SITE.address}</span></li>
              <li className="flex gap-3"><Clock className="size-5 text-[var(--ember)] mt-0.5 shrink-0" /><div>{SITE.hours.map(h => <div key={h.day}><span className="text-foreground">{h.day}</span> <span className="text-muted-foreground">· {h.time}</span></div>)}</div></li>
              <li className="flex gap-3"><Mail className="size-5 text-[var(--ember)] shrink-0" /><span className="text-muted-foreground">Use the form — we reply quickly</span></li>
            </ul>
          </div>
          <div className="card-luxe overflow-hidden h-[300px]">
            <iframe
              title="A Plus Auto Repair location map"
              src="https://www.google.com/maps?q=13001+Bissonnet+St,+Houston,+TX+77099&output=embed"
              className="w-full h-full border-0 grayscale-[0.4] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", textarea, error, required }: { label: string; name: string; type?: string; textarea?: boolean; error?: string; required?: boolean }) {
  const cls = "w-full rounded-lg border border-[var(--hairline)] bg-background/40 px-4 py-3 text-sm focus:border-[var(--ember)] focus:outline-none focus:ring-1 focus:ring-[var(--ember)] transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-2 block">{label}{required && <span className="text-[var(--ember)]"> *</span>}</span>
      {textarea ? (
        <textarea name={name} rows={5} className={cls} maxLength={1000} />
      ) : (
        <input name={name} type={type} className={cls} maxLength={120} />
      )}
      {error && <span className="text-xs text-destructive mt-1.5 block">{error}</span>}
    </label>
  );
}
