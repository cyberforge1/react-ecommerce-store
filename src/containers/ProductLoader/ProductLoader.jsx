import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/firebase-service';
import ProductPage from '../../pages/ProductPage/ProductPage';


const ProductLoader = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      getProductById(id)
          .then((productData) => {
              setProduct(productData);
          })
          .catch((error) => {
              setError(error);
              console.error("Failed to fetch product:", error);
          });
  }, [id]);

  if (error) {
      return <div>Error: {error.message}</div>; // Show error message
  }

  return <ProductPage product={product} />;
};

export default ProductLoader