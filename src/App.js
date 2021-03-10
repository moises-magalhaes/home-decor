import React from "react";
import "./App.css";
import Heading from "./components/content/Heading";
import Paragraph from "./components/content/Paragraph";
import NavigationBar from "./components/navbar/NavigationBar";
import HeadingImage  from "./components/content/HeadingImage";
import ProductCards from "./components/content/ProductCards";
import Testemunials from "./components/content/Testemunials";
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