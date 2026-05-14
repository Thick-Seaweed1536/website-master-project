import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { SITE } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-[var(--hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-[var(--gradient-ember)] text-[var(--ember-foreground)] font-display font-bold text-lg shadow-[var(--shadow-glow)]">
            A+
          </span>
          <span className="font-display font-semibold tracking-tight text-[15px]">
            A Plus <span className="text-muted-foreground font-normal">Auto Repair</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {SITE.nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={SITE.phoneHref} className="hidden sm:inline-flex btn-ember text-xs py-2.5 px-4">
            <Phone className="size-3.5" /> {SITE.phone}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-[var(--hairline)]"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--hairline)] bg-background/95 backdrop-blur-xl">
          <div className="container-luxe py-4 flex flex-col">
            {SITE.nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm border-b border-[var(--hairline)] last:border-0"
              >
                {n.label}
              </Link>
            ))}
            <a href={SITE.phoneHref} className="btn-ember mt-4 self-start">
              <Phone className="size-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
