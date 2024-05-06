import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const NavbarComponent = () => {
 

  return (
    <Navbar className='custom-navbar' variant="dark">
      <Container>
      
        <Navbar.Collapse id="responsive-navbar-nav" >
        <img src={logo} alt="Logo" className="navbar-logo" />
          <Nav className="navbar-links">
            <Nav.Link as={Link} to="/" className='navlink'>HomePage</Nav.Link>
            <Nav.Link as={Link} to="/login" className='navlink'>Login</Nav.Link>
            <Nav.Link as={Link} to="/register" className='navlink'>Get an Offer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
