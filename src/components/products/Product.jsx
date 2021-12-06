import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { getProductData } from '../../data/product-data';
import withLayout from '../../hocs/withLayout';
import ProductFilter from './ProductFilter';

const Product = () => {
    const [products, setProducts] = useState(getProductData());
    const [searchParams] = useSearchParams();
    const min_price = searchParams.get('min_price') === null ? '' : searchParams.get('min_price');
    const max_price = searchParams.get('max_price') === null ? '' : searchParams.get('max_price');
    const search = searchParams.get('search') === null ? '' : searchParams.get('search');

    useEffect(() => {
        filterProducts();
    }, []);

    const filterProducts = () => {
        // check minimum one entry occur
        if (search.length || min_price.length || max_price.length) {

            const min = parseFloat(min_price);
            const max = parseFloat(max_price);

            // filter products with these conditions
            const filtered = products.filter(product => {
                // if min price > product price get product
                if (min > 0 && min > product.price) {
                    return false;
                }

                // max price max price < product price get product
                if (max > 0 && max < product.price) {
                    return false;
                }

                // search
                if (search.length > 0 && ! product.title.toLowerCase().includes(search.toLowerCase())) {
                    return false;
                }

                return true;
            })

            // set products
            setProducts(filtered);
        }
    }

    return (
        <div className="product-area-full">
            <h2>Products</h2>
            <br />
            <ProductFilter />
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

export default withLayout(Product);