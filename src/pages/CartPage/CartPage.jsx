import React from 'react'
import styles from './CartPage.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard';

const CartPage = () => {
  return (
    <div className={styles.container}>
        <h1>Shopping Cart</h1>
      <div className={styles.content}>
        <h1>Content</h1>
      </div>
    </div>
);
};

export default CartPage