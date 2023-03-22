import React from "react"
import { Link } from "gatsby"
import logo from "../images/by-covid-logo.svg"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Menu = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bs-body-color">
      <Container>
        <Link to="/">
          <img src={logo} alt="BY-COVID logo" width="150" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="home">
              Home
            </Nav.Link>
            <NavDropdown
              title="About"
              id="basic-nav-dropdown"
              className="about"
            >
              <NavDropdown.Item as={Link} to="/about">
                About
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#objectives">
                Objectives
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#structure">
                Structure
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#data-platform">
                COVID-19 Data Platform
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#media">
                Media
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#partners">
                Partners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#outreach">
                Outreach
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about#external-projects">
                Alignment with external projects
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/outputs" className="outcomes">
              Outputs
            </Nav.Link>
            <NavDropdown
              title="News & events"
              id="basic-nav-dropdown"
              className="news-events"
              
            >
              <NavDropdown.Item as={Link} to="/news" className="news">
              News
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/events" className="events">
              Events
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/newsletters" className="news-letters">
              Newsletters
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/usecases" className="usecases">
              For Citizens
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu
