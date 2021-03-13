  import React from "react";
  import Navbar from "react-bootstrap/Navbar";
  import Form from "react-bootstrap/Form";
  import FormControl from "react-bootstrap/FormControl";
  import logo from "../assets/images/logo.svg";
  import Nav from "react-bootstrap/Nav";
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
        
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar.Collapse>
</Navbar> );
}

export default NavigationBar;