import React, { useState } from 'react';

import MenuItem from "./MenuItem";

import styles from './Menu.module.scss';

const menuItems = [
  {
    iconName: "heartPotion",
    title: "Items",
    subtitle: "Potions, consumables and throwables"
  },
  {
    iconName: "staves",
    title: "Equipment",
    subtitle: "Weapons, armour and accessories"
  },
  {
    iconName: "spellbook",
    title: "Magic",
    subtitle: "Spellbooks, scrolls and artifacts"
  },
]

const Menu = (): React.FC => {
  const [ selectedItemIndex, setSelectedItemIndex ] = useState(0);

  const onClick = (index: number) => setSelectedItemIndex(index);

  return (
    <div className={styles.menu}>
      {menuItems.map((item, index) => (
        <MenuItem
          iconName={item.iconName}
          title={item.title}
          subtitle={item.subtitle}
          isSelected={selectedItemIndex === index}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}

export default Menu;