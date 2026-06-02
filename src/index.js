import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

///traduction
import translation_en from "./translations/en/translation.json";
import translation_fr from "./translations/fr/translation.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { initReactI18next } from "react-i18next";
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "fr",
  resources: {
    fr: { translation: translation_fr },
    en: { translation: translation_en },
  },
});

//
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18next={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
