import doggyDates from '../projectImage/DoggyDates.png';
import qpq from '../projectImage/QPQ.gif';
// import voluntheroes from '../projectImage/Voluntheroes.mov';
import Voluntheroes from '../projectImage/Voluntheroes.png';

import { Card } from 'react-bootstrap';

function Projects() {
	console.log(doggyDates);
	return (
		<div>
			<h1>My Personal & Group Projects</h1>
			<div className="projects-container">
				<div className="project-title">DoggyDates</div>
				<img className="project-image" src={doggyDates} alt="doggy-dates-image" />
				<a className="lnk" href="https://youtu.be/egtJ2lOPFkM" rel="noreferrer" target="_blank">
					DEMO
				</a>
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>

				<Card style={{ width: '25rem' }}>
					<Card.Img variant="top" src={qpq} alt="qpq-gif" style={{ width: '18rem' }} />
                    <Card.Body>
					<Card.Title>QPQ</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the card's content.
					</Card.Text>
					<a className="github-link" href="https://github.com/bdb2381/qpq-frontend" rel="noreferrer" target="_blank">Link to QPQ Frontend Repository</a>
                    </Card.Body>
				</Card>

				<div className="project-title">Voluntheroes</div>
				<img className="project-image" src={Voluntheroes} alt="qpq-gif" />
				<a className="lnk" href="https://www.youtube.com/embed/6JEI141ehxA" rel="noreferrer" target="_blank">
					DEMO
				</a>
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>

				<div className="project-title">Just Breathe</div>
				<img className="project-image" src={qpq} alt="qpq-gif" />
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>
		</div>
	);
}

export default Projects;
