import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalFonts from './cupideon/assets/fonts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <GlobalFonts/>
        <App/>
    </>
);

