import React, { useEffect, useState } from 'react';
import styles from './CartPage.module.scss';
import CartProductCard from '../../components/CartProductCard/CartProductCard';
import { getCartProducts } from '../../services/firebase-service';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            const items = await getCartProducts();
            setCartItems(items.filter(item => item.quantityInCart > 0));
        };

        fetchCartItems();
    }, []);

    const handleQuantityUpdate = (productId, newQuantityInCart, newTotalQuantity) => {
        setCartItems(currentItems => 
            currentItems.map(item => 
                item.id === productId ? {...item, quantityInCart: newQuantityInCart, quantity: newTotalQuantity} : item
            ).filter(item => item.quantityInCart > 0)
        );
    };

    return (
        <div className={styles.container}>
            <h2>Shopping Cart</h2>
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

