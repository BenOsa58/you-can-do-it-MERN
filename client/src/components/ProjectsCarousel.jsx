import Carousel from "react-bootstrap/Carousel";

function ProjectsCarousel({ projects }) {
  console.log("projects :>> ", projects);
  return (
    <Carousel variant="dark">
      {projects.map((project) => (
        <Carousel.Item>
          {project.image && (
            <img
              className="d-block w-50"
              src={project.image}
              alt="First slide"
            />
          )}
          <Carousel.Caption>
            <p>{project.image}</p>
            <h5>{project.title}</h5>
            <p>{project.description}</p>
            <p>{project.category}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectsCarousel;
