export interface Skill {
  /** Label on the desktop skill cards. "\n" forces a line break. */
  name: string;
  /** Shorter label used in the mobile carousel. */
  shortName: string;
  /** Icon path relative to /static. */
  icon: string;
  /** Icon size on the desktop cards in px. The mobile carousel scales icons to 45px height. */
  iconWidth: number;
  iconHeight: number;
  /** Bullet points shown in the mobile carousel. */
  highlights: string[];
}

export const skills: Skill[] = [
  {
    name: 'HTML',
    shortName: 'HTML',
    icon: '/img/skills/html.svg',
    iconWidth: 70.57,
    iconHeight: 80,
    highlights: [
      'Semantic page structure',
      'Accessible markup with ARIA attributes',
      'Responsive images',
      'Navigation menus and forms',
    ],
  },
  {
    name: 'CSS',
    shortName: 'CSS',
    icon: '/img/skills/css.svg',
    iconWidth: 70.57,
    iconHeight: 80,
    highlights: [
      'Responsive layouts with Flexbox and Grid',
      'CSS modules for components',
      'Design tokens with custom properties',
      'Transitions and hover effects',
    ],
  },
  {
    name: 'Static site\ngenerator',
    shortName: 'Static\nsite',
    icon: '/img/skills/static-site-generator.svg',
    iconWidth: 80,
    iconHeight: 80,
    highlights: [
      'Docusaurus portfolio and blog',
      'Documentation in Markdown and MDX',
      'Custom React components',
      'Deployment to GitHub Pages',
    ],
  },
  {
    name: 'Python',
    shortName: 'Python',
    icon: '/img/skills/python.svg',
    iconWidth: 80.35,
    iconHeight: 80,
    highlights: [
      'Django and Django REST Framework',
      'REST APIs with an admin panel',
      'Automated tests',
      'Code quality with black, isort and flake8',
    ],
  },
  {
    name: 'Shell\nscripting',
    shortName: 'Shell\nscripting',
    icon: '/img/skills/shell-scripting.svg',
    iconWidth: 80,
    iconHeight: 80,
    highlights: [
      'Container entrypoint scripts',
      'Rendering configuration with envsubst',
      'Waiting for dependent services',
      'Automating tasks on Linux servers',
    ],
  },
  {
    name: 'Yaml',
    shortName: 'Yaml',
    icon: '/img/skills/yaml.svg',
    iconWidth: 87.03,
    iconHeight: 80,
    highlights: [
      'Docker Compose stacks',
      'GitHub Actions workflows',
      'Environment-specific configuration',
      'Readable, versioned configuration',
    ],
  },
  {
    name: 'Container',
    shortName: 'Container',
    icon: '/img/skills/container.svg',
    iconWidth: 96,
    iconHeight: 74,
    highlights: [
      'Own images with Dockerfiles',
      'Docker Compose with named volumes',
      'Publishing images to GHCR',
      'Unprivileged containers without secrets',
    ],
  },
  {
    name: 'CI/CD with\nGitHub Actions',
    shortName: 'CI/CD',
    icon: '/img/skills/ci-cd.svg',
    iconWidth: 80,
    iconHeight: 80,
    highlights: [
      'Automated linting and tests',
      'Image builds on every push',
      'Pull request checks',
      'Deployment to GitHub Pages',
    ],
  },
  {
    name: 'IT Security',
    shortName: 'IT\nSecurity',
    icon: '/img/skills/it-security.png',
    iconWidth: 80,
    iconHeight: 80,
    highlights: [
      'OWASP Juice Shop challenges',
      'SSH key authentication and server hardening',
      'Secrets in environment variables',
      'Least privilege for services',
    ],
  },
];

/** Number of skills per page in the mobile carousel. */
export const SKILLS_PER_CAROUSEL_PAGE = 3;
