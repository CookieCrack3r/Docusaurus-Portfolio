# DevSecOps Portfolio

Personal portfolio website built with [Docusaurus](https://docusaurus.io/) (React + TypeScript), implemented from the Developer Akademie Figma design "DevSecOps Portfolio" (desktop 1440 px and mobile 390 px). It is deployed automatically to GitHub Pages.

## Table of Contents

- [Description](#description)
- [Quickstart](#quickstart)
  - [Prerequisites](#prerequisites)
  - [How to start](#how-to-start)
- [Usage](#usage)
  - [Start the development server](#start-the-development-server)
  - [Change the content](#change-the-content)
  - [Change the styling](#change-the-styling)
  - [Configuration](#configuration)
  - [Type check](#type-check)
  - [Build](#build)
  - [Deployment](#deployment)
- [Repository structure](#repository-structure)
- [Security notes](#security-notes)

## Description

This repository contains the source code of a single-page portfolio for a DevSecOps engineer. The page consists of these sections, each implemented as its own React component:

| Section | Component | Content |
| --- | --- | --- |
| Header | `src/components/header` | Menu bar that hides while scrolling down and reappears when scrolling up. On small screens it shows a burger button that opens `src/components/mobile-menu`. |
| Hero | `src/components/hero` | Greeting, name, job title, short introduction, portrait and "Contact me" button. |
| My Skills | `src/components/my-skills` | Grid of skill cards on desktop (`skill-card`), swipeable carousel with details on mobile (`skill-carousel`). |
| My Project Highlights | `src/components/my-project-highlights` | Numbered project list with a detail card on desktop, stacked project cards on mobile (`project-card`, `tech-tag`, `more-projects-link`). |
| Contact | `src/components/contact` | Contact text, e-mail address and LinkedIn link. |
| Footer | `src/components/footer` | Scroll-to-top button, copyright and link to the legal notice. |

The sections are composed into the page in `src/pages/index.tsx`. All texts, links and images are kept in data files in `src/data`, so the content can be changed without touching the components.

Every project card links to the project documentation in my Docusaurus blog ([cookiecrack3r.github.io/my-dso-blog](https://cookiecrack3r.github.io/my-dso-blog/docs/projects), repository [my-dso-blog](https://github.com/CookieCrack3r/my-dso-blog)) and to the GitHub repository of the project.

The purpose of the repository is to present my skills and projects and to show a complete workflow from design to deployment: feature branches, pull requests, a CI pipeline that type-checks and builds every change, and automatic deployment to GitHub Pages.

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (the CI pipeline uses Node.js 22)
- npm (comes with Node.js)
- Git

### How to start

```bash
git clone https://github.com/CookieCrack3r/Docusaurus-Portfolio.git
cd Docusaurus-Portfolio
npm ci
npm start
```

The site opens at <http://localhost:3000>. Changes to the source code are reloaded automatically.

## Usage

### Start the development server

```bash
npm start
```

Starts a local development server with hot reloading on <http://localhost:3000>. Use `npm start -- --port 4000` to choose another port.

### Change the content

All content lives in `src/data`. Edit these files and the page updates automatically:

| File | What it controls |
| --- | --- |
| `src/data/profile.ts` | Name, greeting, job title, "about me" text, portrait, e-mail address, LinkedIn and GitHub links, contact section texts, path of the legal notice page. A `\n` inside a text starts a new line. |
| `src/data/navigation.ts` | Entries of the menu bar. Each `href` points to the `id` of a section (`/#about-me`, `/#my-skills`, `/#my-projects`, `/#contact`). |
| `src/data/skills.ts` | Skills shown in the skill grid and carousel: label, short label for mobile, icon and bullet points. `SKILLS_PER_CAROUSEL_PAGE` sets how many skills one carousel page shows. |
| `src/data/projects.ts` | Projects with name, description, image, technologies, link to the documentation in the Docusaurus blog (`documentationUrl`) and link to the GitHub repository. `INITIAL_PROJECT_INDEX` sets which project is selected first in the desktop list. Projects without `image` show a placeholder tile. |
| `src/data/technologies.ts` | Technology tags that can be assigned to a project (label and icon). Add a new id to `TechnologyId` to create a new tag. |
| `src/pages/legal-notice.tsx` | Legal notice ("Impressum") with name, address and contact. |

Images are stored in `static/img` and referenced by their path relative to `static`, e.g. `/img/projects/minecraft.webp`. To replace an image, put the new file into `static/img` and update the path in the data file. Recommended sizes:

- Portrait: photo in portrait format, at least 900 px wide. It is cropped to the frame automatically; `portrait.desktop` and `portrait.mobile` can point to the same file or to two different crops.
- Project images: about 710 × 480 px (aspect ratio 3:2)
- Skill icons: SVG or a square PNG of at least 160 px; set `iconWidth` and `iconHeight` to the size the icon should have on the desktop cards

### Change the styling

- `src/css/custom.css` contains the design tokens (colors, content width, page padding, corner radius) and the font imports. Changing a color variable there changes it everywhere.
- Every component has its own CSS module next to it, named after the component (e.g. `src/components/hero/hero.module.css`).
- The layout switches between the desktop and the mobile design at **1024 px** viewport width (`@media (max-width: 1023px)` in the CSS modules).
- The font [Quicksand](https://fontsource.org/fonts/quicksand) is self-hosted via `@fontsource/quicksand`, so no request to Google Fonts is made.

### Configuration

`docusaurus.config.ts` contains the site configuration. The deployment target is read from environment variables:

| Variable | Default | Description |
| --- | --- | --- |
| `SITE_URL` | `http://localhost:3000` | Public URL of the site without path, e.g. `https://<user>.github.io`. |
| `BASE_URL` | `/` | Path the site is served from, e.g. `/<repository>/` for a GitHub Pages project site. |

The GitHub Actions workflow sets both variables automatically. Set them yourself if you build for another host:

```bash
SITE_URL=https://example.com BASE_URL=/ npm run build
```

> **Windows (Git Bash):** Git Bash converts values starting with `/` into Windows paths. Prefix the command with `MSYS_NO_PATHCONV=1`, or use PowerShell: `$env:BASE_URL='/'; $env:SITE_URL='https://example.com'; npm run build`.

`src/theme/Navbar/index.tsx` replaces the default Docusaurus navbar with an empty component, because the portfolio renders its own header.

### Type check

```bash
npm run typecheck
```

Runs the TypeScript compiler without emitting files. The project uses `strict` mode; `any` is not used.

### Build

```bash
npm run build
```

Creates an optimized static build in the `build` folder. The build fails on broken links and anchors. To preview the build locally:

```bash
npm run serve
```

The preview runs on <http://localhost:3000>.

### Deployment

#### GitHub Pages (automatic)

The workflow `.github/workflows/deploy.yml` runs on every push and pull request to `main`:

1. Install dependencies with `npm ci`
2. Type check with `npm run typecheck`
3. Build with `npm run build`, using `https://<owner>.github.io` as `SITE_URL` and `/<repository>/` as `BASE_URL`
4. On pushes to `main` only: upload the `build` folder and deploy it to GitHub Pages

One-time setup in the GitHub repository:

1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main`. The site is published at `https://<owner>.github.io/<repository>/`.

If the repository is named `<owner>.github.io`, change `BASE_URL` in the workflow to `/`.

#### NGINX

Build the site for the target URL and copy the `build` folder to the web server:

```bash
SITE_URL=https://portfolio.example.com BASE_URL=/ npm run build
scp -r build/* user@server:/var/www/portfolio/
```

Example server block (`/etc/nginx/sites-available/portfolio`):

```nginx
server {
    listen 80;
    server_name portfolio.example.com;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /404.html;
    }
}
```

Enable it with `sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/` and reload NGINX with `sudo nginx -t && sudo systemctl reload nginx`. Use [Certbot](https://certbot.eff.org/) to add HTTPS.

## Repository structure

```text
.
├── .github/workflows/deploy.yml   CI pipeline: type check, build, deploy to GitHub Pages
├── src/
│   ├── components/                React components, one folder per component (index.tsx + <name>.module.css)
│   │   ├── button/                Link styled as primary, secondary or light button
│   │   ├── contact/               Contact section
│   │   ├── footer/                Scroll-to-top button, copyright, legal notice link
│   │   ├── header/                Menu bar (hides on scroll down)
│   │   ├── hero/                  "About me" section
│   │   ├── mobile-menu/           Navigation panel opened from the burger button
│   │   ├── more-projects-link/    "see more projects" link
│   │   ├── my-project-highlights/ Project section
│   │   ├── my-skills/             Skill section
│   │   ├── project-card/          Project details card (desktop and mobile variant)
│   │   ├── skill-card/            Skill tile of the desktop grid
│   │   ├── skill-carousel/        Swipeable skill carousel for mobile
│   │   └── tech-tag/              Technology tag on project cards
│   ├── css/custom.css             Design tokens, fonts and global styles
│   ├── data/                      Content: profile, navigation, skills, projects, technologies
│   ├── pages/
│   │   ├── index.tsx              Start page, composes all sections
│   │   ├── legal-notice.tsx       Legal notice page
│   │   └── legal-notice.module.css
│   └── theme/Navbar/index.tsx     Hides the default Docusaurus navbar
├── static/img/                    Portrait, project images and icons (icons exported from the Figma design)
├── .gitignore                     Files excluded from Git (dependencies, build output, .env files)
├── docusaurus.config.ts           Docusaurus configuration
├── package.json                   Scripts and dependencies
├── package-lock.json              Locked dependency versions for reproducible installs
├── README.md                      This documentation
└── tsconfig.json                  TypeScript configuration
```

## Security notes

- The repository contains no passwords, tokens, SSH keys or IP addresses. Deployment to GitHub Pages uses the short-lived `GITHUB_TOKEN` of the workflow; no secret has to be stored.
- `.env` files are ignored by Git. If a future feature needs secrets, pass them as environment variables or GitHub Actions secrets instead of committing them.
- External links open in a new tab with `rel="noopener noreferrer"`.
