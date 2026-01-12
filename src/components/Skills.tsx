import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  const categories = [
    {
      title: 'Programming Languages',
      items: [
        'Golang',
        'JavaScript',
        'TypeScript',
        'Python',
        'C++',
        'Java',
        'C# / .NET',
        'Solidity',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      items: [
        'Atreugo',
        'net/http',
        'React',
        'Node.js',
        'Flask',
        'Electron',
        'json-iter',
        'fastpbkdf2',
      ],
    },
    {
      title: 'Databases & Storage',
      items: [
        'MongoDB',
        'PostgreSQL',
        'Elasticsearch',
        'BadgerDB',
        'Pinecone',
        'IPFS',
      ],
    },
    {
      title: 'Distributed Systems & Design',
      items: [
        'Microservices',
        'System Design',
        'High-Throughput APIs',
        'Concurrency',
        'Event-Driven Architecture',
        'Fault Tolerance',
        'Chaos Engineering',
      ],
    },
    {
      title: 'Infrastructure & DevOps',
      items: [
        'Docker',
        'Kubernetes',
        'NGINX',
        'AWS',
        'GitHub Actions',
        'CI/CD Pipelines',
        'Kafka',
        'Datadog',
        'Sumo Logic',
      ],
    },
    {
      title: 'Identity & Security',
      items: [
        'CIAM',
        'OAuth 2.0',
        'OIDC',
        'SAML',
        'MFA',
        'SSO',
        'Consent Management',
        'GDPR',
      ],
    },
    {
      title: 'Engineering Practices',
      items: [
        'TDD',
        'SOLID',
        'DSA',
        'Code Reviews',
        'Observability',
        'Design Patterns',
        'Agile',
        'Performance Optimization',
      ],
    },
    {
      title: 'Tools',
      items: [
        'Git',
        'GitHub',
        'Postman',
        'JIRA',
      ],
    },
  ];

  return (
  <section id="skills" className="py-12 px-6 max-w-6xl mx-auto">
      <h2
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className={`font-mono mb-4 text-3xl font-bold scroll-animate-left ${isVisible ? 'visible' : ''}`}
      >
        <span className="text-accent text-glow">#</span> <span className="text-gray-900 dark:text-white">Tech Arsenal</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <div key={cat.title} className="animate-slide-up">
            <h3 className="font-medium text-accent dark:text-accent mb-3 font-mono">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-cyber-darker text-gray-700 dark:text-gray-300 rounded-sm border border-gray-300 dark:border-cyber-light hover:border-gray-400 dark:hover:border-accent hover:text-gray-900 dark:hover:text-accent transition-all duration-150 hover-lift"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
