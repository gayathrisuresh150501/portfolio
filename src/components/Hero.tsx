import { useTypewriter } from "../hooks/useTypewriter";

export default function Hero() {
  const phrases = [
    "Backend Engineer. Systems Thinker.",
    "Go Specialist. Performance Obsessed.",
    "Building systems that scale.",
    "Architecting for reliability.",
    "Optimizing for speed & efficiency.",
  ];

  const text = useTypewriter(phrases);

  return (
    <section
      id="about"
      className="pt-20 pb-8 px-6 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1 animate-slide-in-left">
          <p className="font-mono text-accent mb-2 text-glow">
            Hi, this is
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Gayathri Suresh.
          </h1>

          <h2 className="font-mono text-2xl mb-6">
            <span className="text-gray-600 dark:text-gray-400 font-semibold">{text}</span>
            <span className="ml-1 text-accent animate-pulse" aria-hidden>
              |
            </span>
          </h2>

          <p className="max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            I'm a Software Engineer specializing in Golang and backend architectures. Currently optimizing microservices and engineering high-performance solutions. MBA candidate with a knack for technical leadership.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-accent text-cyber-bg font-mono font-bold rounded-sm hover:bg-accent/90 transition-all duration-300 text-center hover-lift"
            >
              Check out my work →
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent font-mono font-bold rounded-sm hover:bg-accent hover:text-white dark:hover:text-cyber-bg transition-all duration-300 text-center flex items-center justify-center gap-2 hover-lift"
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
          </div>

          <div className="flex items-center gap-4">
            <a
              href={import.meta.env.VITE_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group transition-all duration-300 transform hover:scale-110 hover-lift"
            >
              <svg className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56 4.56-1.53 7.84-5.87 7.84-10.98C23.5 5.74 18.27.5 12 .5z" />
              </svg>
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group transition-all duration-300 transform hover:scale-110 hover-lift"
            >
              <svg className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98ZM9.5 8.98H13v1.65h.05c.49-.93 1.68-1.9 3.45-1.9 3.69 0 4.37 2.43 4.37 5.6V21h-3.96v-5.43c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9.5V8.98Z" />
              </svg>
            </a>
            <a
              href={import.meta.env.VITE_LEETCODE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="group transition-all duration-300 transform hover:scale-110 hover-lift"
            >
              <svg className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
              </svg>
            </a>
            <a
              href={import.meta.env.VITE_GMAIL_COMPOSE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="group transition-all duration-300 transform hover:scale-110 hover-lift"
            >
              <svg className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
              </svg>
            </a>
            <a
              href={import.meta.env.VITE_TEL_URL}
              aria-label="Phone"
              className="group transition-all duration-300 transform hover:scale-110 hover-lift"
            >
              <svg className="w-7 h-7 text-gray-600 dark:text-gray-300 group-hover:text-accent transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Headshot */}
        <div className="flex-shrink-0 animate-slide-in-right">
          <div
            className="
              w-72 h-72 md:w-80 md:h-80
              rounded-full
              border-4 border-accent
              overflow-hidden
              animate-glow
              transition-all duration-300
              hover:scale-105
            "
          >
            <img
              src="/headshot.png"
              alt="Gayathri Suresh"
              loading="lazy"
              className="
                w-full h-full
                object-cover
                object-bottom
                scale-[3.25]
                -translate-x-[15%]
                translate-y-[30%]
                transition-all duration-300
                hover:grayscale
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
