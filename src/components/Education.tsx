import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Education() {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: 'B.Tech - Computer Science and Engineering',
      institution:
        'NSRIT, Jawaharlal Nehru Technological University - Gurujada Vizianagaram',
      timeline: 'AUG 2019 — SEPT 2023',
      grade: '8.32 CGPA',
    },
  ];

  return (
    <section id="education" className="py-12 px-6 max-w-6xl mx-auto">
      <h2
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className={`font-mono mb-8 text-3xl font-bold scroll-animate-left ${isVisible ? 'visible' : ''}`}
      >
        <span className="text-accent text-glow">#</span> <span className="text-gray-900 dark:text-white">Academic Path</span>
      </h2>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="card-cyber px-5 py-4 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              {/* Left side */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white font-mono">
                  {edu.degree}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Right side */}
              <div className="text-sm text-gray-500 dark:text-gray-400 font-mono sm:text-right">
                <p>{edu.timeline}</p>
                <p className="mt-1 text-accent dark:text-accent font-sans text-sm">
                  {edu.grade}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
