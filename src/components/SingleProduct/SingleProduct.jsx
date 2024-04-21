import React from 'react'
import styles from './SingleProduct.module.scss'
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const SingleProduct = ({ product, onFavoriteToggle }) => {
  return (

    <div className={styles.container}>
        <div className={styles.imgCard}>
            <img src={product.imageUrl} alt={product.name} className={styles.imageStyle}/>
        </div>
        <div className={styles.textCard}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Variants: {product.variants[0]}</p>
            <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
            <AddToCartButton />
        </div>
    </div>
  )
}





export default SingleProduct