import React from "react";
import './assets/style.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Product from "./components/products/Product";
import ProductSingle from "./components/products/ProductSingle";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/404">404</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductSingle />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
