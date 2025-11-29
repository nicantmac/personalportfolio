import { useTranslation } from 'react-i18next';
import '/src/components/topLayout/HeroTitle.css';
import peopleIcon from '/styles/icons/svgs/people.svg';
import downArrowIcon from '/styles/icons/svgs/down-arrow.svg';
import Modal from "/src/components/Modal.jsx";
import { useState} from "react";

function HeroTitle() {
    const { t } = useTranslation();
    const [modOpen, setMod] = useState(false)

    // noinspection JSValidateTypes
    return (
        <section className="hero-container"> {/* hero entire container */}
            <main className="hero-main"> {/* hero inner container */}

                {/* intro Text */}
                <h1 className="hero-intro">
                    {t('hero.title')}<span className="wave" role="img" aria-label="wave">👋🏼</span>
                </h1>
                <h2 className="hero-name">{t('hero.name')}</h2>
                <p className="hero-subtitle"><i>{t('hero.subtitle')}</i></p>

                {/* btns */}
                <div className="hero-btns">
                    <button onClick={() => setMod(true)} className="talk-btn" aria-label="bio section">
                        {t('hero-btn.talk')}<img src={peopleIcon} alt="people icon" />
                    </button>
                    <a href="#about" className="explore-btn" aria-label="scroll down btn">
                        {t('hero-btn.explore')}<img src={downArrowIcon} alt="down arrow" />
                    </a>
                </div>
                {/* Modal lives outside main so it overlays nicely */}
                <Modal isOpen={modOpen} onClose={() => setMod(false)}></Modal>

                {/* social links */}
                <div className="social-icons">
                    {/* anchor tags: directs user to (LinkedIn) or (GitHub) */}
                    <a href="https://www.linkedin.com/in/nicholasmack972/" target="_blank" className="icon linkedin" aria-label="LinkedIn"></a>
                    <a href="https://github.com/nicantmac?tab=repositories" target="_blank" className="icon github" aria-label="GitHub"></a>
                </div>
            </main>
        </section>
    );
}

export default HeroTitle;