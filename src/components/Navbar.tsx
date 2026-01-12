import { useState, useEffect, useRef } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // Close menu when scrolling
  useEffect(() => {
    function handleScroll() {
      if (open) {
        setOpen(false);
      }
    }

    if (open) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <nav
      className="
        fixed top-0 left-0 z-50
        w-full
        bg-white/90 dark:bg-cyber-dark/90
        backdrop-blur
        border-b border-gray-200 dark:border-accent/30
      "
      style={{ boxShadow: '0 4px 6px rgba(0, 217, 255, 0.1)' }}
    >
      {/* FULL-WIDTH BAR */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* LEFT: CLI Logo */}
        <div className="font-mono text-accent dark:text-accent select-none text-glow text-xl font-bold">
          &gt;_ GS_
        </div>

        {/* RIGHT: Controls */}
        <div ref={menuRef} className="relative flex items-center gap-4">
          <ThemeToggle />

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open navigation"
            className="
              p-2 rounded-md
              hover:bg-gray-100 dark:hover:bg-cyber-light
              border border-transparent hover:border-accent
              transition-all duration-300
              hover-lift
            "
          >
            <div className="flex flex-col gap-1">
              <span className="w-4 h-px bg-gray-700 dark:bg-white" />
              <span className="w-4 h-px bg-gray-700 dark:bg-white" />
              <span className="w-4 h-px bg-gray-700 dark:bg-white" />
            </div>
          </button>

          {/* System Tray */}
          {open && (
            <div
              className="
                absolute right-0 top-full mt-2
                w-52
                rounded-md
                bg-white dark:bg-cyber-dark
                border border-accent
                shadow-xl animate-slide-up
              "
              style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' }}
            >
              <ul className="py-2">
                {items.map((item) => (
                  <li key={item.label}>
                    {item.comingSoon ? (
                      <span
                        className="
                          block px-4 py-2
                          font-mono text-sm italic
                          text-gray-500 dark:text-gray-500
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
                          text-gray-700 dark:text-gray-300
                          hover:bg-gray-100 dark:hover:bg-cyber-light
                          hover:text-accent
                          transition-all duration-300
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
