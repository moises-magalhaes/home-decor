import React from 'react';
import Heading from "../components/Heading";
import ProductCards from "../components/ProductCards";
import Products from "../components/Products";
import MainHeadingProducts from '../components/MainHeadingProducts';

function ProductsPage() {
    return (
        <>
        <MainHeadingProducts/>
            <div className="container">
                <Heading/>
                <ProductCards/>
                <Products/>
            </div>
        </>
    )
}
    export default ProductsPage