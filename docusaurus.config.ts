import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {profile} from './src/data/profile';

// Deployment target. The GitHub Actions workflow sets SITE_URL and BASE_URL for GitHub Pages;
// locally the defaults below are used.
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3000';
const baseUrl = process.env.BASE_URL ?? '/';

const config: Config = {
  title: `${profile.name} | ${profile.jobTitle}`,
  tagline: profile.jobTitle,
  url: siteUrl,
  baseUrl,
  trailingSlash: false,
  favicon: 'img/favicon.svg',
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: `${baseUrl}img/apple-touch-icon.png`}},
  ],

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [{name: 'description', content: `Portfolio of ${profile.name}, ${profile.jobTitle}`}],
  } satisfies Preset.ThemeConfig,
};

export default config;
