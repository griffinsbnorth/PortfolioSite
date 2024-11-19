import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo_sm.webp';
import Image from 'react-bootstrap/Image';

const DevNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
      <Navbar.Brand href="#hero">
          <Image src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top" />{' '}
           GRIFFIN NORTH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default DevNavBar