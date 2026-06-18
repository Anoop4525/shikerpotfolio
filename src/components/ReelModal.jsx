import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiExternalLink } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { profile } from "../data";

// Turn an Instagram permalink into its embeddable URL.
function toEmbed(url) {
  if (!url) return null;
  const clean = url.split("?")[0].replace(/\/$/, "");
  return `${clean}/embed`;
}

export default function ReelModal({ reel, onClose }) {
  useEffect(() => {
    if (!reel) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [reel, onClose]);

  const embed = reel ? toEmbed(reel.url) : null;

  return (
    <AnimatePresence>
      {reel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-surface"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <div>
                <p className="text-sm font-600">{reel.title}</p>
                <p className="text-xs text-muted">{reel.meta}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-xl border border-line text-muted transition-colors hover:text-accent"
              >
                <FiX size={18} />
              </button>
            </div>

            {embed ? (
              <div className="aspect-[9/16] w-full bg-ink">
                <iframe
                  title={reel.title}
                  src={embed}
                  className="h-full w-full"
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative grid aspect-[9/16] place-items-center bg-gradient-to-br from-surface-2 via-ink-soft to-ink p-6 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
                <div className="relative">
                  <FaInstagram size={32} className="mx-auto text-muted" />
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    This video lives on Instagram. Open it to watch the full reel.
                  </p>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-600 text-ink"
                  >
                    <FiExternalLink /> Watch on Instagram
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
