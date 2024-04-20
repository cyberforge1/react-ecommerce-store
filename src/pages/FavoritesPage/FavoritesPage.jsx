// FavoritesPage.jsx
import React, { useState, useEffect } from 'react';
import styles from './FavoritesPage.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getAllProducts } from '../../services/firebase-service';

const FavoritesPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
            .then((data) => {
                console.log('Initial load of products', data);
                setProducts(data.filter(product => product.favourited));
            })
            .catch((e) => console.warn(e.message));
    }, []);

    const handleFavoriteToggle = (productId, isFavorited) => {
        console.log(`Favorite status changed for ${productId}: ${isFavorited}`);
        setProducts(currentProducts =>
            currentProducts.filter(product => 
                product.id !== productId || isFavorited
            )
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} onFavoriteToggle={handleFavoriteToggle} />
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;
