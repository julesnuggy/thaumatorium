import React from 'react';

import styles from './Home.module.scss';

const Home = (): React.FC => (
  <div className={styles.content}>
    <p>Welcome to Thaumatorium!</p>
    <p>We specialise in magical items, weapons, armour, trinkets, and spells.</p>
  </div>
)

export default Home;