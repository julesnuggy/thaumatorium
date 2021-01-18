import React from 'react';

import Page from "../components/Page/Page";
import Product from "../components/Product/Product";

import styles from './Items.module.scss';

const Items = () => (
  <Page title="Items">
    <div className={styles.productsContainer}>
      <Product title="Potion" imageName="heartPotion" description="Heals 50 health" stock={10} />
      <Product title="Potion" imageName="heartPotion" description="Heals 50 health" stock={10} />
      <Product title="Potion" imageName="heartPotion" description="Heals 50 health" stock={10} />
      <Product title="Potion" imageName="heartPotion" description="Heals 50 health" stock={10} />
      <Product title="Potion" imageName="heartPotion" description="Heals 50 health" stock={10} />
    </div>
  </Page>
);

export default Items;