// AddToCartButton.jsx

import React from 'react';
import { decreaseProductQuantity } from '../../services/firebase-service.js';
import styles from './AddToCartButton.module.scss';

const AddToCartButton = ({ productId, onDecreaseQuantity }) => {
    const handleClick = async () => {
        await decreaseProductQuantity(productId);  // Call decrease function on click
        onDecreaseQuantity();  // Update local UI state
    };

    return (
        <div>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
    );
}

export default AddToCartButton;