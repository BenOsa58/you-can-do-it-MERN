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
  useEffect(() => {
    if (donateFormRef.current) {
      donateFormRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
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
            <option value="Project 1">Project 1</option>
            <option value="Project 2">Project 2</option>
            <option value="Project 3">Project 3</option>
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

// donation form without styling

// <form onSubmit={handleSubmit}>

// <label htmlFor="firstName">First Name:</label>
// <input
//   type="text"
//   id="firstName"
//   name="firstName"
//   value={formData.firstName}
//   onChange={handleChange}
//   required
// />
// <br />
// <br />

// <label htmlFor="lastName">Last Name:</label>
// <input
//   type="text"
//   id="lastName"
//   name="lastName"
//   value={formData.lastName}
//   onChange={handleChange}
//   required
// />
// <br />
// <br />

// <label htmlFor="email">Email:</label>
// <input
//   type="email"
//   id="email"
//   name="email"
//   value={formData.email}
//   onChange={handleChange}
//   required
// />
// <br />
// <br />

// <p>Choose your donation amount:</p>
// <input
//   type="checkbox"
//   id="donation10"
//   name="donation10"
//   value="10"
//   checked={formData.donations[10]}
//   onChange={handleChange}
// />
// <label htmlFor="donation10">10€</label>
// <br />
// <input
//   type="checkbox"
//   id="donation20"
//   name="donation20"
//   value="20"
//   checked={formData.donations[20]}
//   onChange={handleChange}
// />
// <label htmlFor="donation100">20€</label>
// <br />
// <input
//   type="checkbox"
//   id="donation50"
//   name="donation50"
//   value="50"
//   checked={formData.donations[50]}
//   onChange={handleChange}
// />
// <label htmlFor="donation50">50€</label>
// <br />

// <input
//   type="checkbox"
//   id="donation100"
//   name="donation100"
//   value="100"
//   checked={formData.donations[100]}
//   onChange={handleChange}
// />
// <label htmlFor="donation100">100€</label>
// <br />
// <br />

// <button type="submit">Donate</button>
// </form>
