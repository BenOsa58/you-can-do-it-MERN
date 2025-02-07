import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectsList from "./ProjectsList";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Dropdown() {
  const handleChange = (event) => {
    setSelectedProjects(event.target.value);
  };

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <Row>
          {projects &&
            projects.map((project, index) => (
              <Col key={index}>
                <ProjectsList project={project} fetchProjects={fetchProjects} />
              </Col>
            ))}
        </Row>
        {ProjectsList.map((project, index) => {
          return (
            <li key={index}>
              <Link
                className={project.cName}
                to={project.path}
                onClick={() => setClick(false)}
              >
                {project.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
