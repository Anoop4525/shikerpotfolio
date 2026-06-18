import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { projects } from "../data";

export default function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="03 — Selected Work"
        title="Projects & roles"
        subtitle="A mix of producing, writing and business building across creators, shows and documentaries."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.06}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/30"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-xs text-muted">
                  {p.tag}
                </span>
                <FiArrowUpRight className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <div className="mt-12">
                <h3 className="font-display text-2xl font-600">{p.title}</h3>
                <p className="mt-1 text-sm text-accent/80">{p.category}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.description}</p>
                <div className="mt-5 border-t border-line pt-4 text-xs uppercase tracking-[0.15em] text-muted">
                  {p.meta}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
