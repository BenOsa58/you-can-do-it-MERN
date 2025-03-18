import React, { useState, useContext } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/context/AuthContext";
import reactSVG from "../assets/react.svg";
import ProjectsDropdown from "../pages/ProjectsDropdown";
import Projects from "../pages/ProjectsList";
import ProjectsDropdown2 from "../pages/ProjectsDropdown2";

function MyNavbar({ handleOpen }) {
  const { signOut, user } = useContext(AuthContext);
  const redirectTo = useNavigate();
  // console.log("user :>> ", user);

  const handleSignOut = async () => {
    await signOut();
    redirectTo("/");
  };

  return (
    <Navbar expand="sm" className="bg-body-tertiary pb-0">
      <Navbar.Brand href="/" className="mr-1 ml-0" as={Link}>
        <img
          src={
            "https://img.freepik.com/vektoren-premium/logo-fuer-die-handpflege-von-kindern-kinder-lieben-das-vektorsymbol_8586-1266.jpg?w=996"
          }
          alt=""
          style={{ width: "150px" }}
        />
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
            Get Involved
          </Nav.Link>
          <Nav.Link to="/media" as={NavLink}>
            Media
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link
            // to="https://donate.stripe.com/test_fZe7ut9wr6CecIU9AC"
            to="/donate"
            as={NavLink}
          >
            Donate
          </Nav.Link>
          <Nav.Link to="/createProject" as={NavLink}>
            Create Project
          </Nav.Link>

          {!user && (
            <>
              <Nav.Link to="/signUp" as={NavLink}>
                Sign Up
              </Nav.Link>
              <Nav.Link to="/signIn" as={NavLink}>
                Sign In
              </Nav.Link>
            </>
          )}
          {user && (
            <Button variant="primary" onClick={handleSignOut}>
              Sign Out
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MyNavbar;

//   <Navbar
//   expand="lg"
//   className="bg-body-tertiary border-bottom"
//   style={{
//     backgroundColor: '#f8f9fa',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//   }}
// >
//   <Container>
//     <Navbar.Brand href="/" className="me-0" as={Link}>
//       <img
//         src={
//           "https://img.freepik.com/vektoren-premium/logo-fuer-die-handpflege-von-kindern-kinder-lieben-das-vektorsymbol_8586-1266.jpg?w=996"
//         }
//         alt=""
//         style={{ width: "150px" }}
//       />
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mx-auto">
//         <Nav.Link to="/" as={NavLink} className="px-3">
//           Home
//         </Nav.Link>
//         <Nav.Link to="/projects" as={NavLink} className="px-3">
//           Projects
//         </Nav.Link>
//         <Nav.Link to="/getInvolved" as={NavLink} className="px-3">
//           Get Involved
//         </Nav.Link>
//         <Nav.Link to="/media" as={NavLink} className="px-3">
//           Media
//         </Nav.Link>
//         <Nav.Link to="/contact" as={NavLink} className="px-3">
//           Contact
//         </Nav.Link>
//         <Nav.Link to="/donate" as={NavLink} className="px-3">
//           Donate
//         </Nav.Link>
//         <Nav.Link to="/createProject" as={NavLink} className="px-3">
//           Create Project
//         </Nav.Link>
//         <Nav.Link to="/payment-test" as={NavLink} className="px-3">
//           Payment Test
//         </Nav.Link>
//       </Nav>
//       <Nav>
//         {!user && (
//           <div className="d-flex gap-3">
//             <Nav.Link to="/signUp" as={NavLink}>
//               Sign Up
//             </Nav.Link>
//             <Nav.Link to="/signIn" as={NavLink}>
//               Sign In
//             </Nav.Link>
//           </div>
//         )}
//         {user && (
//           <Button variant="primary" onClick={handleSignOut}>
//             Sign Out
//           </Button>
//         )}
//       </Nav>
//     </Navbar.Collapse>
//   </Container>
