import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { foreignItems } from '/src/assets/langs_flags_list.js';
import "/src/components/topLayout/Header.css";

function Header() {
    const [isDark, setIsDark] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    /* const { i18n } destructures the i18n object from the return value of
    the useTranslation() hook. The i18n object represents the i18next instance. */
    const { i18n } = useTranslation();

    /* const { t } destructures the 't' function from the return value
       of the useTranslation() hook. */
    const { t } = useTranslation();

    return (
         // container contains all the Header content
        <header className="header-container">
            <div className="nav-lhs">
                {/* ui theme btn */}
                <button className="theme-btn" onClick={() => setIsDark((prev) => (!prev))}>
                    {/* ternary render:  if true (moon btn), if not (sun btn) */}
                    {isDark ? <img src="/styles/icons/svgs/moon.svg" alt="light-mode" aria-label="dark moode button"/>
                        :  <img src="/styles/icons/svgs/sun.svg" alt="light-mode" aria-label="Light/Dark Mode button"/>
                    }
                </button>

                {/* Language icon button: onClick => let's change the state variable */}
                <button className="lang-btn" onClick={() => setIsClicked((prev) => (!prev))}>
                    {/* Language icon on displayed on button */}
                    <img  src="/styles/icons/svgs/lang.svg" alt="light-mode" aria-label="change language button"/>
                </button>
                {/* If user clicks, the dropdown should appear */}
                {isClicked && (
                    // if true, let's display a vertical dropdown navigation menu
                    <nav>
                        <ul>
                            {foreignItems.map((item, index) => (
                                <li key={index} className="lang-item">
                                    <button onClick={() => i18n.changeLanguage(`${item.label}`)}>
                                        <img src={item.flag} alt={item.lang}/>
                                        {item.lang}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>

            <div className="nav-rhs">
                <a href="#about" className="journey-btn">{t('nav.journey')}</a>
                <a href="#work" className="xp-btn">{t('nav.experience')}</a>
                <a href="#projects" className="project-btn">{t('nav.projects')}</a>
                <a href="#footer" className="contact-btn">{t('nav.contact')}</a>
            </div>
        </header>
    );
}

export default Header;