import HeroTitle from "../src/components/topLayout/HeroTitle.jsx";
import AboutMe from "../src/components/bodyLayout/aboutMe.jsx";
import Experience from "../src/components/bodyLayout/Experience.jsx";
import Projects from "../src/components/bottomLayout/Projects.jsx";
import Footer from "../src/components/bottomLayout/Footer.jsx";
import "/global.css";

function App() {
    return (
        <>
            <HeroTitle />
            <AboutMe />
            <Experience />
            <Projects />
            <Footer/>
        </>
    );
}

export default App;
