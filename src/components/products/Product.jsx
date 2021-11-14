import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { getProductData } from '../../data/product-data';

const Product = () => {

    const [products, setProducts] = useState(getProductData());

    return (
        <div className="product-area-full">
            <h2>Products</h2>
            <br />
            <div className="product-area">
                {
                    products.map((product, index) => (
                        <div key={index} className="product-single">
                            <p>
                                <img src={product.image} style={{ width: 'auto', height: 100 }} alt="" />
                            </p>
                            <h3>{product.title}</h3>
                            <h3 style={{ color: 'red' }}>{product.price} BDT</h3>
                            <p>
                                <Link to={`/products/${product.id}`} className="product-button">
                                    Products Details
                                </Link>
                            </p>

                        </div>
                    ))
                }
            </div>
        </div>
     );
}

export default Product;