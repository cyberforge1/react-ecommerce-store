// SingleProduct.jsx

import React, { useState } from 'react';
import styles from './SingleProduct.module.scss';
import { Link } from "react-router-dom";
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const SingleProduct = ({ product, onFavoriteToggle }) => {
    const [quantity, setQuantity] = useState(product.quantity);  // State to track quantity

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);  // Optimistically update quantity in the UI
        }
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
                    <p className={styles.error}>Out of Stock</p>  // Display error message if quantity is 0
                ) : (
                    <p>Quantity: {quantity}</p>  // Display updated quantity
                )}
                <p>Variants: {product.variants[0]}</p>
                <FavoriteButton product={product} onFavoriteToggle={onFavoriteToggle} />
                <AddToCartButton productId={product.id} onDecreaseQuantity={handleDecreaseQuantity} />
            </div>
        </div>
    );
}

export default SingleProduct;