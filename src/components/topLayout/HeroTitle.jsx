import { useTranslation } from 'react-i18next';
import '/src/components/topLayout/HeroTitle.css';

// icons
import peopleIcon from '/styles/icons/svgs/people.svg';
import downArrowIcon from '/styles/icons/svgs/down-arrow.svg';

function HeroTitle() {
    const { t } = useTranslation();

    // noinspection JSValidateTypes
    return (
        <section className="hero-container"> {/* hero entire container */}
            <div className="hero-main"> {/* hero inner container */}

                {/* Intro Text */}
                <h1 className="hero-intro">{t('hero.title')}<span className="wave" role="img" aria-label="wave">👋🏼</span></h1>
                <h2 className="hero-name">{t('hero.name')}</h2>
                <p className="hero-subtitle">{t('hero.subtitle')}</p>

                {/* Buttons */}
                <div className="hero-buttons">
                    <button className="hero-title-btns">{t('hero-btn.talk')}<img src={peopleIcon} alt="people icon" /></button>
                    <a href="#about" className="hero-title-btns" aria-label="Scroll Down">{t('hero-btn.explore')}<img src={downArrowIcon} alt="down arrow" /></a>
                </div>

                {/* Social Links */}
                <div className="social-icons">
                    {/* anchor tags: directs user to (LinkedIn) or (GitHub) */}
                    <a href="https://www.linkedin.com/in/nicholasmack972/" target="_blank" className="icon linkedin" aria-label="LinkedIn"></a>
                    <a href="https://github.com/nicantmac?tab=repositories" target="_blank" className="icon github" aria-label="GitHub"></a>
                </div>
            </div>
        </section>
    );
}

export default HeroTitle;