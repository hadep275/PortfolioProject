import React from 'react'
import AOS from 'aos';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from '../src/components/ThemeProvider';
// import './index.css'

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
     <App />
    </ThemeProvider>
  </React.StrictMode>,
)
