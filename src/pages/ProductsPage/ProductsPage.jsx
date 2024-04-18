import React, { useState, useEffect } from 'react'
import styles from './ProductsPage.module.scss'
import ProductContainer from '../../containers/ProductContainer/ProductContainer';
import ProductsAll from '../../components/ProductsAll/ProductsAll';

const ProductsPage = () => {


return (
  <ProductContainer>
    <ProductsAll />
</ProductContainer>
);
};

export default ProductsPage