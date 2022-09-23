import React from 'react';
import axios from 'axios';
import * as ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'

ReactDOM.createRoot(
document.getElementById("app")).
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )