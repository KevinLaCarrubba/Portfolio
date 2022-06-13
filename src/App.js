import React from 'react'
import { Routes, Route } from 'react-router-dom'
//Page imports
import AboutPage from './Pages/AboutPage'

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
                </Routes>
            </div>
        </div>
    )
}

export default App
