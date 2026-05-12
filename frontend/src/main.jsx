import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './animated_Routes.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/Portfolio/'>

    <App/>
  </BrowserRouter>
)
