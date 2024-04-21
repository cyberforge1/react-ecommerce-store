import React from 'react';
import styles from './CartProductCard.module.scss';
import { Link } from "react-router-dom";
import {
    incrementQuantityInCart, decrementProductQuantity, decrementQuantityInCart, 
    incrementProductQuantity, removeAllFromCartAndRestore
} from '../../services/firebase-service';

const CartProductCard = ({ product, onUpdate }) => {
    const handleIncrement = async () => {
        try {
            const newTotalQuantity = await decrementProductQuantity(product.id);
            const newCartQuantity = await incrementQuantityInCart(product.id);
            onUpdate(product.id, newCartQuantity, newTotalQuantity);
        } catch (error) {
            alert("Error updating quantities: " + error.message);
        }
    };

    const handleDecrement = async () => {
        try {
            const newTotalQuantity = await incrementProductQuantity(product.id);
            const newCartQuantity = await decrementQuantityInCart(product.id);
            onUpdate(product.id, newCartQuantity, newTotalQuantity);
        } catch (error) {
            alert("Error updating quantities: " + error.message);
        }
    };

    const handleRemoveAll = async () => {
        try {
            const { newProductQuantity, newCartQuantity } = await removeAllFromCartAndRestore(product.id);
            onUpdate(product.id, newCartQuantity, newProductQuantity);
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className={styles.card}>
            <img src={product.imageUrl} alt={product.name} className={styles.image}/>
            <div className={styles.info}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Quantity in Cart: {product.quantityInCart}</p>
                <p>Total Stock: {product.quantity}</p>
                <p>Variants: {product.variants.join(", ")}</p>
                <button onClick={handleIncrement}>Add One More</button>
                <button onClick={handleDecrement}>Remove One</button>
                <button onClick={handleRemoveAll}>Remove All from Cart</button>
                <Link to={`/products/${product.id}`}>View Product</Link>
            </div>
        </div>
    );
};

export default CartProductCard;