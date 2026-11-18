import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter watches the URL so React can show the matching page */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)