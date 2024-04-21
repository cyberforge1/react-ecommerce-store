import React, { useState, useEffect } from 'react';
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from '../../config/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FavoriteButton.module.scss'

const FavoriteButton = ({ product, onFavoriteToggle }) => {
    const [isToggled, setIsToggled] = useState(product.favourited);

    useEffect(() => {
        const docRef = doc(db, "products", product.id);
        const unsubscribe = onSnapshot(docRef, (doc) => {
            if (doc.exists()) {
                setIsToggled(doc.data().favourited);
            }
        });

        return () => unsubscribe();
    }, [product.id]);

    const toggle = async () => {
        const newFavourited = !isToggled;
        const docRef = doc(db, "products", product.id);
        await updateDoc(docRef, { favourited: newFavourited });
        setIsToggled(newFavourited);
        onFavoriteToggle(product.id, newFavourited);
    };

    return (
        <button onClick={toggle} className={`btn ${styles.button} ${isToggled ? 'btn-success' : 'btn-outline-primary'}`}>
        {isToggled ? '♥ Unfavorite' : '♡ Favorite'}
    </button>
    );
};

export default FavoriteButton;