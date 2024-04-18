import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from '../../services/firebase-service';
import ProductPage from '../../pages/ProductPage/ProductPage';


const ProductLoader = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState("");
  
    useEffect(() => {
      setFetchStatus("LOADING");
      getProductById(id)
        .then((productData) => {
          setFetchStatus("SUCCESS");
          setProduct(productData);
        })
        .catch((error) => {
          setFetchStatus("FAILED");
          setError(error);
        });
    }, [id]);
  
  
    return (
      <>
        {fetchStatus === "FAILED" && (
          <Message severity="error" message={error.message} />
        )}
        {fetchStatus === "SUCCESS" && <ProductPage product={product} />}
      </>
    );
  };

  export default ProductLoader;