import React from "react";
import { BrowserRouter as Router, Switch, Route, /*Link */} from "react-router-dom";
import "./sass/style.scss";
import NavigationBar from "./components/NavigationBar";
import FooterPage from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductPage";

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
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/About" component={Home}>
            <About />
          </Route>
          <Route path="/ProductPage" component={Home}>
            <ProductsPage />
          </Route>
          <Route path="/Contact" component={Home}>
            <Contact />
          </Route>
        </Switch>  
    </Router>
      <FooterPage/> 
        </>
    );
}

export default App;