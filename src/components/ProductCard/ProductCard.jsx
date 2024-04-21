// ProductCard.jsx
import React from 'react';
import styles from './ProductCard.module.scss';
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import SeeMoreButton from '../SeeMoreButton/SeeMoreButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = ({ product, onFavoriteToggle }) => {
  const handleVariantChange = (event) => {
    console.log("Selected Variant:", event.target.value);
  };

  return (
    <article className={styles.card}>
      <h4>{product.name}</h4>
      <Link to={`/products/${product.id}`}>
      <img src={product.imageUrl} alt={product.name} className={styles.imageStyle}/>
      </Link>
      <p>Price: ${product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <div>
        <label htmlFor="variant-select">Variants: </label>
        <select id="variant-select" onChange={handleVariantChange}>
          {product.variants.map((variant, index) => (
            <option key={index} value={variant}>{variant}</option>
          ))}
        </select>
      </div>
      <div className={styles.buttonContainer}>
                <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
                <Link to={`/products/${product.id}`} className={styles.linkButton}>
                    <SeeMoreButton />
                </Link>
            </div>
    </article>
  );
};

export default ProductCard;