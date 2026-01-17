import React from 'react';
import Navbar from "../components/Navbar.jsx";

const PhotoPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <h1 className="justify-center flex text-2xl font-semibold mb-6">Experience Page</h1>
                 <p mt-4>This is the experience page of our application.</p>
             </div>
         </div>
     );
}

export default PhotoPage;