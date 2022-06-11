import React from 'react'
import { Routes, Route } from 'react-router-dom'
//Page imports
import LandingPage from './Pages/LandingPage'

//Component imports
import Header from './Components/Header'
import './sass/app.scss'

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </div>
    )
}

export default App
