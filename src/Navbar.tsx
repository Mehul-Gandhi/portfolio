import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/" style={{ marginLeft: '15px' }}>Mehul Gandhi</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav style={{ marginLeft: 'auto', marginRight: '20px' }}>
          <Nav.Link as={Link} to="/" style={{ marginRight: '15px' }}>Home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ marginRight: '15px' }}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/services" style={{ marginRight: '15px' }}>Notes</Nav.Link>
          <Nav.Link as={Link} to="/resume" style={{ marginRight: '15px' }}>Resume</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};
