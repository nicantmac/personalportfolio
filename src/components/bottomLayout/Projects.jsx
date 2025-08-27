import './Projects.css';
import cardData from '/src/components/bottomLayout/ProjectCards.js';

function Projects() {
    return (
        <section id="projects" className="projects-container">
            <div className="projects-inner-container">
                <h1 className="projects-main-title">Projects</h1>
                {cardData.map((card, index) => (
                    <div key={index} className="project-card project-grid">
                        <img src={card.image} alt={card.title} />
                        <div className="project-card-subtext">
                            <h3 className="project-card-subtitle">{card.title}</h3>
                            <p className="project-card-text">{card.status}</p>
                            <p className="project-card-text">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
