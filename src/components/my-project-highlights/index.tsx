import {useState, type ReactNode} from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import clsx from 'clsx';
import MoreProjectsLink from '@site/src/components/more-projects-link';
import ProjectCard from '@site/src/components/project-card';
import {profile} from '@site/src/data/profile';
import {INITIAL_PROJECT_INDEX, projects} from '@site/src/data/projects';
import styles from './my-project-highlights.module.css';

const SECTION_ID = 'my-projects';
const PANEL_ID = 'project-details';

/** Desktop: numbered project list with one detail card. Mobile: all project cards stacked. */
export default function MyProjectHighlights(): ReactNode {
  useBrokenLinks().collectAnchor(SECTION_ID);
  const [selectedIndex, setSelectedIndex] = useState(INITIAL_PROJECT_INDEX);

  return (
    <section id={SECTION_ID} className={styles.section}>
      <div className={styles.content}>
        <h2 className={styles.headline}>My project highlights</h2>

        <div className={styles.desktop}>
          <div className={styles.listColumn}>
            <ol className={styles.list}>
              {projects.map((project, index) => (
                <li key={project.name} className={clsx(styles.listItem, index === selectedIndex && styles.selected)}>
                  <button
                    type="button"
                    className={styles.listButton}
                    aria-controls={PANEL_ID}
                    aria-pressed={index === selectedIndex}
                    onClick={() => setSelectedIndex(index)}>
                    {project.name}
                  </button>
                </li>
              ))}
            </ol>
            <MoreProjectsLink href={profile.githubUrl} />
          </div>
          {/* All cards share one grid cell so the panel always has the height of the longest project. */}
          <div id={PANEL_ID} className={styles.panel} aria-live="polite">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                number={index + 1}
                variant="featured"
                className={clsx(styles.panelCard, index !== selectedIndex && styles.inactive)}
              />
            ))}
          </div>
        </div>

        <div className={styles.mobile}>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} number={index + 1} variant="compact" />
          ))}
          <p className={styles.moreText}>{profile.moreProjectsText}</p>
          <MoreProjectsLink href={profile.githubUrl} />
        </div>
      </div>
    </section>
  );
}
