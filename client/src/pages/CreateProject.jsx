import React, { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const CreateProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title, description, category", title, description, category);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("title", title);
    urlencoded.append("description", description);
    urlencoded.append("category", category);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/projects/createProject",
        requestOptions
      );
      const result = await response.json();
      console.log("result :>> ", result);
      alert(result.message);
    } catch (error) {
      console.log("error creating project", error);
    }
  };

  const handleChangeTitle = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  };
  const handleChangeCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };

  return (
    // <div ref={createProjectFormRef}>
    <div>
      <h2>CreateProject Form</h2>
      <React.Fragment>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
            <Form.Control
              onChange={handleChangeTitle}
              placeholder=""
              aria-label="Title"
              aria-describedby="basic-addon1"
              name="title"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Description</InputGroup.Text>
            <Form.Control
              onChange={handleChangeDescription}
              placeholder=""
              aria-label="Description"
              aria-describedby="basic-addon2"
              name="description"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Select
              aria-label="Default select example"
              onChange={handleChangeCategory}
            >
              <option>Choose a category for your project</option>
              <option value="poverty">Poverty</option>
              <option value="hunger">Hunger</option>
              <option value="education">Education</option>
              <option value="water">Water</option>
              <option value="housing">Housing</option>
              <option value="health">Health</option>
              <option value="medicine">Medicine</option>
            </Form.Select>
          </InputGroup>
          <Form.Text className="text-muted"></Form.Text>
          <Button type="submit">Create Project</Button>
        </Form>
      </React.Fragment>
    </div>
  );
};

// };

export default CreateProject;
