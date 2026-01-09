export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'LoginRadius',
      timeline: 'Apr 2024 — Dec 2025',
      description: 'AI-powered support engine, API migration to Go, Consent Management microservice, high-throughput optimizations (28% P99 latency reduction), and 99.9% SLO maintenance.',
      technologies: ['Golang', 'MongoDB', 'Node.js', 'React', 'TypeScript', '.NET', 'NGINX', 'Postman'],
    },
    {
      title: 'Software Developer',
      company: 'CyLogic',
      timeline: 'Mar 2023 — Mar 2024',
      description: 'Backend I/O optimization (45% throughput increase), virtual file system for Electron app, offline state management, conflict-resolution for shared files, 100% backward compatibility.',
      technologies: ['Golang', 'C#', 'TypeScript', 'Electron', 'BadgerDB', 'IPFS', 'WinFSP'],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Axiom IO',
      timeline: 'Apr 2022 — Mar 2023',
      description: 'Built an NFT Marketplace with Solidity, MetaMask, and OpenZeppelin, driving 50% increase in user interactions.',
      technologies: ['Solidity', 'MetaMask', 'OpenZeppelin', 'Ganache', 'Blockchain', 'ERC1155', 'ERC721'],
    },
  ];

  return (
<section id="experience" className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="font-mono text-accent mb-6 text-3xl font-bold"># Experience</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="p-6 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 hover:border-accent transition-colors duration-150"
          >
            <div className="mb-3">
              <h3 className="text-lg font-semibold text-accent">
                {exp.title}
              </h3>
              <p className="text-sm text-accent font-medium">{exp.company}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                {exp.timeline}
              </p>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-sm border border-transparent hover:border-accent transition-colors duration-150"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
