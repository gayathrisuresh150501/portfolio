export default function Skills() {
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
      <h2 className="font-mono text-accent mb-4 text-3xl font-bold"># Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((cat) => (
          <div key={cat.title}>
            <h3 className="font-medium text-accent mb-3">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-sm border border-transparent hover:border-accent transition-colors duration-150"
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
