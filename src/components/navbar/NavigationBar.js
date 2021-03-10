  import React from "react";
  import Navbar from "react-bootstrap/Navbar";
  import Form from "react-bootstrap/Form";
  import FormControl from "react-bootstrap/FormControl";

function NavigationBar() {
    return(
    <Navbar bg="dark" expand="lg">
  <Navbar.Brand href="#home">Home Decor</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Navbar.Collapse>
</Navbar> );
}

export default NavigationBar;