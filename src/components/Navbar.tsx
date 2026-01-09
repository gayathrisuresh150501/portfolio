import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
    { label: "Blogs", comingSoon: true },
    { label: "Bookshelf", comingSoon: true },
  ];

  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        w-full
        bg-black/70
        backdrop-blur
        border-b border-gray-800
      "
    >
      {/* FULL-WIDTH BAR */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT: CLI Logo */}
        <div className="font-mono text-accent select-none">
          &gt;_ GS_
        </div>

        {/* RIGHT: Controls */}
        <div className="relative flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center gap-1.5
              font-mono text-sm
              text-gray-300
              hover:text-accent
              transition
            "
          >
            Resume
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v10m0 0l-4-4m4 4l4-4M5 19h14"
              />
            </svg>
          </a>
          <ThemeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
            className="
              p-2 rounded-md
              hover:bg-gray-800
              transition
            "
          >
            <div className="flex flex-col gap-1">
              <span className="w-4 h-px bg-accent" />
              <span className="w-4 h-px bg-accent" />
              <span className="w-4 h-px bg-accent" />
            </div>
          </button>

          {/* System Tray */}
          {open && (
            <div
              className="
                absolute right-0 top-full mt-2
                w-52
                rounded-md
                bg-black
                border border-gray-800
                shadow-xl
              "
            >
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.comingSoon ? (
                      <span
                        className="
                          block px-4 py-2
                          font-mono text-sm italic
                          text-gray-500
                        "
                      >
                        {item.label} · soon
                      </span>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="
                          block px-4 py-2
                          font-mono text-sm
                          text-gray-300
                          hover:bg-gray-800
                          hover:text-accent
                          transition
                        "
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
