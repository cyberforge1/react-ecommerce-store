// AddToCartButton.jsx

import React from 'react';
import { decreaseProductQuantity, incrementCartProductQuantity, getProductById } from '../../services/firebase-service';
import styles from './AddToCartButton.module.scss';

const AddToCartButton = ({ productId, onDecreaseQuantity }) => {
    const handleClick = async () => {
        try {
            const product = await getProductById(productId); // Get the current product details
            if (product.quantity > 0) {
                await decreaseProductQuantity(productId);  // Call decrease function on click
                onDecreaseQuantity();  // Update local UI state
                await incrementCartProductQuantity(productId);  // Increment cart quantity
                console.log('Product added to cart and quantity updated.');
            } else {
                // Alert the user that the product is out of stock
                alert("This product is currently out of stock and cannot be added to your cart.");
            }
        } catch (error) {
            console.error('Error updating cart:', error);
            // Optionally display a more user-friendly error message here
            alert("Failed to update cart: " + error.message);
        }
    };

    return (
        <div>
            <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
    );
}

export default AddToCartButton;