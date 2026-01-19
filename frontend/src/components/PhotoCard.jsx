import React from "react";

const PhotoCard = ({title, url, description, credit}) => {
    return (
        <ul>
            <div
                className="card bg-base-100 shadow-md w-80 hover:shadow-xl transition-shadow duration-300 sticky py-4 rounded-lg">
                <figure>
                    {/* IMAGE */}
                    <img src={url} alt={title} className="w-full h-64 object-cover rounded-t-lg"/>
                </figure>
                <div className="card-body">
                    {/* DESCRIPTION */}
                    <p className="text-gray-300">{description}</p>
                    {/* CREDIT */}
                    <p className="text-gray-300">{credit}</p>
                </div>
            </div>
        </ul>
    );
}

export default PhotoCard;