import { FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading index="05 — Education" title="Foundations" />

      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <div className="flex h-full items-start gap-5 rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/30">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2">
                <FiBookOpen />
              </span>
              <div>
                <span className="text-xs uppercase tracking-[0.15em] text-muted">
                  {e.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-600">{e.title}</h3>
                <p className="mt-1 text-sm text-muted">{e.place}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
