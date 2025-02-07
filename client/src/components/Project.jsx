import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Form } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function Project(props) {
  // console.log("props :>> ", props);
  const { user } = useContext(AuthContext);
  // console.log("user :>> ", user);
  const project = props.project;
  const fetchProjects = props.fetchProjects;
  // console.log("project :>> ", project);
  const [amount, setAmount] = useState(20);
  const [donorName, setDonorName] = useState("");

  // console.log("donorName :>> ", donorName);
  const handleDeleteProject = async () => {
    console.log("project._id", project._id);
    const token = localStorage.getItem("token");
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", `Bearer ${token}`);
    const urlencoded = new URLSearchParams();
    urlencoded.append("projectId", project._id);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
      const response = await fetch(
        `${process.env.VITE_SERVER_URL}/projects/singleProject/delete`,

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
      <Card style={{ width: "53rem" }}>
        <Card.Img variant="top" src={project.image} />
        <img src="" alt="" />

        <Card.Body>
          <Link to={`${project._id}`}>
            <Card.Title>{project.title}</Card.Title>
          </Link>
          <Card.Text>title-{project.title}</Card.Text>
          <Card.Text>category-{project.category}</Card.Text>
          <Card.Text>description-{project.description}</Card.Text>
          <div></div>
          {project?.userId && user?.id === project.userId && (
            <Button onClick={handleDeleteProject} variant="danger">
              Delete project
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Project;
