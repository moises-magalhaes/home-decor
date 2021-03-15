import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./sass/style.scss";
// import Heading from "./components/Heading";
 import NavigationBar from "./components/NavigationBar";
// import HeadingImage  from "./components/HeadingImage";
// import ProductCards from "./components/ProductCards";
// import Testemunials from "./components/Testemunials";
 import FooterPage from "./components/Footer";
// import Products from "./components/Products";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (      
      <>
       <Router>
        <NavigationBar/>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>  
    </Router>
      <FooterPage/> 
        </>
    );
}

export default App;