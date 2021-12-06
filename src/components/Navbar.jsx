import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/404">404</Link></li>
        </ul>
     );
}

export default Navbar;