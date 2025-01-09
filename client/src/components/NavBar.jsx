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
//import Dropdown from "./pages/Dropdown";

function MyNavbar({ handleOpen }) {
  const { signOut, user } = useContext(AuthContext);
  const redirectTo = useNavigate();
  console.log("user :>> ", user);

  const handleSignOut = async () => {
    await signOut();
    redirectTo("/");
  };

  // function MyNavbar() {
  //   const [click, setClick] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);

  //   const handleClick = () => setClick(!click);
  //   const closeMobileMenu = () => setClick(false);

  //   const onMouseEnter = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(true);
  //     }
  //   };

  //   const onMouseLeave = () => {
  //     if (window.innerWidth < 960) {
  //       setDropdown(false);
  //     } else {
  //       setDropdown(false);
  //     }
  //   };

  //   return (
  //     <>
  //       <nav className="navbar">
  //         <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
  //           You can do it charity
  //           <i class="fab fa-firstdraft" />
  //         </Link>
  //         <div className="project" onClick={handleClick}>
  //           <i className={click ? "fas fa-times" : "fas fa-bars"} />
  //         </div>
  //         <ul className={click ? "nav-menu active" : "nav-menu"}>
  //           <li className="nav-item">
  //             <Link to="/" className="nav-links" onClick={closeMobileMenu}>
  //               Home
  //             </Link>
  //           </li>
  //           <li
  //             className="nav-item"
  //             onMouseEnter={onMouseEnter}
  //             onMouseLeave={onMouseLeave}
  //           >
  //             <Link
  //               to="/projects"
  //               className="nav-links"
  //               onClick={closeMobileMenu}
  //             >
  //               Projects <i className="fas fa-caret-down" />
  //             </Link>
  //             {dropdown && <Dropdown />}
  //           </li>
  //           <li className="nav-item">
  //             <Link
  //               to="/getInvolved"
  //               className="nav-links"
  //               onClick={closeMobileMenu}
  //             >
  //               GetInvolved
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link to="/media" className="nav-links" onClick={closeMobileMenu}>
  //               Media
  //             </Link>
  //           </li>
  //           <li className="nav-item">
  //             <Link
  //               to="/contact"
  //               className="nav-links"
  //               onClick={closeMobileMenu}
  //             >
  //               Contact
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to="/sign-up"
  //               className="nav-links-mobile"
  //               onClick={closeMobileMenu}
  //             >
  //               Sign Up
  //             </Link>
  //           </li>
  //           <li>
  //             <Link
  //               to="/sign-in"
  //               className="nav-links-mobile"
  //               onClick={closeMobileMenu}
  //             >
  //               Sign In
  //             </Link>
  //           </li>
  //         </ul>
  //         <Button />
  //       </nav>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <ul>
  //       {projects.map((projects, index) => {
  //         if (projects.title === "Services") {
  //           return (
  //             <li
  //               key={index}
  //               className={projects.cName}
  //               onMouseEnter={() => setProjectsDropdown(true)}
  //               onMouseLeave={() => setProjectsDropdown(false)}
  //             >
  //               <Link to={projects.path}>{projects.title}</Link>
  //               {projectsDropdown && <projectsDropdown />}
  //             </li>
  //           );
  //         }
  //         return (
  //           <li key={projects.id} className={projects.cName}>
  //             <Link to={projects.path}>{projects.title}</Link>
  //           </li>
  //         );
  //       })}
  //     </ul>
  //     <Button />

  //     </>
  return (
    <Navbar expand="sm" className="bg-body-tertiary pb-0">
      <Navbar.Brand href="/" className="mr-1 ml-0" as={Link}>
        <img
          src={
            "https://img.freepik.com/vektoren-premium/logo-fuer-die-handpflege-von-kindern-kinder-lieben-das-vektorsymbol_8586-1266.jpg?w=996"
          }
          alt=""
          style={{ width: "200px" }}
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
          {/* <Nav.Link to="/projectsDropdown" as={NavLink}>
            ProjectsDropdown
          </Nav.Link> */}
          {/* <ProjectsDropdown2 /> */}
          <Button onClick={handleOpen}>ProjectList</Button>
          {/* <NavDropdown>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
          </NavDropdown> */}
          <Nav.Link to="/getInvolved" as={NavLink}>
            GetInvolved
          </Nav.Link>
          <Nav.Link to="/media" as={NavLink}>
            Media
          </Nav.Link>
          <Nav.Link to="/contact" as={NavLink}>
            Contact
          </Nav.Link>
          <Nav.Link to="/donate" as={NavLink}>
            Donate
          </Nav.Link>
          <Nav.Link to="/createProject" as={NavLink}>
            CreateProject
          </Nav.Link>
          {!user && (
            <>
              <Nav.Link to="/signUp" as={NavLink}>
                SignUp
              </Nav.Link>
              <Nav.Link to="/signIn" as={NavLink}>
                SignIn
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
