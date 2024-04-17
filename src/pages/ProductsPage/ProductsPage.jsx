import React, { useState, useEffect } from 'react'
import styles from './ProductsPage.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard';
import { getAllProducts } from '../../services/firebase-service';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((e) => console.warn(e.message));
    }, []);


return (
  <main className={styles.main}>
    <h1>Products</h1>
    <div className={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </main>
);
};

export default ProductsPage