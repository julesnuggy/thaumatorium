import React from 'react';

import Icon from "../Icon/Icon";

import styles from './Menu.module.scss';

type props = {
  iconName?: string;
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
  onFocus: () => void;
}

const MenuItem = ({ iconName, title, subtitle, isSelected, onClick, onFocus }: props): React.FC => (
  <div className={styles.menuItemContainer}>
    <div className={styles.cursor}>
      {isSelected && (<Icon name="pulsingOrb"/>)}
    </div>
    <button className={styles.menuItem} onClick={onClick} onFocus={onFocus} onPointerOver={onFocus}>
      <div className={styles.icon}>
        <Icon name={iconName}/>
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