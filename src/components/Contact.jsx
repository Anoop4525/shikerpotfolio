import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const items = [
    { icon: FiMail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FaInstagram, label: "Instagram", value: "View my videos", href: profile.instagram },
    { icon: FiMapPin, label: "Location", value: profile.location, href: null },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <span className="font-display text-sm text-muted">06 — Contact</span>
          <h2 className="mt-3 max-w-3xl font-display text-4xl font-700 leading-[1.05] tracking-tight sm:text-6xl">
            Let's build something
            <br />
            <span className="text-muted">worth watching.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Open to long-term roles in writing, content and business. If you are building a
            brand, a show or a story, I would love to talk.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {items.map((it) => {
              const Icon = it.icon;
              const content = (
                <motion.div
                  whileHover={{ y: -3 }}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink-soft p-5 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface-2">
                      <Icon />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.15em] text-muted">
                        {it.label}
                      </div>
                      <div className="mt-0.5 text-sm font-500 text-accent">{it.value}</div>
                    </div>
                  </div>
                  {it.href && (
                    <FiArrowUpRight className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  )}
                </motion.div>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {content}
                </a>
              ) : (
                <div key={it.label}>{content}</div>
              );
            })}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-600 text-ink transition-transform hover:-translate-y-0.5"
          >
            <FiMail /> Email me directly
          </a>
        </div>
      </Reveal>
    </section>
  );
}
