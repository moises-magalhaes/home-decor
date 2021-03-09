import React from "react";
import {Nav, Navbar } from "react-bootstrap"

// import styled from "styled-components";

// const Styles = styled.div`
// .navbar {
//     background-color: #222;
// }

// .navbar-brand .navbar-nav .nav-link {
//     color: #bbb;

//     &hover {
//         color: white;
//     }
// }
// `;

export const NavigationBar = () => (
    <>
        <Navbar expand="lg"> 
        <Navbar.Brand href="/">Home Decor</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.link href="/">Home</Nav.link></Nav.Item>
                    <Nav.Item><Nav.link href="/about">About</Nav.link></Nav.Item>
                    <Nav.Item><Nav.link href="/contact">Contact</Nav.link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)