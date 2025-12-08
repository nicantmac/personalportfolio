import { useState, useEffect } from "react";
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

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.toggle("dark");

        const newThemeIsDark = html.classList.contains("dark");
        setIsDark(newThemeIsDark);  // <-- FIX: use the setter

        localStorage.setItem("theme", newThemeIsDark ? "dark" : "light");
    };

    // load saved theme on page load
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);  // <-- React state matches DOM on load
        }
    }, []);



    return (
         // container contains all the Header content
        <header className="header-container">
            <div className="nav-lhs">

                {/* language btn */}
                <button className="lang-btn" onClick={() => setIsClicked((prev) => (!prev))}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 24 24"
                         strokeWidth="1.5"
                         stroke="currentColor"
                         className="size=6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"/>
                    </svg>
                </button>


                {/* ui theme btn */}
                <button className="theme-btn" onClick={toggleTheme}>
                    {isDark ?
                        (<svg xmlns="http://www.w3.org/2000/svg"
                              fill="none" viewBox="0 0 24 24"
                              strokeWidth="2" stroke="currentColor"
                              className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"/>
                        </svg>)
                        : (<svg xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor"
                                className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                        </svg>)
                    }
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
            </div>
        </header>
    );
}

export default Header;