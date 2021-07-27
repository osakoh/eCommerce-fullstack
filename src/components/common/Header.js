import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          {/* links to homepage */}
          <LinkContainer to='/'>
            <Navbar.Brand>Ecommerce</Navbar.Brand>
          </LinkContainer>
          {/* links to homepage */}

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              {/* links to cart */}
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <IoCartOutline style={{ fontSize: "1.2rem" }} />
                  &nbsp;Cart
                </Nav.Link>
              </LinkContainer>
              {/* links to cart */}

              {/* links to login */}
              <LinkContainer to='/login'>
                <Nav.Link>
                  <FaRegUser style={{ fontSize: "1.2rem" }} />
                  &nbsp;Login
                </Nav.Link>
              </LinkContainer>
              {/* links to login */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
