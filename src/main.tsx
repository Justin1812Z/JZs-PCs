import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './Components/Navbar/Navbar.tsx'
import Card from './Components/Card/Card.tsx'
import Home from './Components/Home/Home.tsx'
import Builds from './Components/Builds/Builds.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar /> 
    <Home /> 
    <Builds />
  </StrictMode>,
)
