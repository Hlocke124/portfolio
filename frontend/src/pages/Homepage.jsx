import React from "react";
import Navbar from "../components/Navbar.jsx";

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <h1 className="justify-center flex text-2xl font-semibold mb-6">Welcome to the Homepage</h1>
                 <p mt-4>This is the main landing page of our application.</p>
             </div>
         </div>
     );
 }

 export default Homepage;
