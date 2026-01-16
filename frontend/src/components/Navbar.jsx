import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-base-200 shadow-sm sticky top-0 z-50 flex flex-col">
            {/* LEFT SIDE - HOME LINK */}
            <div className="w-full flex items-center gap-4 px-4 py-2">
                <div className="flex items-center gap-2">
                    <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold tracking-wide px-0">
                        Henry Locke
                    </Link>
                </div>



            </div>
        </div>
    )
}

export default Navbar;