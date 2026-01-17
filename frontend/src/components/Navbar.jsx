import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-200 shadow-sm sticky top-0 z-50 flex flex-col">
            {/* LEFT SIDE - HOME LINK */}
            <div className="w-full flex items-center gap-4 px-7 py-2">
                <div className="flex items-center gap-2">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold tracking-wide px-0">
                        Henry Locke
                    </Link>
                </div>
                {/* RIGHT SIDE - PROJECTS, EXPERIENCE, EDUCATION, PHOTOS, ABOUT ME */}
                <div className="flex items-center gap-2 ml-auto px-10 py-2">
                    <Link to="/projects" className="btn btn-ghost normal-case text-lg px-0">
                        Projects
                    </Link>
                    <Link to="/experience" className="btn btn-ghost normal-case text-lg px-0">
                        Experience
                    </Link>
                    <Link to="/education" className="btn btn-ghost normal-case text-lg px-0">
                        Education
                    </Link>
                    <Link to="/photos" className="btn btn-ghost normal-case text-lg px-0">
                        Photos
                    </Link>
                    <Link to="/about" className="btn btn-ghost normal-case text-lg px-0">
                        About Me
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default Navbar;