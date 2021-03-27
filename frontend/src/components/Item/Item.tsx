import React, { useState } from 'react';

import Icon from "../Icon/Icon";

import styles from './Item.module.scss';

type props = {
  title: string;
  imageName: string;
  description: string;
  stock: number;
}

const useItemCount = (stock: number) => {
  const [ count, setCount ] = useState(0);

  const increaseCount = () => setCount(prev => prev === stock ? prev : prev + 1);
  const decreaseCount = () => setCount(prev => prev === 0 ? prev : prev - 1);

  return {
    count,
    increaseCount,
    decreaseCount
  }
}

const Item = ({ title, imageName, description, stock }: props): React.FC => {
  const {
    count,
    increaseCount,
    decreaseCount
  } = useItemCount(stock);

  return (
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
      <div className={styles.stock}>Stock: {stock}</div>
      <div className={styles.controls}>
        <button onClick={decreaseCount}>-</button>
        <div>{count}</div>
        <button onClick={increaseCount}>+</button>
      </div>
    </div>
  );
}

export default Item;