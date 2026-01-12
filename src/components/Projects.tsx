import { useState, useEffect } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Grid-Scale F1: 2D Racing Simulation Engine",
      timeline: "DEC 2025 — PRESENT",
      description:
        "A deterministic, event-sourced simulation engine with autonomous agents and a terminal renderer. Designed to simulate high-frequency racing scenarios with precise control over concurrency and state management. Implemented a custom TUI for real-time visualization of race events, leveraging Go's concurrency primitives to handle multiple agents and race conditions efficiently.",
      technologies: ["Golang", "Concurrency", "TUI", "Goroutines", "Channels"],
      github: "https://github.com/gayathrisuresh150501/event-driven-racing-sim",
    },
    {
      title: "Distributed Chaos Engineering Framework",
      timeline: "DEC 2025 — PRESENT",
      description:
        "Architected a custom fault-injection framework designed to stress-test distributed systems by simulating real-world infrastructure failures and network instability. Developed automated experiment modules to inject specific failure modes, including state-sync latency, process isolation failures, and deadlock scenarios.",
      technologies: [
        "Distributed Systems",
        "Chaos Engineering",
        "Fault Injection",
        "Testing",
      ],
      github: "https://github.com",
    },
    {
      title: "Portfolio Website",
      timeline: "Jan 2026",
      description:
        "A personal portfolio website with a terminal-inspired interface to showcase professional experience, projects, and skills. Implemented smooth in-page navigation, responsive layouts, dark/light theme toggling, and a collapsible system-tray style navbar. Focused on clean component structure, accessibility, and performance while keeping the frontend architecture intentionally simple.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Bun",
        "Vercel",
      ],
      github: "https://github.com/gayathrisuresh150501/portfolio",
    },
    {
      title: "AI Work Pattern Extension",
      timeline: "Jan 2026 - Present",
      description:
        "A modular browser extension backed by a Dockerized AI decision service that infers work-pattern anomalies from high-level activity signals and triggers contextual notifications. The extension captures user activity data, sends it to the AI service for analysis, and displays real-time alerts to help users maintain optimal work habits.",
      technologies: ["React", "TypeScript", "Go", "Browser Extension"],
      github: "https://github.com/gayathrisuresh150501/ai-work-pattern-extension",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, [projects.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section id="projects" className="py-12 px-6 max-w-6xl mx-auto">
      <h2
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className={`font-mono mb-8 text-3xl font-bold scroll-animate-left ${isVisible ? 'visible' : ''}`}
      >
        <span className="text-accent text-glow">#</span> <span className="text-gray-900 dark:text-white">Built & Shipped</span>
      </h2>

      <div className="relative flex items-center justify-center gap-6">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-cyber-light transition-colors border border-transparent hover:border-gray-300 dark:hover:border-accent hover-lift"
          aria-label="Previous project"
        >
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Project Card */}
        <div className="flex-1 max-w-2xl">
          <div className="p-6 card-cyber min-h-80 flex flex-col transition-all duration-300">
            <div className="mb-3 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    className="w-5 h-5 text-accent animate-float"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-accent dark:text-accent font-mono">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-500 dark:text-gray-400 font-mono mt-1">
                  {project.timeline}
                </p>
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 flex-shrink-0 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-accent transition-colors hover-lift"
                  aria-label="View on GitHub"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed flex-grow">
              {project.description}
            </p>

            {project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-cyber-darker text-gray-700 dark:text-gray-300 rounded-sm border border-gray-300 dark:border-cyber-light hover:border-gray-400 dark:hover:border-accent hover:text-gray-900 dark:hover:text-accent transition-all duration-150 hover-lift"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="flex-shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-cyber-light transition-colors border border-transparent hover:border-gray-300 dark:hover:border-accent hover-lift"
          aria-label="Next project"
        >
          <svg
            className="w-6 h-6 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center gap-2 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "bg-accent w-6"
                : "bg-gray-400 dark:bg-gray-600 w-2 hover:bg-accent"
            }`}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
