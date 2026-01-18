import React from "react";

const PhotoCard = ({photo, title, description}) => {
    return (
        <div className="card bg-base-100 shadow-md w-80 hover:shadow-xl transition-shadow duration-300">
            <div className="justify-center">
                <figure>
                    <img src={photo} alt={title} className="w-full h-64 object-cover rounded-t-lg"/>
                </figure>
            </div>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p>nmw</p>
                <p className="text-gray-600">{description}</p>
            </div>

        </div>
    );
}

export default PhotoCard;