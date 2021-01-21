import React from 'react';

import icons from './icons';

import styles from './Icon.module.scss';

export enum ICON_SIZE { SMALL = 'small', MEDIUM = 'medium', LARGE = 'large' }

type props = {
  name: string;
  size?: string;
}

const getSize = (size: string) => {
  switch (size) {
    case ICON_SIZE.SMALL:
      return styles.small;
    case ICON_SIZE.MEDIUM:
      return styles.medium;
    case ICON_SIZE.LARGE:
      return styles.large;
    default:
      return styles.medium;
  }
}

const Icon = ({ name, size }: props) => {
  const icon = icons[name];

  return (
    <img className={getSize(size)} src={icon} alt={name} />
  )
};

export default Icon;