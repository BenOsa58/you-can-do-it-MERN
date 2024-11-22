import React, { useEffect } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

import { useState } from "react";

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#ff5722",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
const DonateForm = ({ showDonateForm, setShowDonateForm, donateFormRef }) => {
  const [donationMoney, setDonationMoney] = useState(0);
  const [projects, setProjects] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    // donations: {
    //   50: false,
    //   100: false,
    // },
    project: "",
    donation: donationMoney,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("name, value :>> ", name, value);
    // if (type === "checkbox") {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     donations: {
    //       ...prevData.donations,
    //       [value]: checked,
    //     },
    //   }));
    // } else {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // }
    // if (name === "donation") {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     donations: {
    //       ...prevData.donations,
    //       [value]: donationMoney,
    //     },
    //   }));
    // } else {
    //   setFormData((prevData) => ({
    //     ...prevData,
    //     [name]: value,
    //   }));
    // }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("donationMoney :>> ", donationMoney);
    setFormData({ ...formData, donation: donationMoney });
    console.log("Form Submitted:", formData);
    // You can add your form submission logic here

    setShowDonateForm(false);
  };

  // const DonateForm = ({ projectId, donor, amount, donateFormRef }) => {

  //   const handleDonateClick = async () => {
  //     const response = await fetch(
  //       `http://localhost:5000/projects/donate/${projectId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           amount,
  //           donor,
  //         }),
  //       }
  //     );

  //     const data = await response.json();
  //     console.log("data :>> ", data);
  //     if (data.success) {
  //       alert("Thank you for your donation!");
  //     } else {
  //       alert("Donation failed. Please try again.");
  //     }
  //   };

  const getProjects = async () => {
    try {
      const response = await fetch("http://localhost:5000/projects/all");
      const data = await response.json();
      const projects = data.projects;
      console.log("projects :>> ", projects);
      setProjects(projects);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  useEffect(() => {
    if (donateFormRef.current) {
      donateFormRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
    getProjects();
  }, [showDonateForm]);
  return (
    <div ref={donateFormRef}>
      <h2>Donation Form</h2>
      <React.Fragment>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              placeholder=""
              aria-label="FirstName"
              aria-describedby="basic-addon1"
              name="firstName"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Last Name</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              placeholder=""
              aria-label="LastName"
              aria-describedby="basic-addon2"
              name="lastName"
            />
          </InputGroup>

          {/* <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Email</InputGroup.Text>
          <Form.Control
            type="number"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </InputGroup> */}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              name="email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            onChange={handleChange}
            name="project"
          >
            <option>Select the project to donate</option>
            {projects &&
              projects.map((project) => {
                return <option value={project.title}>{project.title}</option>;
              })}
          </Form.Select>
          <Form.Label>Select amount to donate : {donationMoney} €</Form.Label>
          <Form.Range
            max={1000}
            min={0}
            value={donationMoney}
            onChange={(e) => setDonationMoney(e.target.value)}
            name="donation"
          />

          <Button type="submit">Make Donation</Button>
        </Form>
      </React.Fragment>
    </div>
  );
};

export default DonateForm;
