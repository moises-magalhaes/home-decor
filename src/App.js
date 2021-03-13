import React from "react";
import "./sass/style.scss";
import Heading from "./components/Heading";
import NavigationBar from "./components/NavigationBar";
import HeadingImage  from "./components/HeadingImage";
import ProductCards from "./components/ProductCards";
import Testemunials from "./components/Testemunials";
import FooterPage from "./components/Footer";
import Products from "./components/Products";


function App() {
    return (
      <>
      <NavigationBar/>
      <HeadingImage/>
      <div className="container">
          <Heading/>
          <ProductCards/>
          <Products/>
          <Testemunials/>
      </div>
      <FooterPage/>
        </>
    );
}

export default App;