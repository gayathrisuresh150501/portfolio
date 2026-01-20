export interface Project {
  title: string;
  timeline: string;
  description: string;
  technologies: string[];
  github?: string;
}

export const projects: Project[] = [
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
    github: "https://github.com/gayathrisuresh150501/racing-chaos-engineering",
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
