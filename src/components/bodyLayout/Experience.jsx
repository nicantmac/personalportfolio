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

            {/*/!* Mapped through objects creating cards *!/*/}
            {/*{workItems.map((item, index) => (*/}
            {/*    <div key={index} className="work-card doj-card">*/}
            {/*        <div className="work-card-header">*/}
            {/*            <img className={`${item.id}-card-img`} src={item.logo} alt={`${item.org} icon`}/>*/}
            {/*            <h3 className="work-title">{item.org}</h3>*/}
            {/*        </div>*/}
            {/*        <h4 className={`${item.id}-text`}>{item.role} | {item.date}</h4>*/}
            {/*        <p className={`${item.id}-text`}>{item.desc}</p>*/}
            {/*    </div>*/}
            {/*))}*/}
        </section>
    );
}

export default Experience;
