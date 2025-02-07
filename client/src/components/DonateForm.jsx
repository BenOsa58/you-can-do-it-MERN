import React, { Component, useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";

const DonateForm = ({ projectId, donor, amount, donateFormRef }) => {
  const [projects, setProjects] = useState(null);
  console.log("projects :>> ", projects);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [donationMoney, setDonationMoney] = useState(0);
  const [paymentMethods, setPaymentMethod] = useState("");
  const [selectedPaymentMethods, setSelectedPaymentMethod] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("firstName", firstName);
    urlencoded.append("lastName", lastName);
    urlencoded.append("email", email);
    urlencoded.append("amount", donationMoney);
    urlencoded.append("projectId", selectedProjectId);

    urlencoded.append("paymentMethod", selectedPaymentMethods);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
    };
    try {
      const response = await fetch(
        `${process.env.VITE_SERVER_URL}/api/user/donate`,
        // "http://localhost:5000/projects/donate/" + selectedProjectId,
        requestOptions
      );
      const result = await response.json();
      console.log("result :>> ", result);
      alert(result.message);
    } catch (error) {
      console.log("error sending donation :>> ", error);
    }
  };

  const handleChangeFirstName = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  };

  const handleChangeLastName = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSelectedProject = (event) => {
    console.log("event.target.value :>> ", event.target.value);
    setSelectedProjectId(event.target.value);
  };
  const handleChangeDonationMoney = (event) => {
    setDonationMoney(event.target.value);
  };

  const handleChangeSelectedPaymentMethods = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const getProjects = async () => {
    try {
      const response = await fetch(
        `${process.env.VITE_SERVER_URL}/projects/all`
      );
      // "http://localhost:5000/projects/all");
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div ref={donateFormRef}>
      <h2>Donation Form</h2>
      <React.Fragment>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control
              onChange={handleChangeFirstName}
              placeholder=""
              aria-label="FirstName"
              aria-describedby="basic-addon1"
              name="firstName"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>
            <Form.Control
              onChange={handleChangeLastName}
              placeholder=""
              aria-label="LastName"
              aria-describedby="basic-addon2"
              name="lastName"
            />
          </InputGroup>
          {/* <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">paymentMethods</InputGroup.Text>
            <Form.Control
              onChange={handleChangePaymentMethods}
              placeholder=""
              aria-label="PaymentMethods"
              aria-describedby="basic-addon2"
              name="paymentMethods"
            />
          </InputGroup> */}

          <InputGroup className="mb-3" controlId="formBasicEmail">
            <InputGroup.Text id="basic-addon2">Enter Email</InputGroup.Text>
            <Form.Control
              onChange={handleChangeEmail}
              type="email"
              placeholder=""
              name="email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </InputGroup>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeSelectedPaymentMethods}
            name="paymentMethod"
          >
            <option>Select paymentMethod to donate</option>
            <option value="credit card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank transfer">Bank Transfer</option>
          </Form.Select>
          <Form.Select
            aria-label="Default select example"
            onChange={handleChangeSelectedProject}
            name="project"
          >
            <option>Select the project to donate</option>
            {projects &&
              projects.map((project) => {
                return (
                  <option value={project._id} key={project._id}>
                    {project.title} ({project.category})
                  </option>
                );
              })}
          </Form.Select>
          <Form.Label>Select amount to donate : {donationMoney} €</Form.Label>
          <Form.Range
            max={1000}
            min={0}
            value={donationMoney}
            onChange={handleChangeDonationMoney}
            name="donation"
          />
          <Button type="submit">Make Donation</Button>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default DonateForm;
