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
            <div className={styles.imageContainer}>
                <img src={product.imageUrl} alt={product.name} className={styles.image}/>
            </div>
            <div className={styles.info}>
                <h2>{product.name}</h2>
                <p>Quantity in Cart: {product.quantityInCart}</p>
                <div className={styles.buttons}>
                    <button onClick={handleIncrement} className="btn btn-success">+</button>
                    <button onClick={handleDecrement} className="btn btn-warning">-</button>
                    <button onClick={handleRemoveAll} className="btn btn-danger">🗑</button>
                </div>
                <Link to={`/products/${product.id}`}>View Product</Link>
            </div>
        </div>
    );
};

export default CartProductCard;

