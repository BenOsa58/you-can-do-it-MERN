//import { Card.Body, Card.Text } from 'react-bootstrap';
import { CardBody, CardImg, CardText } from "react-bootstrap";
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

// //  <br />
// //       <Card>
// //         <Card.Body>
// //           <Card.Text>
// //             Some quick example text to build on the card title and make up the
// //             bulk of the card's content.
// //           </Card.Text>
// //         </Card.Body>
// //         <Card.Img variant="bottom" src="holder.js/100px180" />
// //       </Card>
// </>
//         );

// }

// export default ProjectsCard;

// function ProjectsCard() {
//   return (
//     <>
//       <Card>
//         <Card.Img variant="top" src="holder.js/100px180" />
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//       <br />
//       <Card>
//         <Card.Body>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//         </Card.Body>
//         <Card.Img variant="bottom" src="holder.js/100px180" />
//       </Card>
//     </>
//   );
// }

// export default ProjectsCard;
