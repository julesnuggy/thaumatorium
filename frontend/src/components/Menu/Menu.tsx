import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import MenuItem from "./MenuItem";

import styles from './Menu.module.scss';

type MenuItemsProps = {
  iconName: string;
  title: string;
  subtitle: string;
  path: string;
};

const menuItems: MenuItemsProps[] = [
  {
    iconName: "heartPotion",
    title: "Items",
    subtitle: "Potions, consumables and throwables",
    path: "/items"
  },
  {
    iconName: "staves",
    title: "Equipment",
    subtitle: "Weapons, armour and accessories",
    path: "/equipment"
  },
  {
    iconName: "spellbook",
    title: "Magic",
    subtitle: "Spellbooks, scrolls and artifacts",
    path: "/magic"
  },
];

const Menu = (): React.FC => {
  const [ selectedItemIndex, setSelectedItemIndex ] = useState(0);
  const history = useHistory();

  const onClick = (index: number, path: string) => {
    setSelectedItemIndex(index);
    history.push(path);
  };

  return (
    <div className={styles.menu}>
      {menuItems.map((item, index) => (
        <MenuItem
          iconName={item.iconName}
          title={item.title}
          subtitle={item.subtitle}
          isSelected={selectedItemIndex === index}
          onClick={() => onClick(index, item.path)}
        />
      ))}
    </div>
  );
}

export default Menu;