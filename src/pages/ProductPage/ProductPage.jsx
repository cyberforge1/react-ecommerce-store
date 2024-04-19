import React from 'react'
import styles from './ProductPage.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductPage = ({ product }) => {
    return (
        <div className={styles.container}>
        <h1>Product</h1>
        <div className={styles.contents}>
            <ProductCard key={product.id} product={product} />
        </div>
      </div>



    );
};

export default ProductPage

