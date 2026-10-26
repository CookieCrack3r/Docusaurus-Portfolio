/** Technologies that can be shown as tags on a project card. */
export type TechnologyId = 'python' | 'container' | 'ci-cd' | 'yaml' | 'shell-scripting' | 'it-security';

export interface Technology {
  /** "\n" forces a line break. */
  label: string;
  /** Icon path relative to /static, rendered 32px high. */
  icon: string;
  iconWidth: number;
}

export const technologies: Record<TechnologyId, Technology> = {
  python: {label: 'Python', icon: '/img/skills/python.svg', iconWidth: 32.14},
  container: {label: 'Container', icon: '/img/tags/container.svg', iconWidth: 41.51},
  'ci-cd': {label: 'CI/CD', icon: '/img/skills/ci-cd.svg', iconWidth: 32},
  yaml: {label: 'Yaml', icon: '/img/tags/yaml.svg', iconWidth: 34.81},
  'shell-scripting': {label: 'Shell\nscripting', icon: '/img/tags/terminal.svg', iconWidth: 32},
  'it-security': {label: 'IT Security', icon: '/img/skills/it-security.png', iconWidth: 32},
};
