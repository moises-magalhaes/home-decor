import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";
import NavigationBar from "./components/NavigationBar";
import HeadingImage  from "./components/HeadingImage";
import ProductCards from "./components/ProductCards";

function App() {
    return (
      <>
      <NavigationBar/>
      <HeadingImage/>
      <div className="container">
          <Heading/>
          <Paragraph />
          <ProductCards/>
      </div>
        </>
    );
}

export default App;