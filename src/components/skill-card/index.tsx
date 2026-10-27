import type {ReactNode} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import type {Skill} from '@site/src/data/skills';
import styles from './skill-card.module.css';

export interface SkillCardProps {
  skill: Skill;
}

/**
 * Desktop skill tile. The front shows icon and label; on hover, keyboard focus or tap
 * the tile flips around and shows the skill's highlights on the back.
 */
export default function SkillCard({skill}: SkillCardProps): ReactNode {
  const icon = useBaseUrl(skill.icon);
  const title = skill.name.replace(/\n/g, ' ');

  return (
    <div className={styles.card} tabIndex={0} role="group" aria-label={title}>
      <div className={styles.inner}>
        <div className={clsx(styles.face, styles.front)}>
          <img src={icon} alt="" width={skill.iconWidth} height={skill.iconHeight} className={styles.icon} />
          <span className={styles.label}>{skill.name}</span>
        </div>
        <div className={clsx(styles.face, styles.back)}>
          <span className={styles.backTitle}>{title}</span>
          <ul className={styles.highlights}>
            {skill.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
