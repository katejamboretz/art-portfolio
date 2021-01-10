import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavTabs() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="portfolio">Anne Jamboretz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Galleries" id="basic-nav-dropdown">
              <NavDropdown.Item href="portfolio">Full Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="pets">Pet Portraits, Animals</NavDropdown.Item>
              <NavDropdown.Item href="music">Music Inspired</NavDropdown.Item>
              <NavDropdown.Item href="landscapes">Landscapes</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about">Background</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>
  );
}

export default NavTabs;
