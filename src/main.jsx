import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css';
import './index.css';
import './App.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
