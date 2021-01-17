import React from 'react';

import MenuItem from "./MenuItem";

import styles from './Menu.module.scss';

const Menu = (): React.FC => (
  <div className={styles.menu}>
    <MenuItem iconName="heartPotion" title="Items" subtitle="Potions, consumables and throwables" />
    <MenuItem iconName="staves" title="Equipment" subtitle="Weapons, armour and accessories" />
    <MenuItem iconName="spellbook" title="Magic" subtitle="Spell-books, scrolls and artifacts" />
  </div>
);

export default Menu;