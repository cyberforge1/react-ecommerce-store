import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import ProductLoader from './containers/ProductLoader/ProductLoader.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductLoader />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}
export default App;
