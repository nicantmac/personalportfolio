import './Experience.css';

function Experience() {

    return (
        <section id="work" className="work-container">
            <div className="work-inner-container">
                {/* Title */}
                <h1 className="work-main-title">Experience</h1>

                <div className="work-card doj-card">
                    <div className="doj-card-header">
                        <img className="work-card-img" src="/orgs/doj_usao_vae_emblem.webp" height="30rem" width="30rem" alt="Fun-Facts Icon"/>
                        <h3 className="doj-title">U.S. Department of Justice - Eastern District of Virginia</h3>
                    </div>
                    <h4 className="doj-text">Student Intern | July 2025 - Present</h4>
                    <p className="doj-text">
                        Completed onboarding paperwork and federal forms required for public trust background checks.
                        Assisted with account setup and administrative tasks needed for DOJ systems access.
                        Reviewed and confirmed compliance with the DOJ Cybersecurity and Privacy Rules of Behavior, applying federal
                        standards for protecting Personally Identifiable Information (PII) and controlled unclassified data.
                    </p>
                </div>

                <div className="work-card work-codepath-card">
                    <div className="codepath-card-header">
                        <img className="work-card-img" src="/orgs/codepath_dark.webp" height="30rem" width="30rem" alt="Fun-Facts Icon"/>
                        <h3 className="codepath-title">Codepath</h3>
                    </div>
                    <h4 className="codepath-text">TIP101 Technical Interview Prep | May 2025 - August 2025</h4>
                    <p className="codepath-text">
                        Industry-focused course designed to strengthen problem-solving and technical
                        communication skills for software engineering interviews. Practiced data structures and
                        algorithms in languages like JavaScript and Python to prepare for coding challenges.
                        Completed mock interviews and white-boarding sessions to develop clear, concise
                        problem-solving strategies towards complex problem breakdown, time/space complexity analysis.
                    </p>
                    <span className="vert-line"></span>
                    <h4 className="codepath-text">Intermediate Web Development Program | February 2025 - May 2025</h4>
                    <p className="codepath-text">
                        Through 3 full-fledged web apps and deployed starting from basic React + Vite setups
                        to integrating dynamic API and CRUD data management through Supabase. Practiced
                        building modular reusable components, state management, API integration, and responsive design.
                    </p>
                </div>

                <div className="work-card work-resilience-card">
                    <div className="resilience-card-header">
                        <img className="work-card-img" src="/orgs/resilience_emblem.jpeg" height="30rem" width="40rem" alt="Fun-Facts Icon"/>
                        <h3 className="resilience-title">Resilience</h3>
                    </div>
                    <h4 className="codepath-text">AI Software Developer Intern | August 2024 - December 2024</h4>
                    <p className="resilience-text">
                        Developing new user-facing features using Firebase and
                        addressing bug fixes, and efficiently building reusable
                        code for great scalability and maintainability. Continuously
                        becoming more acclimated to authentication and user management
                        systems to improve security and user experience, as well as
                        ensuring secure data storage on both client-side devices
                        and servers. Working alongside senior software engineers
                        solving problems and collaborating with other Resilience Inc divisions.
                    </p>
                </div>

                <div className="work-card work-headstart-card">
                    <div className="headstart-card-header">
                        <img className="work-card-img" src="/orgs/hstart_logo.jpeg" height="30rem" width="30rem" alt="Fun-Facts Icon"/>
                        <h3 className="headstart-title">HeadStarter</h3>
                    </div>
                    <h4 className="codepath-text">Full-Stack Student Mentee | May 2024 - September 2024</h4>
                    <p className="headstart-text">
                        Developed an AI Customer Support system and integrated it
                        with OpenAI, Next.js, and AWS. This was followed by the
                        AI Flashcards & Stripe project, where I worked on integrating
                        OpenAI, Auth, and StripeAPI functionalities. Later, I contributed
                        to an imitation of Rate My Professor utilizing AI, particularly
                        involved using Retrieval-Augmented Generation (RAG), OpenAI, and
                        vector-based technologies.
                    </p>
                </div>

                <div className="work-card work-ai-card">
                    <div className="ai-card-header">
                        <img className="work-card-img" src="/orgs/ai4all.png" height="35rem" width="35rem" alt="Fun-Facts Icon"/>
                        <h3 className="ai-title">AI4ALL Program</h3>
                    </div>
                    <h4 className="codepath-text">AI/ML Student Mentee | August 2023 - December 2023</h4>
                    <p className="ai-text">
                        CNN model that takes a dataset of 700+ flower species and constructed a model
                        using supervised learning and machine learning to accurately predict and classify, and
                        implemented text-to-speech to read aloud the rendered decisions.
                        Achieved over 85% accuracy on a trained dataset
                    </p>
                </div>
                <div className="work-card work-apple-card">
                    <div className="apple-card-header">
                        <img className="work-card-img" src="/orgs/apple.webp" height="30rem" width="25rem" alt="Fun-Facts Icon"/>
                        <h3 className="apple-title">Apple Ecosystem Specialist</h3>
                    </div>
                    <h4 className="codepath-text">Hardware Repair/ Diagnostics Specialist | January 2018 - May 2021</h4>
                    <p className="apple-text">
                        My work includes identifying hardware faults, performing component-level
                        repairs, and optimizing device performance through strategic testing and
                        calibration. I’ve supported clients with everything from screen replacements
                        and battery swaps to logic board assessments and system-level diagnostics—delivering
                        reliable solutions. Test devices for part functionality, performance, and identify
                        which components may need repair.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Experience;
