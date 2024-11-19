import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo_sm.webp';
import Image from 'react-bootstrap/Image';

const ArtNavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/art">
          <Image src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top" />{' '}
           GRIFFIN NORTH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/art#hero">Home</Nav.Link>
            <NavDropdown title="Work" id="basic-nav-dropdown">
              <NavDropdown.Item href="/art/illustration">Illustration</NavDropdown.Item>
              <NavDropdown.Item href="/art/chardesign">Character Design</NavDropdown.Item>
              <NavDropdown.Item href="/art/envdesign">Environment Design</NavDropdown.Item>
              <NavDropdown.Item href="/art/bookcover">Book Cover</NavDropdown.Item>
              <NavDropdown.Item href="/art/lineart">Line Art</NavDropdown.Item>
              <NavDropdown.Item href="/art/commissions">Commission Samples</NavDropdown.Item>
              <NavDropdown.Divider />
              <Navbar.Collapse className="justify-content-center">
                <Navbar.Text>Comics</Navbar.Text>
              </Navbar.Collapse>
              <NavDropdown.Item href="/art/ac">Apocalypse Child</NavDropdown.Item>
              <NavDropdown.Item href="/art/tst">Tora Steals Things</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="https://artistree.io/griffinnorth">Commissions</Nav.Link>
            <Nav.Link href="/art#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default ArtNavBar