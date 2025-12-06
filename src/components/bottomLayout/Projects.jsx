import "./Projects.css";
import { useState} from "react";
import cardData from "/src/components/bottomLayout/ProjectCards.js";
import gitIcon from "/styles/icons/svgs/github.svg";

function Projects() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex(i => (i + 1) % cardData.length);
    };

    const prev = () => {
        setIndex(i => (i - 1 + cardData.length) % cardData.length);
    };

    return (
        <section id="projects" className="projects-container">
            <h1>Projects</h1>
            <div className="proj-card">
                <div className="proj-lhs">
                    <img height="256px" width="400px" src={cardData[index].image} alt={cardData[index].title}/>
                    <div className="info-sec">
                        <a href={cardData[index].link} target="_blank"><img src={gitIcon} alt="Github Icon"/></a>
                        <p>{cardData[index].status}</p>
                    </div>
                </div>
                <div className="proj-rhs">
                    <h2>{cardData[index].title}</h2>
                    <p>{cardData[index].desc}</p>
                </div>
            </div>
             <div className="navigators">
                <button className="btn-handle" onClick={prev}>prev</button>
                 <p>{(index + 1)}/{cardData.length}</p>
                <button className="btn-handle" onClick={next}>next</button>
            </div>
        </section>
    );
}

export default Projects;
