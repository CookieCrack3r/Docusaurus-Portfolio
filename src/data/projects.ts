import type {TechnologyId} from './technologies';

export interface Project {
  name: string;
  /** Optional addition rendered in regular weight after the name, e.g. "(Container)". */
  nameSuffix?: string;
  /** "\n" forces a line break. */
  description: string;
  /** Image path relative to /static. Projects without an image show a placeholder. */
  image?: string;
  technologies: TechnologyId[];
  documentationUrl: string;
  githubUrl: string;
}

const PLACEHOLDER_DESCRIPTION = [
  'Write some information about the project.',
  'For example: Why are you proud of it?',
  'What were you able to implement here?',
  'What different algorithms, server architecture did you use?',
  'Why did you find this project so interesting?',
].join('\n');

const DEFAULT_TECHNOLOGIES: TechnologyId[] = ['yaml', 'shell-scripting', 'it-security', 'container'];

export const projects: Project[] = [
  {
    name: 'Baby Tools',
    description: PLACEHOLDER_DESCRIPTION,
    technologies: DEFAULT_TECHNOLOGIES,
    documentationUrl: 'https://github.com/CookieCrack3r/baby-tools-world#readme',
    githubUrl: 'https://github.com/CookieCrack3r/baby-tools-world',
  },
  {
    name: 'Truck Signs API',
    description: PLACEHOLDER_DESCRIPTION,
    technologies: DEFAULT_TECHNOLOGIES,
    documentationUrl: 'https://github.com/CookieCrack3r/truck-sign#readme',
    githubUrl: 'https://github.com/CookieCrack3r/truck-sign',
  },
  {
    name: 'Conduit',
    nameSuffix: '(Container)',
    description: PLACEHOLDER_DESCRIPTION,
    image: '/img/projects/conduit.jpg',
    technologies: DEFAULT_TECHNOLOGIES,
    documentationUrl: 'https://github.com/CookieCrack3r/conduit-fullstack#readme',
    githubUrl: 'https://github.com/CookieCrack3r/conduit-fullstack',
  },
  {
    name: 'Minecraft',
    description: PLACEHOLDER_DESCRIPTION,
    image: '/img/projects/minecraft.webp',
    technologies: DEFAULT_TECHNOLOGIES,
    documentationUrl: 'https://github.com/CookieCrack3r/Minecraft_DA#readme',
    githubUrl: 'https://github.com/CookieCrack3r/Minecraft_DA',
  },
  {
    name: 'WordPress hosten',
    description: PLACEHOLDER_DESCRIPTION,
    image: '/img/projects/wordpress.jpg',
    technologies: DEFAULT_TECHNOLOGIES,
    documentationUrl: 'https://github.com/CookieCrack3r/Wordpress_DA#readme',
    githubUrl: 'https://github.com/CookieCrack3r/Wordpress_DA',
  },
];

/** Project that is selected initially in the desktop project list. */
export const INITIAL_PROJECT_INDEX = 3;
