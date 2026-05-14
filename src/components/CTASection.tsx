import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export function CTASection() {
  return (
    <section className="container-luxe py-24">
      <div className="card-luxe relative overflow-hidden p-10 md:p-16 grain">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full"
          style={{ background: "var(--gradient-radial-ember)" }}
        />
        <div className="relative grid md:grid-cols-2 gap-10 items-end">
          <div>
            <p className="eyebrow mb-4">No pressure. No upsell.</p>
            <h2 className="display-lg">Get an honest second opinion before you spend a dollar.</h2>
          </div>
          <div className="space-y-4 md:text-right">
            <p className="text-muted-foreground">
              Bring us the quote you were given somewhere else. We'll inspect the car
              and tell you what's actually needed — that's it.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={SITE.phoneHref} className="btn-ember">
                <Phone className="size-4" /> Call {SITE.phone}
              </a>
              <Link to="/contact" className="btn-ghost">
                Request a quote <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
