const LINKS = {
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_GMAIL_COMPOSE_URL,
  phone: import.meta.env.VITE_TEL_URL,
  github: import.meta.env.VITE_GITHUB_URL,
};

export default function Contact() {
  return (
    <section id="contact" className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="font-mono text-accent mb-6 text-3xl font-bold">
        # Contact
      </h2>

      <div className="flex items-center gap-5">
        {/* LinkedIn */}
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn"
          className="text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 8.98h3.96V21H3V8.98ZM9.5 8.98H13v1.65h.05c.49-.93 1.68-1.9 3.45-1.9 3.69 0 4.37 2.43 4.37 5.6V21h-3.96v-5.43c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9.5V8.98Z" />
          </svg>
        </a>

        {/* Email (Gmail compose) */}
        <a
          href={LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
          className="text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
          </svg>
        </a>

        {/* Phone */}
        <a
          href={LINKS.phone}
          aria-label="Call phone number"
          className="text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
          </svg>
        </a>
        {/* GitHub */}
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub"
          className="text-black dark:text-white hover:opacity-80 transition-opacity"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.11 3.29 9.45 7.86 10.98.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.29-1.71-1.29-1.71-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.68.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56 4.56-1.53 7.84-5.87 7.84-10.98C23.5 5.74 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
