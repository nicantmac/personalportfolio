import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '/app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import '/locales/i18n.js'; // this initializes i18next


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
