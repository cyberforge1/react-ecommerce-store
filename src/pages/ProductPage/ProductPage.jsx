import React from 'react'
import styles from './ProductPage.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductPage = ({ product }) => {
    return (
        <main className={styles.main}>
        <h1>Product</h1>
        <div className={styles.container}>
            <ProductCard key={product.id} product={product} />
        </div>
      </main>



    );
};

export default ProductPage

