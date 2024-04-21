//firebase-service.js

import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    updateDoc,
  } from "firebase/firestore";
  import { db } from "../config/firestore.js";



  export const getAllProducts = async () => {
    const collectionRef = collection(db, "products");
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
  };



  export const getProductById = async (id) => {
  
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    if (!snapshot.exists()) {
      throw new Error("Could not find product with id " + id);
    }
    console.log("Product data:", snapshot.data());
    return { id: snapshot.id, ...snapshot.data() };
  };


  export const toggleFavorite = async (product) => {
    const docRef = doc(db, "products", product.id);
    const newFavoritedState = !product.favourited;
    await updateDoc(docRef, {
        favourited: newFavoritedState
    });
    return newFavoritedState; // Return the new state to update local state
};


  //const addProductToCard


  // Function to decrease the quantity of a product by one
  export const decreaseProductQuantity = async (id) => {
    const docRef = doc(db, "products", id);
    const snapshot = await getDoc(docRef);
    const currentQuantity = snapshot.data().quantity;
    if (currentQuantity > 0) {
        await updateDoc(docRef, {
            quantity: currentQuantity - 1
        });
    } else {
        console.log("No more products in stock");
    }
};