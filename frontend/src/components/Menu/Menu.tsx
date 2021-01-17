import React from 'react';
import MenuItem from "./MenuItem";

import styles from './Menu.module.scss';

const Menu = (): React.FC => (
  <div className={styles.menu}>
    <MenuItem title="Items" subtitle="Potions, consumables and throwables" />
    <MenuItem title="Equipment" subtitle="Weapons, armour and accessories" />
    <MenuItem title="Magic" subtitle="Spell-books, scrolls and artifacts" />
  </div>
);

export default Menu;