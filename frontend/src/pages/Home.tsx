import React from 'react';
import { Link } from 'react-router-dom';

import Menu from "../components/Menu/Menu";
import Page from "../components/Page";

import styles from './Home.module.scss';

const Home = (): React.FC => (
  <Page>
    <div className={styles.content}>
      <p>Welcome to Thaumatorium!</p>
      <p>We specialise in magical items, weapons, armour, trinkets, and spells.</p>
      <Menu />
      <Link to="/test">Test</Link>
    </div>
  </Page>
)

export default Home;