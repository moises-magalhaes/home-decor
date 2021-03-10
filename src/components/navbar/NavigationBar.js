  import React from "react";
  import Navbar from "react-bootstrap/Navbar";
  import Form from "react-bootstrap/Form";
  import FormControl from "react-bootstrap/FormControl";
  import styles from "./navigationBar.module.css"

function NavigationBar() {
    return(
    <Navbar bg="light" expand="lg" className={styles.navbar}>
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