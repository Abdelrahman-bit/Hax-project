import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import NavigationBar from './components/NavBar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <NavigationBar />
    <App />
    <Footer />
  </StrictMode>,
)
