import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import './index.css'
import {ClientProvider} from './context/ClientContext'
// Import our custom CSS
import './scss/styles.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App />
      </ClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
