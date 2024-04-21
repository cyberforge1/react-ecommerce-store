import React, { useEffect, useState } from 'react';
import styles from './CartPage.module.scss';
import CartProductCard from '../../components/CartProductCard/CartProductCard';
import { getCartProducts } from '../../services/firebase-service';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartProducts();
            setCartItems(items.filter(item => item.quantityInCart > 0));  // Initially filter out items with zero quantity
        };

        fetchCartItems();
    }, []);

    const handleQuantityUpdate = (productId, newQuantityInCart, newTotalQuantity) => {
        setCartItems(currentItems => 
            currentItems.map(item => 
                item.id === productId ? {...item, quantityInCart: newQuantityInCart, quantity: newTotalQuantity} : item
            ).filter(item => item.quantityInCart > 0)  // Remove items with zero quantity from the UI
        );
    };

    return (
        <div className={styles.container}>
            <h1>Shopping Cart</h1>
            <div className={styles.content}>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <CartProductCard key={item.id} product={item} onUpdate={handleQuantityUpdate} />
                    ))
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>
        </div>
    );
};

export default CartPage;

