import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DonateButton from "./DonateForm";
import { Form } from "react-bootstrap";

function Project(props) {
  const project = props.project;
  console.log("project :>> ", project);
  const [amount, setAmount] = useState(20);
  const [donorName, setDonorName] = useState("");
  // use state amount donor name
  console.log("donorName :>> ", donorName);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg"
        />
        <img src="" alt="" />
        <Card.Body>
          <Card.Title>{Project.title}</Card.Title>
          <Card.Text>
            <p>category-{project.cagtegory}</p>
            <p>description-{project.description}</p>
            <p>likes - {project.likes} </p>
            <p>supporters-{project.supporters}</p>
            <p>title-{project.title}</p>
          </Card.Text>
          {/* form inputs amount name to fill state */}
          <div>
            <h2>Donation Form</h2>
            <Form
            // onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="donorName">Donor Name:</label>
                <input
                  type="text"
                  id="donorName"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  placeholder="Enter your name"
                />
              </div>

              {/* Input for donation amount */}
              <div>
                <label htmlFor="amount">Amount:</label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter donation amount"
                />
              </div>
            </Form>
          </div>

          {donorName && (
            <DonateButton
              projectId={project._id}
              amount={amount}
              donor={donorName}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Project;
