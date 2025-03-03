import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Project from "../components/Project";

const ProjectsDropdown = ({ open }) => {
  const [projectsDropdown, setprojectsDropdown] = useState(false);

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
      const response = await fetch(
        `${process.env.VITE_SERVER_URL}/api/projects/all`
      );
      // "http://localhost:5000/projects/all");
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      {open && (
        <div
          style={{
            maxWidth: "300px",
            position: "absolute",
            backgroundColor: "white",
            maxHeight: "800px",
            overflow: "auto",
          }}
        >
          <Container className="p-3">
            <h1>You Can Do It Charity</h1>

            {projects &&
              projects.map((project, index) => (
                <Project
                  key={index}
                  project={project}
                  fetchProjects={fetchProjects}
                />
              ))}

            <label htmlFor="projectsDropdown">Select a Project: </label>
            <select id="projectsDropdown" name="projectsDropdown">
              {projectsList.map((project, index) => (
                <option
                  key={index}
                  value={project.toLowerCase().replace(/\s+/g, "-")}
                >
                  {project}
                </option>
              ))}
            </select>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProjectsDropdown;
