import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CountdownTimer from './CountdownTimer';
import { UserContext } from './UserContext';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const { userRole } = useContext(UserContext); // 👈 get role from context

  function toggleTheme() {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? 'bg-light text-dark' : 'bg-dark text-light';
  }

  return (
    <>
      <Navbar bg={darkMode ? 'dark' : 'light'} variant={darkMode ? 'dark' : 'light'} expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">Race for Change</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/donate">Donate</Nav.Link>
              <Nav.Link as={Link} to="/event-info">Race Info</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} to="/highlights">Highlights</Nav.Link>
              <Nav.Link as={Link} to="/community">Community</Nav.Link>
              {userRole === 'volunteer' && (
                <Nav.Link as={Link} to="/volunteer">Volunteer</Nav.Link>
              )}
            </Nav>
            <Button variant={darkMode ? 'outline-light' : 'outline-dark'} onClick={toggleTheme}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Countdown Timer Fixed Top */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          textAlign: 'center',
          padding: '0.5rem',
          backgroundColor: darkMode ? '#212529' : '#f8f9fa',
          zIndex: 1000,
        }}
      >
        <CountdownTimer />
      </div>
    </>
  );
}
