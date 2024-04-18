import React, { useState, useEffect } from 'react'
import styles from './FavoritesContainer.module.scss'
import { getAllProducts } from '../../services/firebase-service'
import ProductCard from '../../components/ProductCard/ProductCard'


const FavoritesContainer = () => {

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
    {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
);
};




    
        // get all the product and filter through to check if any are favourited

        // if one is favourited then display it within a product card within the container


export default FavoritesContainer