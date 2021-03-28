import React from 'react';

import Icon, { ICON_SIZE } from '../Icon/Icon';

import styles from './Menu.module.scss';

type props = {
  iconName?: string;
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
  onFocus: () => void;
}

const MenuItem = ({
  iconName,
  title,
  subtitle,
  isSelected,
  onClick,
  onFocus,
}: props): React.FC => (
  <div className={styles.menuItemContainer}>
    <div className={styles.cursor}>
      {isSelected && (<Icon name="pulsingOrb" size={ICON_SIZE.SMALL} />)}
    </div>
    <button className={styles.menuItem} onClick={onClick} onFocus={onFocus} onPointerOver={onFocus}>
      <div className={styles.icon}>
        <Icon name={iconName} size={ICON_SIZE.SMALL} />
      </div>
      <div className={styles.itemText}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.subtitle}>
          {subtitle}
        </div>
      </div>
    </button>
  </div>
);

export default MenuItem;