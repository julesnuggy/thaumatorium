import React from 'react';

import Page from '../components/Page/Page';
import Menu from '../components/Menu/Menu';

const Home = (): React.FC => (
  <Page>
    <p>Welcome to Thaumatorium!</p>
    <p>We specialise in magical items, weapons, armour, trinkets, and spells.</p>
    <Menu />
  </Page>
)

export default Home;