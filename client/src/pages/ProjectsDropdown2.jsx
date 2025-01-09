import React, { useState, useEffect } from "react";
import { Container, NavDropdown } from "react-bootstrap";
import Project from "../components/Project";

const ProjectsDropdown2 = () => {
  const [projects, setProjects] = useState([]);
  const projectsList = [
    "Education",
    "Hunger",
    "Poverty",
    "Housing",
    "Health",
    "Water",
    "Medicine",
    "Climate Change",
  ];
  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/projects/all");
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    // finally {
    //   setLoading(false);
    // }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <NavDropdown title="Projects" id="basic-nav-dropdown">
      {projects &&
        projects.map((project, index) => (
          <NavDropdown.Item key={index}>
            <Project project={project} fetchProjects={fetchProjects} />
          </NavDropdown.Item>
        ))}

      {/* <label htmlFor="projectsDropdown">Select a Project: </label>
      <select id="projectsDropdown" name="projectsDropdown">
        {projectsList.map((project, index) => (
          <option
            key={index}
            value={project.toLowerCase().replace(/\s+/g, "-")}
          >
            {project}
          </option>
        ))}
      </select> */}
    </NavDropdown>
  );
};

export default ProjectsDropdown2;
