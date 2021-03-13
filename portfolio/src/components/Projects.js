 import doggyDates from '../projectImage/doggyDates.png';
import qpq from '../projectImage/QPQ.gif';
import Voluntheroes from '../projectImage/Voluntheroes.png';
import justBreathe from '../projectImage/JustBreathe.png'
import { Card } from 'react-bootstrap';


function Projects() {
	return (
		<div>
			<h1 className='project-title'>My Personal & Group Projects</h1>
			<div className="projects-container">

				{/* Voluntheroes*/}
				<Card style={{ }}>
					<Card.Img variant="top" src={Voluntheroes} alt="qpq-gif" style={{  }} />
					<hr />
					<Card.Body>
						<Card.Title>Voluntheroes</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<a
							className="github-link"
							href="https://github.com/tshlos/voluntheros"
							rel="noreferrer"
							target="_blank"
						>
							Link to Voluntheroes Github
						</a>
						<br />
						<a className="lnk" href="https://www.youtube.com/embed/6JEI141ehxA" rel="noreferrer" target="_blank">
					DEMO
				</a>
					</Card.Body>
				</Card>

				<Card style={{ }}>
					<Card.Img variant="top" src={justBreathe} alt="qpq-gif" style={{  }} />
					<hr />
					<Card.Body>
						<Card.Title>Just Breathe</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<a
							className="github-link"
							href="https://github.com/keeks5456/just-breath-frontend"
							rel="noreferrer"
							target="_blank"
						>
							Link to Just Breathe Repository
						</a>
					</Card.Body>
				</Card>

				<Card style={{  }}>
					<Card.Img variant="top" src={doggyDates} alt="doggy dates image" style={{  }} />
					<hr />
					<Card.Body>
						<Card.Title>Doggy Dates</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<a
							className="github-link"
							href="https://github.com/carcarvroom/doggy-dates"
							rel="noreferrer"
							target="_blank"
						>
							Link Doggy Dates Github
						</a>
						<br />
						<a className="lnk" href="https://youtu.be/egtJ2lOPFkM" rel="noreferrer" target="_blank">
							DEMO
				</a>
					</Card.Body>
				</Card>
				{/* QPQ */}
				<Card style={{  }}>
					<Card.Img variant="top" src={qpq} alt="qpq-gif" style={{  }} />
					<hr />
					<Card.Body>
						<Card.Title>QPQ</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make up the bulk of the card's
							content.
						</Card.Text>
						<a
							className="github-link"
							href="https://github.com/bdb2381/qpq-frontend"
							rel="noreferrer"
							target="_blank"
						>
							Link to QPQ Frontend Repository
						</a>
					</Card.Body>
				</Card>
				{/* Just Breath */}
				
			</div>
		</div>
	);
}

export default Projects;
