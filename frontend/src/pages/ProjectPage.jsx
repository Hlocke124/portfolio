import React from "react";
import Navbar from "../components/Navbar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

const ProjectPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <ProjectCard />
             </div>
         </div>
     );
 }

 export default ProjectPage;