import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/ProjectsList";
import GetInvolved from "./pages/GetInvolved";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProjectsList from "./pages/ProjectsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/getInvolved" element={<GetInvolved />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

<>
  <h1>You Can Do It Charity - project</h1>
  <ProjectsList />
</>;

export default App;
