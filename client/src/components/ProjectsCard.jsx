import Card from "react-bootstrap/Card";
function ProjectsCard({ projects }) {
  console.log("projects :>> ", projects);
  return (
    <Card variant="top">
      {projects.map((project) => (
        <Card.Item>
          {project.image && (
            <img className="d-block w-50" src={project.image} alt="" />
          )}
          <Card.Caution>
            <p>{project.image}</p>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p>{project.category}</p>
          </Card.Caution>
        </Card.Item>
      ))}
    </Card>
  );
}

export default ProjectsCard;
