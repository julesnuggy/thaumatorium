import React, { useState } from 'react';

import Icon from '../Icon/Icon';
import { ProductType } from '../../enums/products';

import styles from './ProductCard.module.scss';

type props = {
  title: string;
  imageName: string;
  description: string;
  productType: string;
  type: string;
  stock: number;
}

const useProductCount = (stock: number) => {
  const [ count, setCount ] = useState(0);

  const increaseCount = () => setCount(prev => prev === stock ? prev : prev + 1);
  const decreaseCount = () => setCount(prev => prev === 0 ? prev : prev - 1);

  return {
    count,
    increaseCount,
    decreaseCount,
  }
}

const ProductCard = ({
  title,
  imageName,
  description,
  productType,
  type,
  stock,
}: props): React.FC => {
  const {
    count,
    increaseCount,
    decreaseCount,
  } = useProductCount(stock);
console.log('productType', productType)
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.image}>
        {productType === ProductType.MAGIC && (
          <div className={styles.magicOrbBackground} />
        )}
        <Icon name={imageName} />
      </div>
      <div className={styles.description}>
        {description}
      </div>
      <div className={styles.type}>
        {type}
      </div>
      <div className={styles.stock}>Stock: {stock}</div>
      <div className={styles.controls}>
        <button onClick={decreaseCount}>-</button>
        <div>{count}</div>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}

export default ProductCard;