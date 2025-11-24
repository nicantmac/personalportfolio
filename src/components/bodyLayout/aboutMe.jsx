import "./aboutMe.css";
import stackIcon from "/styles/icons/svgs/stack.svg";

function AboutMe() {

    const spareTime = [
        { activity: "roller skating" }, { activity: "watching YouTube while eating" },
        { activity: "crocheting" }, { activity: "playing piano" },
        { activity: "learning French & American Sign Language" }, { activity: "long walks & sightseeing" },
        { activity: "late night joyrides" }, { activity: "Clash of clans" }, { activity: "embedded system stuff" }
    ];

    const stackItems = [
        {
            title: "Languages",
            items: ["Javascript", "Typescript", "Python", "Java", "C#", "C++"]
        },
        {
            title: "Frontend Tools",
            items: ["HTML", "CSS", "Javascript", "React", "Vite", "Next.js", "GSAP", "Framer Motion"]
        },
        {
            title: "Backend & APIs",
            items: [".NET/ASP.NET", "Node.js", "Flask", "Express.js", "RESTful APIs"]
        },
        {
            title: "Databases",
            items: ["SQL", "MariaDB", "Supabase", "PostgreSQL", "Firebase"]
        },
        {
            title: "Cloud & DevOps",
            items: ["AWS EC2", "Linux", "Docker", "Kubernetes"]
        },
        {
            title: "Tools",
            items: ["Git", "GitHub", "Jenkins", "Postman", "Chrome DevTools", "WCAG/A11Y", "Figma", "Material UI"]
        }
    ];

    return (
        <section id="about" className="about-container">
            <div className="inner-container">

                <h1 className="about-title">About Me</h1>
                <p className="note">Wanna skip to professional stuff? Checkout the <a href="#work"> Work</a> I've done.</p>

                <div className="bio">
                    <div className="bio-desc">
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
                                <li key={index} className="spare-item">
                                    {item.activity}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="school">
                    <span className="stat">
                        <span className="blinker"></span>
                        <p>Currently Attending</p>
                    </span>
                    <span className="label">
                        <img height="35px" width="35px" src="/orgs/umbc.webp" alt="school logo"/>
                        <p>University of Maryland Baltimore County</p>
                    </span>
                    <span>
                        <p><strong>B.S.</strong> in Information Systems<strong> Specialized:</strong> Human-Centered Computing — <i>Expected 2026</i></p>
                        <p><strong>Relevant coursework:</strong> Databases, UX Design & Research, Web Development, Data Structures</p>
                    </span>
                </div>

                <div className="stack">
                    <span>
                        <img height="32px" width="32px" src={stackIcon} alt="stack"/>
                        <h3>My tech stack</h3>
                    </span>

                    <div className="stack-struct">
                        {stackItems.map((item, index) => (
                            <div key={index} className="stack-group">
                                <h3>{item.title}</h3>
                                <ul>
                                    {item.items.map((tool, i) => (
                                        <li key={i}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
