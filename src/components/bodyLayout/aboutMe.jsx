import './aboutMe.css';
function AboutMe() {

    const spareTime = [
        { activity: "roller skating" }, { activity: "watching YouTube while eating" },
        { activity: "crocheting" }, { activity: "playing piano" },
        { activity: "learning French & American Sign Language" }, { activity: "long walks & sightseeing" },
        { activity: "late night joyrides" }, { activity: "Clash of clans" }, { activity: "embedded system stuff" }
    ];

    return (
        <section id="about" className="about-container">
            <div className="inner-container">

                {/* Title */}
                <h1 className="title">About Me</h1>
                <p className="note">
                    Wanna skip to professional stuff? Checkout the <a href="#work" style={{color: "var(--text-color)"}}> Work</a> I've done.
                </p>

                <div className="bio-sec">
                    <div className="bio-box">
                        <p><strong>
                            <span>I’m an enthusiastic Full-Stack developer</span> based in Washington, DC with
                            2<sup>1/2</sup> years of growing experience across <span>frontend & backend development,
                        database design, and UI/UX research</span>. I enjoy building & design
                            user interfaces to improve experiences amongst all. In addition, just started
                            exploring how AI can enhance my building.
                        </strong>
                        </p>
                    </div>
                    <div className="spare-time">
                        <h3>Spare time stuff...</h3>
                        <ul>
                            {spareTime.map((item, index) => (
                                <li key={index}>
                                    {item.activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="school-sec">
                    <span className="academia-attending-status">
                        <span className="attending-pulsator"></span>
                        <p>Currently Attending</p>
                    </span>
                    <span className="label">
                        <img height="35px" width="35px" src="/orgs/umbc.webp" alt="school logo"/>
                        <p>University of Maryland Baltimore County</p>
                    </span>
                    <span>
                        <p><strong>B.S.</strong> in Information Systems <strong>Specialized:</strong> Human-Centered Computing — <i>Expected 2026</i></p>
                        <p><strong>Relevant coursework:</strong> Databases, UX Design & Research, Web Development, Data Structures</p>
                    </span>
                </div>

                <div className="stack">
                    <span>
                        <img height="32px" width="32px" src="styles/icons/svgs/stack.svg" alt="stack"/>
                        <h3>My tech stack</h3>
                    </span>

                    <div className="stack-struct">
                        <div className="stack-group">
                            <h3>Languages</h3>
                            <ul>
                                <li>Javascript</li>
                                <li>Typescript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>C#</li>
                                <li>C++</li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h3>Frontend Tools</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>GSAP</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h3>Backend & APIs</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>Flask</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h3>Databases</h3>
                            <ul>
                                <li>SQL</li>
                                <li>MariaDB</li>
                                <li>Supabase</li>
                                <li>Firebase</li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h3>Cloud & DevOps</h3>
                            <ul>
                                <li>AWS EC2</li>
                                <li>Docker</li>
                                <li>Kubernetes</li>
                            </ul>
                        </div>

                        <div className="stack-group">
                            <h3>Tools</h3>
                            <ul>
                                <li>Git</li>
                                <li>Github</li>
                                <li>Postman</li>
                                <li>Chrome DevTools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
