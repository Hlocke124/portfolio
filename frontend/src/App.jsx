import React from 'react'
import {HashRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage.jsx"
import AboutMePage from "./pages/AboutMePage.jsx"
import ExperiencePage from "./pages/ExperiencePage.jsx"
import EducationPage from "./pages/EducationPage.jsx"
import PhotoPage from "./pages/PhotoPage.jsx"
import ProjectPage from "./pages/ProjectPage.jsx"

function App() {
    return (
        <div className="relative h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-base-100" />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/photos" element={<PhotoPage />} />
                <Route path="/projects" element={<ProjectPage />} />
            </Routes>
        </div>
    )
}

export default App
