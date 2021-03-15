import React from 'react';
import Heading from "../components/Heading";
import HeadingImage  from "../components/HeadingImage";
import ProductCards from "../components/ProductCards";
import Testemunials from "../components/Testemunials";
import Products from "../components/Products";

function About(){ 
    return (
        <>
        <HeadingImage/>
            <div className="container">
                <Heading/>
                <ProductCards/>
                <Products/>
                <Testemunials/>
            </div>
        </>
    )
}
    export default About