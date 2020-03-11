import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { SearchForm } from '.';
import { Link } from 'react-router-dom';

const Styles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
  }
}

const Header = () =>
  <header style={Styles.header}>
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand>My React/DatoCMS Blog</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">Home</Link></Nav.Link>
          <Nav.Link><Link to="/category">Categories</Link></Nav.Link>
        </Nav>
        <SearchForm />
      </Navbar.Collapse>
    </Navbar>
  </header>
;

export default Header;
