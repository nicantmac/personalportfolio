import './aboutMe.css';

// imports: (headers), (text), (imgs)
import { myData, funItems } from '/src/components/bodyLayout/metaData.js';
import { langStack, toolStack } from '/src/components/bodyLayout/TechStackItems.js';

// imports: icons adjacent to Card headers
import squaresIcon from "/styles/icons/svgs/three-square.svg";
import stackIcon from "/styles/icons/svgs/stack.svg";


function AboutMe() {
    return (
        <section id="about" className="about-container">
            <div className="about-inner-container">

                {/* Title */}
                <h1 className="about-main-title">About Me</h1>
                <p className="about-note" style={{margin: "0 auto", fontFamily: "Monospace, sans serif", color: "black", fontSize: 16}}>
                    Wanna skip to professional stuff? Checkout the <a href="#work" style={{color: "black"}}>Work</a> I've done.
                </p>

                {/* Mapping cards: (Bio Card) and (Academia Card) */}
                {myData.map((element, index) => (
                    <>
                        <div key={index} className={`about-card ${index === 0 ? "bio-card" : "academia-card"}`}>
                            {index === 1 && (
                                <div className="academia-attending-status">
                                    <span className="attending-pulsator"></span>
                                    <p>Currently Attending</p>
                                </div>
                            )}
                            <div className={`${index === 0 ? "bio-card-header" : "academia-card-header"}`}>
                                <img src={element.image} height="35rem" width="35rem" alt="Fun-Facts Icon" />
                                <h3 className={`${index === 0 ? "bio-title" : "academia-title"}`}>{element.title}</h3>
                            </div>

                            {Array.isArray(element.text) ? (
                                element.text.map((item, i) =>
                                    <p key={i} className="about-text bio-text">{item}</p>)
                            ) : (
                                <p className="about-text academia-text">{element.text}</p>
                            )}
                        </div>
                    </>
                ))}

                <div className="funFacts-container">
                    <div className="about-card funFacts-inner-container">
                        <div className="funFacts-card-header">
                            <img src={squaresIcon} height="35rem" width="35rem" alt="Fun-Facts Icon"/>
                            <h3 className="funFacts-title">Fun Facts</h3>
                        </div>
                        <div className="facts-grid">
                            {funItems.map((fact, index) => (
                                <div key={index} className="fact-item">
                                    <img src={fact.icon} height="27rem" width="27rem" alt="Fun-Facts Icon"/>
                                    <p className="funFacts-text" style={{fontSize: '1rem'}}>{fact.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="about-card techStack-card">
                    <div className="techStack-card-header">
                        <img src={stackIcon} height="35rem" width="35rem" alt="Fun-Facts Icon"/>
                        <h3 className="techStack-title">My tech stack</h3>
                    </div>

                    <div className="tech-stack">
                        <div className="tech-section">
                            <h4 className="tech-title">Languages</h4>
                            <div className="tech-items">
                                {langStack.map((item, index) => (
                                    <div className="tech-card" key={index}>
                                        <div className="tech-front">
                                            <img src={item.lang.icon} className="tech-icon" alt={`${item.name} icon`} />
                                            <p className="tech-label">{item.lang.name}</p>
                                        </div>

                                        <div className="tech-back">
                                            <img src={item.rating.star} className="tech-icon" alt={`${item.tool} icon`} />
                                            <p className="tech-label">{item.rating.numRate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="tech-section">
                            <h4 className="tech-title">Tool Stack</h4>
                            <div className="tech-items">
                                {toolStack.map((item, index) => (
                                    <div className="tech-card" key={index}>
                                        <div className="tech-front">
                                            <img src={item.tool.icon} className="tech-icon" alt={`${item.tool} icon`} />
                                            <p className="tech-label">{item.tool.name}</p>
                                        </div>

                                        <div className="tech-back">
                                            <img src={item.rating.star} className="tech-icon" alt={`${item.tool} icon`} />
                                            <p className="tech-label">{item.rating.numRate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
