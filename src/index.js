import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

//language English
import home_en from './translation/en/home.json'
import about_en from './translation/en/about.json'
import contact_en from './translation/en/contact.json'
import portfolio_en from './translation/en/portfolio.json'
import sidebar_en from './translation/en/sidebar.json'

//language Spanish
import home_es from './translation/es/home.json'
import about_es from './translation/es/about.json'
import contact_es from './translation/es/contact.json'
import portfolio_es from './translation/es/portfolio.json'
import sidebar_es from './translation/es/sidebar.json'

const languageDefault = localStorage.getItem("language") ? localStorage.getItem("language") : "en"

i18next.init({
  interpolation: { escapeValue: false},
  lng: languageDefault,
  resources: {
    es:{
      home: home_es,
      about: about_es,
      contact: contact_es,
      portfolio: portfolio_es,
      sidebar: sidebar_es
    },
    en:{
      home: home_en,
      about: about_en,
      contact: contact_en,
      portfolio: portfolio_en,
      sidebar: sidebar_en
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
