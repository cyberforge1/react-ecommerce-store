// import React, { useState, useEffect } from 'react';
// import styles from './FavoriteButton.module.scss';
// import { toggleFavorite } from '../../services/scripts';
// import { getAllProducts } from '../../services/firebase-service';

// const FavoriteButton = () => {

//     const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getAllProducts()
//       .then((data) => setProducts(data))
//       .catch((e) => console.warn(e.message));
//   }, []);




//   // Use the product's initial 'favourited' state
//   const [isToggled, setIsToggled] = useState(product.favourited);



//   // Define a function to handle the toggle action
//   const toggle = () => {
//     // Call the toggleFavorite function to update the product's 'favourited' state
//     toggleFavorite(product);
//     // Update the local state to reflect the product's new 'favourited' state
//     setIsToggled(product.favourited);
//   };

//   return (
//     <button onClick={toggle} className={styles.button}>
//       {isToggled ? 'Un-favorite' : 'Favorite'} {/* Display text based on state */}
//     </button>
//   );
// }


// export default FavoriteButton

//update the DB (use snapshot)