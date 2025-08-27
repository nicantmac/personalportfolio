import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { foreignItems } from '/src/assets/langs_flags_list.js';

// Header.css file and Header icons
import "/src/components/topLayout/Header.css";
import sunIcon from "/styles/icons/svgs/sun.svg";
import langIcon from "/styles/icons/svgs/lang.svg";
import moonIcon from "/styles/icons/svgs/moon.svg";


function Header() {
    /* (isDark) => current state: holds current value of light/dark theme
       (setIsDark) => mutator state: updates value of light/dark theme */
    const [isDark, setIsDark] = useState(false);

    /* (isClicked) => current state: holds current value of clicked status
       (setIsClicked) => mutator state: updates the value of clicked status */
    const [isClicked, setIsClicked] = useState(false);

    /* const { i18n } destructures the i18n object from the return value of
    the useTranslation() hook. The i18n object represents the i18next instance. */
    const { i18n } = useTranslation();

    /* const { t } destructures the 't' function from the return value
       of the useTranslation() hook. The t function is used to translate
       keys into their corresponding translated strings based on the currently selected language. */
    const { t } = useTranslation();

    return (
        <div className="header-outer-container"> {/* Outer container contains Inner container */}
            <div className="header-inner-container"> {/* Inner container contains all the Header buttons */}

                {/* Nav-Buttons (Left Hand Side) */}
                <div className="navbar-left-side">

                    {/* Light/Dark Mode icon button */}
                    <button className="light-dark-btn" onClick={() => setIsDark((prev) => (!prev))}>
                        {/* Ternary conditional render: renders moonButton if true, renders sunButton if false */}
                        {isDark ? (
                            // moonImage if true
                                <img aria-label="dark moode button" src={moonIcon} alt="light-mode"/>
                            )
                            :
                            // sunImage if false
                            ( <img style={{position: "relative", top: "1px"}}
                                   src={sunIcon} alt="light-mode"
                                   aria-label="Light/Dark Mode button"/> )
                        }
                    </button>

                    {/* Language icon button: onClick => let's change the state variable */}
                    <button className="lang-btn" onClick={() => setIsClicked((prev) => (!prev))}>
                        {/* Language icon on displayed on button */}
                        <img aria-label="Change language button" src={langIcon} alt="light-mode"/>
                        {/* If user clicks, the dropdown should appear */}
                        {isClicked && (

                            // if true, let's display a vertical dropdown navigation menu
                            <nav>
                                <ul>
                                    {/* -> let's utilize .map() method: each element -> create a list item containing: (button) and (image)
                                        -> every list item -> create a unique key for all indices and same className
                                        -> list item: (button) => each calls a function i18n.changeLanguage from react-i18next
                                          and passes the item.label(dot-notation value) from list of objects that is imported
                                          (image) => each displays flag image from item.flag(dot-notation value)
                                          item.lang(dot-notation value) shows the language i.e. "Deutsch"  */}
                                    {foreignItems.map((item, index) => (
                                        <li key={index} className="nav-lang-item">
                                            <button onClick={() => i18n.changeLanguage(`${item.label}`)}>
                                            <img src={item.flag} alt={item.lang}/>{item.lang}</button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </button>
                </div>

                {/* Nav-Actions (Right Hand Side)
                    4 hard-coded buttons: for each btn;
                    - t(...): an translation function provided by i18n library, such as
                      react-i18next. The t stands for "translate"
                    - 'nav.journey': This is a translation key, instead of hard-coding the text,
                      the key points to a specific text string within a translation file.
                      The (JSON file) that stores all the text strings for different languages. */}
                <div className="navbar-right-side">
                    <a href="#about" className="journey-btn">{t('nav.journey')}</a>
                    <a href="#work" className="xp-btn">{t('nav.experience')}</a>
                    <a href="#projects" className="project-btn">{t('nav.projects')}</a>
                    <a href="#footer" className="contact-btn">{t('nav.contact')}</a>
                </div>
            </div>
        </div>
    );
}

export default Header;