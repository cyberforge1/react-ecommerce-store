// FavoriteButton.jsx
import React, { useState, useEffect } from 'react';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../config/firestore';
import styles from './FavoriteButton.module.scss';

const FavoriteButton = ({ product, onFavoriteToggle }) => {
    const [isToggled, setIsToggled] = useState(product.favourited);

    useEffect(() => {
        const docRef = doc(db, "products", product.id);
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                const newProductData = doc.data();
                setIsToggled(newProductData.favourited);
            }
        });

        return () => unsubscribe();
    }, [product.id]);

    const toggle = async () => {
        const newFavourited = !isToggled;
        console.log(`Toggling favorite for product ${product.id}: ${newFavourited}`);
        const docRef = doc(db, "products", product.id);
        await updateDoc(docRef, {
            favourited: newFavourited
        });
        setIsToggled(newFavourited);
        onFavoriteToggle(product.id, newFavourited);
    };

    return (
        <button onClick={toggle} className={styles.button}>
            {isToggled ? 'Unfavorite' : 'Favorite'}
        </button>
    );
};

export default FavoriteButton;