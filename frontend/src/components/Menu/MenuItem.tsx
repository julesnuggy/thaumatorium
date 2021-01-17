import React from 'react';

import Icon from "../Icon/Icon";

import styles from './Menu.module.scss';

type props = {
  iconName?: string;
  title: string;
  subtitle: string;
}

const MenuItem = ({ iconName, title, subtitle }: props): React.FC => (
  <div className={styles.menuItem}>
    <div className={styles.icon}>
      <Icon name={iconName} />
    </div>
    <div className={styles.itemText}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
    </div>
  </div>
);

export default MenuItem;