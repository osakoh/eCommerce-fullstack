import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/cart'>
                <IoCartOutline style={{ fontSize: "1.2rem" }} />
                &nbsp;Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <FaRegUser style={{ fontSize: "1.2rem" }} />
                &nbsp;Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
