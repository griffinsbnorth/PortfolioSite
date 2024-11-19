import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import "./scss/custom.css";
import './index.css';
import CookieConsent from "react-cookie-consent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
    <CookieConsent
      disableStyles={true}
      location="bottom"
      buttonText="Got it."
      cookieName="cookieConsent"
      style={{ background: "#7D9027", color: 'white' }}
      buttonClasses="btn btn-dark"
      containerClasses="alert alert-warning col-lg-12 d-flex flex-column justify-content-center align-items-center fixed-bottom"
      contentClasses="text-capitalize"
      expires={150}
    >
      <p>This website uses cookies for the following: Contact Forms Hcaptcha test, Youtube Embedded Player.
        For more information, please see our <a href="/privacy" className='link-dark'>Privacy Policy</a></p>
    </CookieConsent>
  </BrowserRouter>
);

