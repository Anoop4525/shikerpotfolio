import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { skills, languages } from "../data";

export default function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01 — About"
        title="The story behind the work"
        subtitle="From inside sales to founding a company to leading a writers' room — a track record of building around content."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3" delay={0.05}>
          <div className="h-full rounded-3xl border border-line bg-surface p-8 sm:p-10">
            <p className="font-display text-2xl leading-relaxed font-500 sm:text-3xl">
              I write stories, produce video, and build the business that lets that work
              <span className="text-muted"> reach people and pay for itself.</span>
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              I have led a writing team, produced a show averaging 800K views, shot a
              documentary series on the ground, and run brand deals and sponsorships. I have
              also founded a company and managed its operations end to end. I move comfortably
              between the creative and the commercial.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-2" delay={0.12}>
          <div className="flex h-full flex-col gap-6 rounded-3xl border border-line bg-surface p-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-surface-2 px-3 py-1.5 text-sm text-accent/90 transition-colors hover:border-accent/40"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-auto border-t border-line pt-6">
              <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Languages</h3>
              <div className="mt-4 space-y-3">
                {languages.map((l) => (
                  <div key={l.name} className="flex items-center justify-between text-sm">
                    <span className="text-accent">{l.name}</span>
                    <span className="text-muted">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
