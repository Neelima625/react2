import React from 'react';
import { Nav , NavLink } from 'react-bootstrap';
import { Navbar, Container } from 'react-bootstrap';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import img from './images/image.png'
const Navbar1 = () => {
  return (
    <>
     <Navbar
      expand="lg"
      variant="dark"
      className="px-3"
      style={{ backgroundColor: '#0260FF' }} // Navy blue
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={img}
            width="60"
            height="50"
            className="d-inline-block align-top me-2"
            alt="Payman Logo"
          />
          <span className="fw-bold">PAYMAN</span>
        </Navbar.Brand>

        {/* Toggler visible only on small screens (expand="lg" controls this) */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <div className="d-flex gap-4 align-items-center">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaTwitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white', fontSize: '1.5rem' }}
          >
            <FaInstagram />
          </a>
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
    
  );
};

export default Navbar1;
