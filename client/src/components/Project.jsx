import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";

function Project(props) {
  console.log("props :>> ", props);
  const project = props.project;
  const fetchProjects = props.fetchProjects;
  console.log("project :>> ", project);
  const [amount, setAmount] = useState(20);
  const [donorName, setDonorName] = useState("");

  console.log("donorName :>> ", donorName);
  const handleDeleteProject = async () => {
    console.log("project._id", project._id);
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    try {
      const response = await fetch(
        `http://localhost:5000/projects/${project._id}`,
        requestOptions
      );
      const result = await response.json();
      console.log("result :>> ", result);
      alert(result.message);
      fetchProjects();
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={project.image} />
        <img src="" alt="" />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>title-{project.title}</Card.Text>
          <Card.Text>category-{project.category}</Card.Text>
          <Card.Text>description-{project.description}</Card.Text>
          <div></div>

          <Button onClick={handleDeleteProject} variant="danger">
            Delete project
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Project;
