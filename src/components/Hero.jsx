import { motion } from "framer-motion";
import { FiArrowDownRight, FiMapPin, FiDownload } from "react-icons/fi";
import { profile, stats } from "../data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-24 pb-20 sm:pt-28 lg:pt-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full" />
        <motion.div
          aria-hidden
          animate={{ y: [0, 30, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-10%] top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl"
        />
        <div className="absolute inset-0 opacity-[0.025] noise" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20"
      >
        {/* Left Content (Text) */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            variants={item}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-muted self-center lg:self-start"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            Available for long-term work
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[3.2rem] font-800 leading-[0.95] tracking-tight sm:text-[5.5rem] lg:text-[6.5rem] bg-gradient-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent"
          >
            {profile.name.split(" ")[0]}
            <br />
            <span className="bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">{profile.name.split(" ").slice(1).join(" ")}</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between w-full"
          >
            <p className="max-w-xl text-lg leading-relaxed text-gray-400">
              <span className="text-white font-medium">{profile.role}.</span> {profile.summary}
            </p>
          </motion.div>

          {/* stats */}
          <motion.div
            variants={item}
            className="mt-16 w-full grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4 shadow-xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-surface p-6 flex flex-col justify-center items-center lg:items-start transition-colors hover:bg-surface-2">
                <div className="font-display text-3xl font-700 sm:text-4xl text-white">{s.value}</div>
                <div className="mt-1 text-xs leading-snug text-gray-400 text-center lg:text-left">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div variants={item} className="w-full max-w-sm shrink-0 lg:max-w-md flex flex-col gap-6">
          <div className="relative group">
            <div className="absolute inset-0 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl z-20" />
            <img
              src="https://i.ibb.co/hJxC36z9/black.png"
              alt={profile.name}
              className="relative w-full z-10 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex shrink-0 flex-col gap-3 items-center lg:items-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FiMapPin /> {profile.location}
            </div>
            <a
              href="/resume.pdf"
              download="Shikhar_Yadav_Resume.pdf"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-600 text-black transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
            >
              Download Resume
              <FiDownload className="transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
