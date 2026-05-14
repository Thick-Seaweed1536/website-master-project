import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-[var(--hairline)]">
      <div className="container-luxe py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--gradient-ember)] text-[var(--ember-foreground)] font-display font-bold">
              A+
            </span>
            <span className="font-display font-semibold">A Plus Auto Repair</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Houston's most trusted independent auto repair shop. Honest diagnostics,
            precision work, and a guarantee in writing — since the very first wrench turn.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--hairline)] px-3 py-1.5 text-xs">
            <Star className="size-3.5 fill-[var(--gold)] text-[var(--gold)]" />
            <span className="font-medium">{SITE.rating}</span>
            <span className="text-muted-foreground">·  {SITE.reviewCount} Google reviews</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Visit</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="size-4 text-[var(--ember)] mt-0.5 shrink-0" /><span>{SITE.address}</span></li>
            <li className="flex gap-2"><Phone className="size-4 text-[var(--ember)] mt-0.5 shrink-0" /><a href={SITE.phoneHref}>{SITE.phone}</a></li>
            <li className="flex gap-2"><Clock className="size-4 text-[var(--ember)] mt-0.5 shrink-0" /><div>
              {SITE.hours.map((h) => (
                <div key={h.day} className="text-muted-foreground"><span className="text-foreground">{h.day}</span> · {h.time}</div>
              ))}
            </div></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm">
            {SITE.nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-[var(--ember)] transition-colors">{n.label}</Link>
              </li>
            ))}
            <li><Link to="/privacy" className="text-muted-foreground hover:text-[var(--ember)] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--hairline)]">
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</p>
          <p className="font-mono tracking-wider">HOUSTON · TX · 77099</p>
        </div>
      </div>
    </footer>
  );
}
