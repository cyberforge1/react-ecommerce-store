import React, { useState } from 'react'
import styles from './ProductCard.module.scss'
import { Link } from "react-router-dom";
// import FavoriteButton from '../FavoriteButton/FavoriteButton.jsx'

const ProductCard = ({product}) => {
  return (
    <article className={styles.card}>
    <h2>{product.name}</h2>
    <img src={product.imageUrl} alt={product.name} />
    <p>Price:{product.price}</p>
    <p>Quantity:{product.quantity}</p>
    <p>Variants:{product.variants[0]}</p>
    {/* <FavoriteButton /> */}
    <Link to={product.id}>See More</Link>
  </article>
  )
}

export default ProductCard