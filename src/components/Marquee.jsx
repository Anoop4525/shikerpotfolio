const words = [
  "Writing",
  "Video Production",
  "Content Strategy",
  "Business Management",
  "Editing",
  "Sales & Marketing",
  "Storytelling",
  "Brand Deals",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-soft py-6">
      <div className="flex w-max marquee-track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {words.map((w, i) => (
              <span key={`${dup}-${i}`} className="flex items-center">
                <span className="px-6 font-display text-2xl font-600 text-muted/70 sm:text-3xl">
                  {w}
                </span>
                <span className="text-accent/40">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-soft to-transparent" />
    </div>
  );
}
