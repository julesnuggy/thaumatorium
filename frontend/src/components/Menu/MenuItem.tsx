import React from 'react';

import styles from './Menu.module.scss';

type props = {
  image?: string;
  title: string;
  subtitle: string;
}

const MenuItem = ({ image, title, subtitle }: props): React.FC => (
  <div className={styles.menuItem}>
    <div className={styles.image}>
      {image}
    </div>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.subtitle}>
      {subtitle}
    </div>
  </div>
);

export default MenuItem;