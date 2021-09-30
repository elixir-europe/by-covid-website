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
            <Nav.Link href="/" className="home">Home</Nav.Link>
            <NavDropdown title="About" id="basic-nav-dropdown" className="about">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/about#objectives">Objectives</NavDropdown.Item>
              <NavDropdown.Item href="/about#structure">Structure</NavDropdown.Item>
              <NavDropdown.Item href="/about#partners">Partners</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Outcomes" id="basic-nav-dropdown" className="outcomes">
              <NavDropdown.Item href="/outcomes">Outcomes</NavDropdown.Item>
              <NavDropdown.Item href="/outcomes/deliverables-milestones">Deliverables & milestones</NavDropdown.Item>
              <NavDropdown.Item href="/outcomes/publications">Publications</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news-events" className="news-events">News & events</Nav.Link>
            <Nav.Link href="/outreach" className="outreach">Outreach & media</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}


export default Menu
