import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = ({ onNav }) => (
  <Navbar bg="primary" variant="dark" expand="lg" style={{ background: '#7c3aed' }}>
    <Container>
      <Navbar.Brand style={{ fontWeight: 700, fontSize: '1.3rem' }}>Deepfake Detector</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={() => onNav('start')} style={{ color: '#fff', fontWeight: 600 }}>Get Started</Nav.Link>
        <Nav.Link onClick={() => onNav('overview')} style={{ color: '#fff', fontWeight: 600 }}>Project Overview</Nav.Link>
        <Nav.Link onClick={() => onNav('detect')} style={{ color: '#fff', fontWeight: 600 }}>Detect</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default CustomNavbar;