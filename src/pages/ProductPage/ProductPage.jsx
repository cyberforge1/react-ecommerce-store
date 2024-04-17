import React from 'react'
import styles from './ProductPage.module.scss'
import { Link, useNavigate } from "react-router-dom";

const ProductPage = ({ product }) => {
    if (!product) {
        return <div>Loading...</div>; // Or any other loading state representation
    }

    return (
        <div>
            <p>This is the specific product {product.name}</p>
        </div>
    );
};

export default ProductPage

