import React, { useState, useEffect } from 'react'
import styles from './FavoritesPage.module.scss'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getAllProducts } from '../../services/firebase-service'



const FavoritesPage = () => {
  useEffect(() => {
    getAllProducts()
      .then((data) => setProducts(data))
      .catch((e) => console.warn(e.message));
  }, []);

  const [products, setProducts] = useState([]);

const favoriteProducts = products.filter((product) => {
  return product.favourited === true
})

console.log(favoriteProducts)





return (
  <div className={styles.container}>
    <div className={styles.contents}>
    {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  </div>
);
};

export default FavoritesPage