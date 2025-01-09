import React, { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import { Link } from "react-router-dom";
//import projectsModel from "../../../server/model/projectsModel";

const ProjectsDropdown = ({ open }) => {
  const [projectsDropdown, setprojectsDropdown] = useState(false);
  //   const handleChangeProjectsDropdown = (event) => {
  //     console.log(event.target.value);
  //     setProjectsDropdown(event.target.value);
  //   };
  //   return (
  //     <>
  //       <ul
  //         className={
  //           projectsDropdown ? "services-submenu clicked" : "services-submenu"
  //         }
  //         onClick={() => setProjectsDropdown(!projectsDropdown)}
  //       >
  //         {projectsDropdown.map((projects) => {
  //           return (
  //             <li key={projects.id}>
  //               <Link
  //                 to={projects.path}
  //                 className={projects.cName}
  //                 onClick={() => setprojectsDropdown(false)}
  //               >
  //                 {projects.title}
  //               </Link>
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </>
  //   );

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
            {/* <ProjectsCard projects={projects} /> */}
            {/* <ProjectsCarousel projects={projects} />
      {loading && <p>Loading...</p>} */}
            {/* <Container> */}
            {/* <Row> */}
            {projects &&
              projects.map((project, index) => (
                // <Col key={index}>
                <Project
                  key={index}
                  project={project}
                  fetchProjects={fetchProjects}
                />
                //</Col>
              ))}
            {/* </Row> */}
            {/* </Container> */}

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
