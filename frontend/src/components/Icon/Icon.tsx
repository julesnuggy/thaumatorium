import React from 'react';
import icons from './icons';

type props = {
  name: string;
}

const Icon = ({ name }: props) => {
  const icon = icons[name];
  return (
    <img src={icon} alt={name} />
  )
};

export default Icon;