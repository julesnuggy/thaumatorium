import React from "react";

import HeaderNavLink from './HeaderNavLink';
import { navLocations } from '../../constants/navLocations';

import styles from './Header.module.scss';

type HeaderProps = {
  LoginContext: React.Context
}

const Header = ({ LoginContext }: HeaderProps) => {
  const { home, items, equipment, magic, archmagistration, login } = navLocations;
  const Account = () => (
    <LoginContext.Consumer>
      {({ loggedInUser }) =>
        (loggedInUser ? `Logged in as: ${loggedInUser}` : <HeaderNavLink location={login} />)
      }
    </LoginContext.Consumer>
  )

  return (
    <div className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.navButtonsWrapper}>
          <HeaderNavLink location={home} />
          <HeaderNavLink location={items} />
          <HeaderNavLink location={equipment} />
          <HeaderNavLink location={magic} />
          <HeaderNavLink location={archmagistration} />
        </div>
        <div className={styles.account}>
          <Account />
        </div>
      </div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerTitle}>Thaumatorium</div>
        <p>A place of magic, wonders and mysteries.</p>
      </div>
    </div>
  )
}

export default Header;
