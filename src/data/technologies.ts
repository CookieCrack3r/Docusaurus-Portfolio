/** Technologies that can be shown as tags on a project card. */
export type TechnologyId = 'yaml' | 'shell-scripting' | 'it-security' | 'container';

export interface Technology {
  /** "\n" forces a line break. */
  label: string;
  /** Icon path relative to /static, rendered 32px high. */
  icon: string;
  iconWidth: number;
}

export const technologies: Record<TechnologyId, Technology> = {
  yaml: {label: 'Yaml', icon: '/img/tags/yaml.svg', iconWidth: 34.81},
  'shell-scripting': {label: 'Shell\nscripting', icon: '/img/tags/terminal.svg', iconWidth: 32},
  'it-security': {label: 'IT Security', icon: '/img/skills/it-security.png', iconWidth: 32},
  container: {label: 'Container', icon: '/img/tags/container.svg', iconWidth: 41.51},
};
