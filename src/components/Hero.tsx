import { useEffect, useState } from "react";

export default function Hero() {
  const phrases = [
    "I'm a Software Engineer.",
    "I specialize in Golang.",
    "I build scalable distributed systems.",
    "I build reliable microservices.",
    "I build high-performance backends.",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = index % phrases.length;
    const fullText = phrases[current];

    if (!isDeleting && text === fullText) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && text === "") {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      }, 400);
      return () => clearTimeout(pause);
    }

    const delta = isDeleting ? 40 : 90;
    const timer = setTimeout(() => {
      const next = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(next);
    }, delta);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <section
      id="about"
      className="pt-20 pb-8 px-6 scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left: Text */}
        <div className="flex-1">
          <p className="font-mono text-accent mb-2">
            Hi, this is
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Gayathri Suresh.
          </h1>

          <h2 className="font-mono text-2xl mb-6">
            <span>{text}</span>
            <span className="ml-1 text-accent animate-pulse" aria-hidden>
              |
            </span>
          </h2>

          <p className="max-w-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Backend Engineer with ~4 years of experience building scalable systems in Go.
            Specialized in distributed systems, concurrency, and performance.
            Strong believer in fundamentals, simplicity, and designs that stand the test of time.
            I focus on how systems behave over time, from failure modes to performance trade-offs.
            Regularly sharpen DSA and low-level efficiency to inform better system design.
            Seeking Go and distributed systems roles in quality-driven teams.
          </p>
        </div>

        {/* Right: Headshot */}
        <div className="flex-shrink-0">
          <div
            className="
              w-72 h-72 md:w-80 md:h-80
              rounded-full
              border-4 border-accent
              overflow-hidden
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
