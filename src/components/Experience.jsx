import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="02 — Experience"
        title="Where I've built"
        subtitle="Roles across content, production, sales and operations — most recently leading writing and business for a major creator."
      />

      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-line md:left-[180px] md:block" />

        <div className="space-y-4">
          {experience.map((job, i) => (
            <Reveal key={job.company + i} delay={i * 0.04}>
              <motion.div
                whileHover={{ scale: 1.005 }}
                className="group relative grid gap-4 rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/30 sm:p-8 md:grid-cols-[160px_1fr] md:gap-10"
              >
                <div className="text-sm font-500 text-muted">{job.period}</div>

                {/* node */}
                <span className="absolute left-[176px] top-9 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent ring-4 ring-ink md:block" />

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-600 sm:text-2xl">{job.role}</h3>
                      <p className="mt-1 text-sm text-muted">{job.company}</p>
                    </div>
                    <FiArrowUpRight className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
