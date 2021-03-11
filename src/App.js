import React from "react";
import "./App.css";
import Heading from "./components/content/heading/Heading";
import Paragraph from "./components/content/Paragraph";
import NavigationBar from "./components/navbar/NavigationBar";
import HeadingImage  from "./components/content/heading/HeadingImage";
import ProductCards from "./components/content/products/ProductCards";
import Testemunials from "./components/content/slide/Testemunials";
import FooterPage from "./components/footer/Footer";

function App() {
    return (
      <>
      <NavigationBar/>
      <HeadingImage/>
      <div className="container">
          <Heading/>
          <Paragraph />
          <ProductCards/>
          <Testemunials/>
      </div>
      <FooterPage/>
        </>
    );
}

export default App;