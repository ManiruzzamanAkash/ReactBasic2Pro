import React, { Component } from 'react';
import ProductDetail from './ProductDetail';

class Product extends Component{
    render(){
        return (
            <>
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
            </>
        )
    }
}
export default Product;