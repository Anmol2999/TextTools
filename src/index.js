import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     {/*everything that we include in the App.js file will be rendered by react*/}
    <App />
  </React.StrictMode>
);


reportWebVitals();
