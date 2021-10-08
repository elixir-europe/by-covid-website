import React from 'react'
import { Link } from 'gatsby'
import logo from "../images/by-covid-logo.svg"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Menu = () => {

  return (
    <>
      <Navbar fixed="top" expand="lg" className="bs-body-color">
      <Container>
        <Link to="/"><img src={logo} alt="BY-COVID logo" width ="150" /></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown" className="about">
              <NavDropdown.Item  as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/about#objectives">Objectives</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/about#structure">Structure</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/about#partners">Partners</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  as={Link} to="/outcomes" className="outcomes">Outcomes</Nav.Link>
            <Nav.Link  as={Link} to="/news-events" className="news-events">News & events</Nav.Link>
            <Nav.Link  as={Link} to="/outreach-media" className="outreach">Outreach & media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}


export default Menu
