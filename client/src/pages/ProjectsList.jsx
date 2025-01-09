import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { Col, Container, Form, Row } from "react-bootstrap";
import ProjectsCarousel from "../components/ProjectsCarousel";
import ProjectsCard from "../components/ProjectsCard";
const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await fetch(`${process.env.SERVER_URL}/projects/all`);
      const data = await response.json();
      setProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Container className="p-3">
      <h1>You Can Do It Charity</h1>
      {/* <ProjectsCard projects={projects} /> */}
      {/* <ProjectsCarousel projects={projects} />
      {loading && <p>Loading...</p>} */}
      <Container>
        <Row>
          {projects &&
            projects.map((project, index) => (
              <Col key={index}>
                <Project project={project} fetchProjects={fetchProjects} />
              </Col>
            ))}
        </Row>
      </Container>

      <p>
        Education is a powerful tool for breaking the cycle of poverty. It
        provides individuals with the skills and knowledge necessary for
        economic success and empowers them to make informed decisions and
        actively participate in their communities. The link between education
        and poverty reduction is well-established, and investing in education is
        crucial for sustainable development. Poverty is a complex issue that
        affects individuals, families, and communities in multiple ways. It is
        characterized by a lack of access to basic needs such as food, shelter,
        and healthcare, as well as limited opportunities for education,
        employment, and social mobility. Education is essential for addressing
        these issues, as it provides individuals with the skills and knowledge
        necessary to improve their lives and those of their families. One of the
        most critical ways education can break the cycle of poverty is by
        providing individuals with the skills and knowledge necessary for
        economic success. Education equips individuals with the literacy and
        numeracy skills required to participate in the workforce and access
        higher-paying jobs. It also provides them with the critical thinking
        skills necessary to make informed decisions and navigate the
        complexities of the modern economy. This can lead to increased economic
        opportunities and improved living standards, which can, in turn, reduce
        poverty and improve overall well-being. Additionally, education can
        break the cycle of poverty by empowering individuals to participate
        actively in their communities. Education allows individuals to access
        information, express their opinions, and engage in decision-making
        processes. This can lead to increased civic participation and improved
        governance, which can, in turn, lead to more inclusive and equitable
        societies. Education also gives individuals the skills and knowledge
        necessary to become leaders in their communities, which can lead to
        positive social change. Furthermore, education is essential for
        addressing the inter-generational transmission of poverty. Children from
        low-income families are disadvantaged in education, as they often lack
        the resources and support necessary to succeed in school. This can lead
        to a lack of opportunities and a perpetuation of poverty across
        generations. Education can break this cycle by providing children from
        low-income families with the support and resources necessary to succeed
        in school. This includes access to quality early childhood education and
        support for children with special needs. In conclusion, education plays
        a crucial role in breaking the cycle of poverty. It provides individuals
        with the skills and knowledge necessary for economic success and
        empowers them to participate actively in their communities. However,
        access to education is not enough; it is essential to also invest in the
        quality of education and make it inclusive and equitable. Education can
        also empower individuals to take control of their own lives, and it can
        be a long-term investment for future generations. Therefore, governments
        and international organizations must make education a priority in their
        efforts to reduce poverty and promote sustainable development. NGO’s
        like You Can Do It are doing part in part in helping educate the
        underprivileged.
      </p>
      <p>You can also help by donating today.</p>
    </Container>
  );
};

export default ProjectsList;
