import "./aboutMe.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function AboutMe() {
    const bioRef = useRef(null);
    const spareRef = useRef(null);


    useEffect(() => {
        const root = bioRef.current;
        if (!root) return;

        const p = root.querySelector("p");
        if (!p) return;

        const originalHTML = p.innerHTML;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect(); // play once

                // Split by words BUT preserve inline tags like <span> and <sup>
                // We wrap only text nodes, leaving tags intact.
                const wrapTextNodesIntoWords = (node) => {
                    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null);
                    const textNodes = [];
                    while (walker.nextNode()) textNodes.push(walker.currentNode);

                    textNodes.forEach((textNode) => {
                        const text = textNode.nodeValue;
                        if (!text || !text.trim()) return;

                        const frag = document.createDocumentFragment();
                        // keep whitespace as separate tokens
                        const tokens = text.split(/(\s+)/);

                        tokens.forEach((tok) => {
                            if (!tok) return;
                            if (/^\s+$/.test(tok)) {
                                frag.appendChild(document.createTextNode(tok));
                            } else {
                                const span = document.createElement("span");
                                span.className = "word";
                                span.textContent = tok;
                                frag.appendChild(span);
                            }
                        });

                        textNode.parentNode.replaceChild(frag, textNode);
                    });
                };

                wrapTextNodesIntoWords(p);

                gsap.fromTo(
                    p.querySelectorAll(".word"),
                    { opacity: 0, y: 14 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: 0.03,
                    }
                );
            },
            { threshold: 0.35 }
        );

        observer.observe(root);

        return () => {
            observer.disconnect();
            // optional restore if component unmounts
            p.innerHTML = originalHTML;
        };
    }, []);

    useEffect(() => {
        const root = spareRef.current;
        if (!root) return;

        const heading = root.querySelector("h3");
        const items = root.querySelectorAll(".spare-item");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect(); // play once

                const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                tl.from(heading, {
                    opacity: 0,
                    y: 16,
                    duration: 0.5,
                }).from(
                    items,
                    {
                        opacity: 0,
                        y: 14,
                        duration: 0.45,
                        stagger: 0.08,
                    },
                    "-=0.25"
                );
            },
            { threshold: 0.3 }
        );

        observer.observe(root);
        return () => observer.disconnect();
    }, []);


    const spareTime = [
        { activity: "crocheting" }, { activity: "playing piano" }, { activity: "fishing"},
        { activity: "roller skating" }, { activity: "watching YouTube while eating" },
        { activity: "learning French & American Sign Language" }, { activity: "long walks & sightseeing" },
        { activity: "late night joyrides" }, { activity: "Clash of clans" }, { activity: "embedded system stuff" }
    ];

    const stackItems = [
        { title: "Languages", items: ["Javascript", "Typescript", "Python", "Java", "C#", "C++"] },
        { title: "Frontend Tools", items: ["HTML", "CSS", "Javascript", "React", "Vite", "Next.js", "GSAP", "Framer Motion"] },
        { title: "Backend & APIs", items: [".NET/ASP.NET", "Node.js", "Flask", "Express.js", "RESTful APIs"] },
        { title: "Databases", items: ["SQL", "MariaDB", "Supabase", "PostgreSQL", "Firebase"] },
        { title: "Cloud & DevOps", items: ["AWS EC2", "Linux", "Docker", "Kubernetes"] },
        { title: "Tools", items: ["Git", "GitHub", "Jenkins", "Postman", "Chrome DevTools", "WCAG/A11Y", "Figma", "Material UI"] }
    ];

    return (
        <section id="about" className="about-container">
            <div className="inner-container">

                <h1 className="about-title">
                    About Me
                </h1>
                <p className="note">Wanna skip to professional stuff? Checkout the <a href="#work"> Work</a> I've done.</p>

                <div className="bio">
                    <div className="bio-desc" ref={bioRef}>
                        <p><strong>
                            <span className="accent-txt">I’m an enthusiastic Full-Stack developer
                            </span> based in Washington, DC with 2<sup>1/2</sup>
                            years of growing experience across <span className="accent-txt">frontend & backend
                            development, database design, and UI/UX research</span>. I enjoy building & design
                            user interfaces to improve experiences amongst all. In addition, just started
                            exploring how AI can enhance my building.
                        </strong></p>
                    </div>
                    <div className="spare-time" ref={spareRef}>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round"
                                d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                        </svg>

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