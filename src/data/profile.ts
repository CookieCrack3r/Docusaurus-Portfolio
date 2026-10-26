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
    'Web- & Backend-Entwickler mit Schwerpunkt DevSecOps und Linux-Serverbetrieb. Aus der Entwicklung mit',
    'Python/Django kommend, betreibe und sichere ich zwei eigene Linux-Server selbst und verbinde Entwicklung,',
    'Betrieb und Sicherheit – bei Störungen finde ich lieber die Ursache, als nur das Symptom zu beheben.' 
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
    intro: 'Include the Information like:',
    bullets: [
      'Feel free to reach out with job offers or opportunities like...',
      'What role are you looking for?',
      'How you will contribute to the new team.',
      'Are you open for remote work or even relocate?',
    ],
  },
  moreProjectsText:
    'Write some information about your other projects. What other projects have you been working on so far?',
  legalNoticePath: '/legal-notice',
};
