import './Footer.css';

function Footer() {
    return (
        <footer id="footer" className="footer-container">
            <div className="footer-inner-container">
                <h3>End of Journey</h3>
                <div className="social-links">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:youremail@example.com">Email</a>
                </div>
                <p>© {new Date().getFullYear()} All rights reserved. Powered by NickCodes</p>
            </div>
        </footer>
    );
}

export default Footer;