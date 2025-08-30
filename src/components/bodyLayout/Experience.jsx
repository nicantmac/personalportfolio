import './Experience.css';
import { workItems } from "/src/components/bodyLayout/workData.js";

function Experience() {

    return (
        <section id="work" className="work-container">
            <div className="work-inner-container">
                {/* Title */}
                <h1 className="work-main-title">Experience</h1>

                {/* Mapped through objects creating cards */}
                {workItems.map((item, index) => (
                    <div key={index} className="work-card doj-card">
                        <div className="work-card-header">
                            <img className={`${item.id}-card-img`} src={item.logo} alt={`${item.org} icon`}/>
                            <h3 className="work-title">{item.org}</h3>
                        </div>
                        <h4 className={`${item.id}-text`}>{item.role} | {item.date}</h4>
                        <p className={`${item.id}-text`}>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
