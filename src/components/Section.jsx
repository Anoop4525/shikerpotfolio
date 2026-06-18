import Reveal from "./Reveal";

export function SectionHeading({ index, title, subtitle }) {
  return (
    <Reveal>
      <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="font-display text-sm text-muted">{index}</span>
          <h2 className="mt-2 font-display text-4xl font-700 tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="max-w-md text-sm leading-relaxed text-muted">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}

export function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-24 ${className}`}>
      {children}
    </section>
  );
}
