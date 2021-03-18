import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import img01 from "../assets/images/sofa2.webp";
import img02 from "../assets/images/sofa3.jpg";
import img03 from "../assets/images/sofa4.jpg";


function MainHeadingProducts() {
    return (
        <div className="product-main">
            <Jumbotron id="0" src="" alt="preview">
                <h1>Products</h1>
            </Jumbotron>
            <div className="thumbs">
               <div className="wrapper"><img id="1" className="thumb normal" src={img01} alt="1"/></div> 
               <div className="wrapper"><img id="2" className="thumb normal" src={img02} alt="2"/></div>  
               <div className="wrapper"><img id="3" className="thumb normal" src={img03} alt="3"/></div> 
            </div>
        </div>
        
    )

    
}

export default MainHeadingProducts
