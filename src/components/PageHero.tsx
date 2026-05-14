import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--hairline)]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-radial-ember)" }}
      />
      <div className="container-luxe relative pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="eyebrow mb-5 animate-float-up">{eyebrow}</p>
        <h1 className="display-xl max-w-4xl animate-float-up" style={{ animationDelay: "0.05s" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-float-up" style={{ animationDelay: "0.1s" }}>
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 animate-float-up" style={{ animationDelay: "0.15s" }}>{children}</div>}
      </div>
    </section>
  );
}
