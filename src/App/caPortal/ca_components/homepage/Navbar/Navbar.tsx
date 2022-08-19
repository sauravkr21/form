import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css";

function NavBar() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container style={{height:"auto", width:"auto"}}>
        <Navbar.Brand href="/"><img className="logo" src={require('./antaragni-logo.png')} alt="Logo"/> Antaragni</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="why">Why</Nav.Link>
            <Nav.Link href="incentives">Incentives</Nav.Link>
            <Nav.Link href="responsibilities">Responsibilities</Nav.Link>
            <Nav.Link href="faqs">FAQs</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="sponsors">Sponsors</Nav.Link>
            <Nav.Link href="/">Login</Nav.Link>
            <NavDropdown title="Socials" id="collasible-nav-dropdown">
              <NavDropdown.Item target="to_blank" href="https://www.instagram.com/antaragni.iitkanpur/">Instagram</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item target="to_blank" href="https://www.facebook.com/antaragni.iitk">Facebook</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item target="to_blank" href="https://www.linkedin.com/company/antaragni-iit-kanpur/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item target="to_blank" href="https://www.youtube.com/user/antaragniiitkanpur">Youtube</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;