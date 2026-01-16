import React from "react";
import Navbar from "../components/Navbar.jsx";

const Homepage = () => {
    return (
        <div>
            <Navbar/>
            <div className="pt-20 px-4">
                 <h1>Welcome to the Homepage</h1>
                 <p>This is the main landing page of our application.</p>
             </div>
         </div>
     );
 }

 export default Homepage;
