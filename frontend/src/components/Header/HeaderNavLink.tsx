import React from 'react';
import { NavLink } from 'react-router-dom';

import { NavLocation } from '../../constants/navLocations';

import styles from './Header.module.scss';

type NavButtonProps = {
  location: NavLocation,
}

const HeaderNavLink = ({ location }: NavButtonProps): React.FC => (
  <NavLink
    exact
    to={location.path}
    className={styles.navLink}
    activeClassName={styles.current}>
    {location.name}
  </NavLink>
);

export default HeaderNavLink;
