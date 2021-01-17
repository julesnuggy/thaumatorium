import React from 'react';

import Icon from "../Icon/Icon";

import styles from './Menu.module.scss';

type props = {
  iconName?: string;
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
}

const MenuItem = ({ iconName, title, subtitle, isSelected, onClick }: props): React.FC =>  (
    <div className={styles.menuItemContainer}>
      <div className={styles.cursor}>
        {isSelected && (<Icon name="pulsingOrb"/>)}
      </div>
    <button className={styles.menuItem} onClick={onClick}>
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