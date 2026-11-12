export const profile: Profile = {
  name: 'Florian Oellerich',
  role: 'Senior Fullstack Software Engineer',
  location: 'Hamburg, Germany',
  tagline:
    'Software engineer with 15 years of experience designing, building and evolving production software – including 11 years of eCommerce SaaS at ePages.',
  bio: [
    'I have worked across the full software development lifecycle, from technical planning and system design to implementation, deployment and long-term maintenance. My strongest tools are JavaScript, TypeScript, Node.js, React and React Native, together with AI-assisted development using Claude, Cursor and Codex.',
    'I focus on modernizing existing systems, improving developer workflows and building maintainable, scalable solutions. I care about engineering practices that help teams ship more effectively, combining deep technical knowledge with automation, continuous learning and collaborative problem-solving.',
    'This site is also my Vue playground: after many years of React I am learning Vue and Nuxt, and this portfolio is built with them.',
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React',
    'React Native',
    'Expo & EAS',
    'AI-assisted development',
    'CI/CD',
    'Testing (unit & e2e)',
    'Engineering leadership',
    'Mentoring',
  ],
  facts: [
    { label: 'Languages', value: 'German (native), English (fluent)' },
    { label: 'Education', value: 'Fachinformatiker – Systemintegration, CCV Computer Vertrieb UG (2008–2011)' },
  ],
  sideProjects: [
    {
      title: 'Homelab',
      summary:
        'Self-hosted infrastructure on several Raspberry Pis and mini PCs: smart home, media, network and developer services, all running as Docker containers.',
      highlights: [
        'Provisioned and managed across all hosts with an AI-assisted Ansible playbook.',
        'Monitored with Uptime Kuma.',
      ],
      tech: ['Docker Compose', 'Ansible', 'Raspberry Pi', 'Uptime Kuma'],
    },
  ],
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/florian-oellerich-4a811580/' },
    { label: 'GitHub', url: 'https://github.com/Raigen' },
  ],
}
