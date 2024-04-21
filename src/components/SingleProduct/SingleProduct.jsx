import React, { useState } from 'react';
import styles from './SingleProduct.module.scss';
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const SingleProduct = ({ product, onFavoriteToggle }) => {
    const [quantity, setQuantity] = useState(product.quantity);

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleVariantChange = (event) => {
        console.log("Selected Variant:", event.target.value);
      };

    return (
        <div className={styles.container}>
            <div className={styles.imgCard}>
                <img src={product.imageUrl} alt={product.name} className={styles.imageStyle}/>
            </div>
            <div className={styles.textCard}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                {quantity === 0 ? (
                    <p className={styles.error}>Out of Stock</p>
                ) : (
                    <p>Quantity: {quantity}</p>
                )}
                <div>
                    <label htmlFor="variant-select">Variants: </label>
                    <select id="variant-select" onChange={handleVariantChange}>
                        {product.variants.map((variant, index) => (
                            <option key={index} value={variant}>{variant}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.buttonGroup}>
                    <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
                    <AddToCartButton productId={product.id} onDecreaseQuantity={handleDecreaseQuantity} />
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
