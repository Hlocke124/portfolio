import React from 'react';
import Navbar from "../components/Navbar.jsx";
import PhotoCard from "../components/PhotoCard.jsx";

const PhotoPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <h1 className="justify-center flex text-2xl font-semibold mb-6">Photos Page</h1>
                <PhotoCard/>
            </div>
        </div>
    );
}

export default PhotoPage;