import React, { useState, useEffect } from 'react'
import styles from './ProductsAll.module.scss'
import ProductCard from '../ProductCard/ProductCard.jsx'
import { getAllProducts } from '../../services/firebase-service'

const ProductsAll = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
      getAllProducts()
        .then((data) => setProducts(data))
        .catch((e) => console.warn(e.message));
    }, []);

    return (
      <main className={styles.container}>
      <div className={styles.container}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
  };



export default ProductsAll