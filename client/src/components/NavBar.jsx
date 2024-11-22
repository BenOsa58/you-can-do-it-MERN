import React, { useState, useEffect } from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function MyNavbar() {
  // const { projects, projectList } = projects(projectList);
  const [projects, setProjects] = useState([]);
  {
    return (
      <Navbar expand="sm" className="bg-body-tertiary pb-0">
        <Container>
          <Navbar.Brand href="/" className="mr-1 ml-0" as={Link}>
            <img src="./churchIconSvg.svg" alt="" style={{ width: "50px" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>

              <Nav.Link to="/projects" as={NavLink}>
                Projects
              </Nav.Link>
              <Nav.Link to="/getInvolved" as={NavLink}>
                GetInvolved
              </Nav.Link>
              <Nav.Link to="/media" as={NavLink}>
                Media
              </Nav.Link>
              <Nav.Link to="/Contact" as={NavLink}>
                Contact
              </Nav.Link>
              <Nav.Link to="/donate" as={NavLink}>
                Donate
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MyNavbar;
