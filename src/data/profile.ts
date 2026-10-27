/** Personal data shown in the hero, contact and footer sections. */
export interface Profile {
  name: string;
  greeting: string;
  jobTitle: string;
  /** "\n" starts a new line on desktop; on mobile the text flows as one paragraph. */
  about: string;
  /** Image paths relative to /static. The mobile image has a wider crop. */
  portrait: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  email: string;
  linkedInUrl: string;
  githubUrl: string;
  contact: {
    headline: string;
    tagline: string;
    intro: string;
    bullets: string[];
  };
  moreProjectsText: string;
  legalNoticePath: string;
}

export const profile: Profile = {
  name: 'Martin Friedrich',
  greeting: 'Hey there. 👋 I am',
  jobTitle: 'DevSecOps Engineer',
  about: [
    'Web and backend developer focused on DevSecOps and Linux server operations.',
    'Coming from Python/Django development, I run and secure two Linux servers of my own and bring development, operations and security together.',
    'When something breaks, I would rather find the root cause than just fix the symptom.',
  ].join('\n'),
  portrait: {
    desktop: '/img/hero/portrait.jpeg',
    mobile: '/img/hero/portrait.jpeg',
    alt: 'Portrait of Martin Friedrich',
  },
  email: 'info@martinfriedrich.org',
  linkedInUrl: 'https://www.linkedin.com/in/martin-friedrich-cc/',
  githubUrl: 'https://github.com/CookieCrack3r',
  contact: {
    headline: 'Contact me',
    tagline: 'Looking forward to hearing from you!',
    intro: 'Feel free to reach out with job offers or opportunities, for example if:',
    bullets: [
      'you are looking for a DevSecOps engineer or backend developer.',
      'you need someone who automates builds, tests and deployments with CI/CD pipelines and containers.',
      'security and stable operations matter as much to you as new features.',
      'you want to talk about Linux servers, containers or automation.',
    ],
  },
  moreProjectsText:
    'Besides these highlights, you can find more of my projects around Linux servers, containers and automation on my GitHub profile.',
  legalNoticePath: '/legal-notice',
};
