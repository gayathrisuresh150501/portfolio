export default function Education() {
  const education = [
    {
      degree: 'MBA – Finance',
      institution: 'Andhra University',
      timeline: 'JAN 2025 — Present',
      grade: '9.4 CGPA',
    },
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
      <h2 className="font-mono text-accent mb-8 text-3xl font-bold">
        # Education
      </h2>

      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.institution}
            className="
              border border-gray-200 dark:border-gray-700
              rounded-md
              px-5 py-4
            "
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              {/* Left side */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {edu.degree}
                </h3>

                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
              </div>

              {/* Right side */}
              <div className="text-sm text-gray-600 dark:text-gray-400 font-mono sm:text-right">
                <p>{edu.timeline}</p>
                <p className="mt-1 text-gray-800 dark:text-gray-200 font-sans text-sm">
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
