import './Experience.css';
import { workItems } from "/src/components/bodyLayout/workData.js";

function Experience() {

    return (
        <section id="work" className="work-container">
            <h1 className="title">Experience</h1>

            <div className="work-cards">
                {workItems.map((item, index) => (
                    <div key={index} className="card">
                        <header className="card-heading">
                            <img className={`${item.id}-img`} src={item.logo} alt={`${item.org} logo`}/>
                            <h3 className="card-title">{item.org}</h3>
                        </header>
                        <h4>{item.role} | {item.date}</h4>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
