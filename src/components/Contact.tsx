const LINKS = {
  linkedin: import.meta.env.VITE_LINKEDIN_URL,
  email: import.meta.env.VITE_GMAIL_COMPOSE_URL,
  phone: import.meta.env.VITE_TEL_URL,
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
      </div>
    </section>
  );
}
