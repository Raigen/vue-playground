// Newest first. Projects are ordered by importance: the overview page shows
// only the first few, the /work/:slug page shows all of them.
export const experiences: Experience[] = [
  {
    slug: 'plancraft',
    company: 'plancraft',
    companyUrl: 'https://plancraft.com',
    role: 'JavaScript Developer, Fullstack',
    start: '2022-12',
    end: null,
    location: 'Germany',
    summary:
      'Building and evolving features across backend APIs, the React web app and the React Native mobile app of plancraft’s SaaS platform for craft and construction businesses – used by more than 20,000 tradespeople in 11 European countries. I drove the modernization of the mobile app, automated its delivery infrastructure and built complex features for time tracking and workforce planning.',
    projects: [
      {
        title: 'Mobile app modernization',
        summary:
          'Modernized and maintained the React Native app on Expo, with regular SDK updates that keep it continuously compliant with evolving App Store and Google Play requirements.',
        highlights: [],
        tech: ['React Native', 'Expo', 'TypeScript'],
      },
      {
        title: 'CI/CD & developer experience',
        summary:
          'Designed and automated the mobile delivery pipeline with Expo and EAS: developers and stakeholders get instant QR-code access to preview builds for every pull request.',
        highlights: ['Preview builds in seconds instead of up to an hour per full test build.'],
        tech: ['EAS', 'Expo', 'CI/CD'],
      },
      {
        title: 'AI-assisted release workflow',
        summary:
          'Developed an AI agent skill that works together with the automated delivery pipeline to prepare store releases.',
        highlights: [
          'Store releases went from several hours of manual work spread over days to a few minutes of review and confirmation.',
        ],
        tech: ['AI agents', 'EAS', 'Automation'],
      },
      {
        title: 'Release automation',
        summary:
          'Implemented an automated release workflow that ships over-the-air updates after merges and detects when a new App Store or Google Play build is required.',
        highlights: [],
        tech: ['EAS Update', 'Expo', 'CI/CD'],
      },
      {
        title: 'Time tracking & overtime management',
        summary:
          'Extended the existing time-tracking system and designed and implemented overtime management, translating business requirements into an integrated technical solution.',
        highlights: [],
        tech: ['Node.js', 'React', 'React Native'],
      },
      {
        title: 'Cross-platform feature development',
        summary:
          'Delivered features across Node.js backend services, React web interfaces and the React Native app, keeping behaviour consistent across the platform – shaping implementation approaches together with engineers and product stakeholders.',
        highlights: [],
        tech: ['Node.js', 'React', 'React Native', 'TypeScript'],
      },
      {
        title: 'AI-assisted development',
        summary:
          'Integrated Claude, Cursor and Codex into daily fullstack workflows, speeding up implementation, code review and debugging across backend, web and mobile.',
        highlights: [],
        tech: ['Claude', 'Cursor', 'Codex'],
      },
    ],
  },
  {
    slug: 'epages',
    company: 'ePages',
    companyUrl: 'https://www.epages.com',
    role: 'Senior JavaScript Developer',
    start: '2011-08',
    end: '2022-11',
    location: 'Hamburg, Germany',
    summary:
      'Planned and built ePages’ next-generation online shop storefront from the ground up – first with Node.js, MySQL and jQuery, later with React. It connected to both legacy and new backend APIs to give shoppers the same buying experience in more than 20 European markets and 15+ languages. I drove alignment across product, UX and engineering, and mentored engineers in a team of 6–15 developers.',
    projects: [
      {
        title: 'Online shop storefront',
        summary:
          'Designed and implemented a new customer-facing storefront with customizable React-based themes.',
        highlights: ['Serving more than 10,000 merchants and their shoppers in 20+ markets and 15+ languages.'],
        tech: ['React', 'Node.js', 'TypeScript', 'MySQL'],
      },
      {
        title: 'Shop CMS page builder',
        summary:
          'Built a CMS building kit that lets merchants design every page of their online shop themselves – without needing a developer for every change.',
        highlights: [],
        tech: ['React', 'TypeScript'],
      },
      {
        title: 'Merchant backoffice',
        summary:
          'Planned and developed a new backoffice application that merchants use to run and manage their shops, built on the REST APIs of multiple microservices.',
        highlights: [],
        tech: ['React', 'REST', 'Microservices'],
      },
      {
        title: 'Storefront backend refactoring & TypeScript adoption',
        summary:
          'Refactored the entire storefront backend to TypeScript so a single codebase could serve both of ePages’ REST APIs equally, and introduced TypeScript across frontend and backend.',
        highlights: [],
        tech: ['TypeScript', 'Node.js'],
      },
      {
        title: 'API design collaboration',
        summary:
          'Worked with backend teams on equal footing to jointly shape the REST APIs and communication channels powering the storefront.',
        highlights: [],
        tech: ['REST', 'API design'],
      },
      {
        title: 'Mentorship',
        summary:
          'Onboarded and mentored junior developers in a team of 6–15 engineers, helping them grow into fully-fledged developers and beyond.',
        highlights: [],
        tech: ['Mentoring', 'Leadership'],
      },
      {
        title: 'Infrastructure ownership',
        summary: 'Managed the team’s own container projects on Kubernetes on Google Cloud.',
        highlights: [],
        tech: ['Kubernetes', 'Google Cloud', 'Docker'],
      },
    ],
    challenges: [
      'Migrated the CI/CD setup step by step from CircleCI to GitHub Actions.',
      'Kept dependencies up to date continuously, handling breaking changes and shifts in design principles such as the move to React Hooks.',
      'Drove the introduction of TypeScript across all JavaScript projects.',
    ],
  },
]
