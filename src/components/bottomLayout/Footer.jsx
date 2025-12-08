import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer-container">
            <h2>End of Journey</h2>
            <main>
                <div className="footer-group">
                    <div className="end-desc">
                        <h3>Mission</h3>
                        <p>Building seamless digital experiences from server to client.
                            Explore my work and expertise in full-stack development</p>
                    </div>

                    <div className="services">
                        <h3>My bracket</h3>
                        <p>Frontend & Backend</p>
                        <p>Database Design</p>
                        <p>API & Authentication</p>
                        <p>CI/CD Automation</p>
                    </div>
                </div>

                <div className="social-links">
                    <h3>Socials</h3>
                    <div className="linkers">
                        <a href="https://github.com/nicantmac" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/nicholasmack972" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:nam7nam14@gmail.com">Email</a>
                    </div>
                </div>
            </main>
            <p className="footer-note">Launched <strong>{new Date().getFullYear()}</strong> by NickCodes</p>
        </footer>
    );
}

export default Footer;