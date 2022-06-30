import React from 'react'
import { Routes, Route } from 'react-router-dom'
//Page imports
import AboutPage from './Pages/AboutPage'
import UsesPage from './Pages/UsesPage'
import ContactPage from './Pages/ContactPage'
import ResumePage from './Pages/ResumePage'
import ProjectsPage from './Pages/ProjectsPage'

//Component imports
import Header from './Components/Header'
import './sass/app.scss'

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <div className="page-content">
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/uses" element={<UsesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/resume" element={<ResumePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
