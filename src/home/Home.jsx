import Header from '/src/components/topLayout/Header.jsx';
import HeroTitle from '/src/components/topLayout/HeroTitle.jsx';
import AboutMe from "/src/components/bodyLayout/aboutMe.jsx";
import Experience from "/src/components/bodyLayout/Experience.jsx";
import Projects from "/src/components/bottomLayout/Projects.jsx";
import Footer from "/src/components/bottomLayout/Footer.jsx";


function Home() {
    return (
        <div>
            <Header />
            <HeroTitle />
            <AboutMe />
            <Experience />
            <Projects />
            <Footer/>
        </div>
    );
}

export default Home;
