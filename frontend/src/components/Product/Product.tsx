import React from 'react';

import Icon from "../Icon/Icon";

import styles from './Product.module.scss';

type props = {
  title: string;
  imageName: string;
  description: string;
}

const Product = ({ title, imageName, description }: props) => (
  <div className={styles.container}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.image}>
      <Icon name={imageName}/>
    </div>
    <div className={styles.description}>
      {description}
    </div>
    <div className={styles.stock}>Stock: ??</div>
    <div className={styles.controls}>
      <button>-</button>
      <div>??</div>
      <button>+</button>
    </div>
  </div>
);

export default Product;