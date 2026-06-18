import { useState } from "react";
import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Reveal from "./Reveal";
import { Section, SectionHeading } from "./Section";
import { reels, profile } from "../data";
import ReelModal from "./ReelModal";

export default function Reels() {
  const [active, setActive] = useState(null);

  return (
    <Section id="reels">
      <SectionHeading
        index="04 — Watch"
        title="Project & documentary videos"
        subtitle="Brand films, documentary cuts and show highlights — all published on Instagram. Tap any reel to watch."
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {reels.map((r, i) => (
          <Reveal key={r.title} delay={(i % 6) * 0.05}>
            <motion.button
              type="button"
              onClick={() => setActive(r)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative block w-full aspect-[9/16] overflow-hidden rounded-2xl border border-line bg-surface text-left"
            >
              {/* animated gradient backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-surface-2 via-ink-soft to-ink" />
              <motion.div
                aria-hidden
                animate={{ opacity: [0.15, 0.4, 0.15] }}
                transition={{ duration: 6, repeat: Infinity, delay: i * 0.4 }}
                className="absolute -inset-1 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]"
              />

              <div className="absolute right-3 top-3 text-muted transition-colors group-hover:text-accent">
                <FaInstagram size={18} />
              </div>

              {/* play button */}
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-ink">
                  <FiPlay className="ml-0.5" size={18} />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink to-transparent p-3">
                <p className="text-sm font-600 leading-tight">{r.title}</p>
                <p className="mt-0.5 text-xs text-muted">{r.meta}</p>
              </div>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href={profile.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-600 transition-colors hover:border-accent/40"
        >
          <FaInstagram /> See all videos on Instagram
        </a>
      </Reveal>

      <ReelModal reel={active} onClose={() => setActive(null)} />
    </Section>
  );
}
