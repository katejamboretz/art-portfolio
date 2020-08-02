import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="portfolio">Anne Jamboretz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="portfolio">Portfolio</Nav.Link>
            <Nav.Link href="about">Background</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default NavTabs;
