// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
import en from '/locales/en.json';
import es from '/locales/es.json';
import fr from '/locales/fr.json';
import de from '/locales/de.json';

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es },
            fr: { translation: fr },
            de: { translation: de },
        },
        lng: 'en', // default language
        fallbackLng: 'en'
    });

export default i18n;