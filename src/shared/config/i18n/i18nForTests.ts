import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n.use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'ru',
        debug: false,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: { ru: { translations: {} } },
    });

export default i18n;
