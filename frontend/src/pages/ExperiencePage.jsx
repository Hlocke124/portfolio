import React from 'react';
import Navbar from "../components/Navbar.jsx";
import ExperienceTimeline from "../components/ExperienceTimeline.jsx";

const ExperiencePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <h1 className="justify-center flex text-2xl font-semibold mb-6">Experience Page</h1>
                <ExperienceTimeline/>
            </div>
        </div>
    );
}

export default ExperiencePage;