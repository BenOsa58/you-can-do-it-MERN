import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";
import GetInvolved from "./pages/GetInvolved";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
//import ProjectsDropdown from "./pages/ProjectsDropdown";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Footer from "./pages/Footer";
import { AuthContext } from "./components/context/AuthContext";
import CreateProject from "./pages/CreateProject";
import ProjectsDropdown from "./pages/ProjectsDropdown";
//import Dropdown from "./pages/Dropdown";
//import PaymentMethod from "./components/PaymentMethod";
function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <Router>
      <Navbar handleOpen={handleOpen} />
      <ProjectsDropdown open={open} />
      {/* <Dropdown open={open} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projectsDropdown" element={<ProjectsDropdown />} /> */}
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/createProject" element={<CreateProject />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
