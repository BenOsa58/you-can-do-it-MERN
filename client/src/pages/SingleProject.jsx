import React from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Project from "../components/Project";

function SingleProject(props) {
  const { projectId } = useParams();

  const [project, setProject] = useState([]);

  const [totalDonationsAmount, setTotalDonationsAmount] = useState(0);
  const fetchSingleProject = async () => {
    try {
      const response = await fetch(
        `${process.env.VITE_SERVER_URL}/api/projects/singleProject/${projectId}`
      );
      const data = await response.json();
      // console.log("data :>> ", data);
      setProject(data);
      const donationsArray = data.donations.map((donation) => {
        return donation.amount;
      });
      setTotalDonationsAmount(
        donationsArray.reduce((previous, current) => {
          return previous + current;
        }, 0)
      );
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  useEffect(() => {
    fetchSingleProject();
  }, []);
  return (
    <div>
      <Container className="p-3">
        <h1>You Can Do It Charity</h1>
        <Container>
          <Row>
            <Project
              project={project}
              totalDonationsAmount={totalDonationsAmount}
            />
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default SingleProject;
