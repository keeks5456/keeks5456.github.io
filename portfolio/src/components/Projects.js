import doggyDates from '../projectImage/DoggyDates.png';
import qpq from '../projectImage/QPQ.gif';
import voluntheroes from '../projectImage/Voluntheroes.mov';
function Projects() {
	console.log(doggyDates);
	return (
		<div>
			<h1>My Personal & Group Projects</h1>
			<div className="projects-container">
				<div className="project-title">Voluntheroes</div>
				<img className="project-image" src={doggyDates} alt="doggy-dates-image" />
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>

			<div className="projects-container">
				<div className="project-title">QPQ</div>
				<img className="project-image" src={qpq} alt="qpq-gif" />
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>

			<div className="projects-container">
				<div className="project-title">QPQ</div>
                <a className='lnk' href="https://www.youtube.com/embed/6JEI141ehxA" rel="noreferrer" target='_blank'>DEMO</a>
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>

			<div className="projects-container">
				<div className="project-image">image here</div>
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>

			<div className="projects-container">
				<div className="project-image">image here</div>
				<div className="project-description">description here</div>
				<div className="github-link">link here</div>
			</div>
		</div>
	);
}

export default Projects;

// doggy dates youtube https://youtu.be/egtJ2lOPFkM
//qpq
