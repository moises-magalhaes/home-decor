import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import logo from "../assets/images/logo.svg";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import ShoppingBag from "../assets/images/bag.svg";
import Login from "../assets/images/login.svg";



function NavigationBar() {
    return(
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home"><img
                className="logo"
                src={logo}
                alt="Third slide"
              /></Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div class ="links">
          <NavLink exact to ="/" className="home" activeClassName="active" href="/">Home</NavLink>
          <NavLink exact to ="/About"className="about" activeClassName="active" href="/About">About</NavLink>
          <NavLink exact to ="/ProductPage"className="products" activeClassName="active" href="/ProductPage">Products</NavLink>
        </div>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />  <Button variant="primary">Search</Button>{' '}
        </Form>
        <div className="navIcons">
          <a href="/"><img src={ShoppingBag} alt="shopping cart"/></a>
          <a  href="/"><img src={Login} alt="login"/></a>
        </div>

        
      </Navbar.Collapse>
</Navbar> );
}

export default NavigationBar;