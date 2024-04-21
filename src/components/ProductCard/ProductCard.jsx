// ProductCard.jsx
import React from 'react';
import styles from './ProductCard.module.scss';
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = ({ product, onFavoriteToggle }) => {


  return (
    <article className={styles.card}>
      <h2>{product.name}</h2>
      <Link to={`/products/${product.id}`}>
      <img src={product.imageUrl} alt={product.name} className={styles.imageStyle}/>
      </Link>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Variants: {product.variants[0]}</p>
      <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
      <Link to={`/products/${product.id}`}>
        <SeeMoreButton />
      </Link>
    </article>
  );
};

export default ProductCard;