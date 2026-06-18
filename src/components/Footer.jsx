import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
        <div>
          <div className="font-display text-lg font-700">{profile.name}</div>
          <div className="text-sm text-muted">{profile.role}</div>
        </div>

        <div className="text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>

        <a
          href="#top"
          className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface transition-colors hover:border-accent/40"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
