import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer-container">
            <h3>End of Journey</h3>
            <div className="social-links">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:youremail@example.com">Email</a>
            </div>
            <p>Launched <strong>{new Date().getFullYear()}</strong> by NickCodes</p>
        </footer>
    );
}

export default Footer;