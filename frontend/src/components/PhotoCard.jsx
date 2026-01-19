import React from "react";

const PhotoCard = ({title, url, description, credit}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-md w-80 hover:shadow-xl transition-shadow duration-300 sticky py-4 rounded-lg">
                <div>
                    <figure>
                        <img src={url} alt={title} className="w-full h-64 object-cover rounded-t-lg"/>
                    </figure>
                </div>
                <div className="card-body">
                    <p className="text-gray-300">{description}</p>
                    <p className="text-gray-300">{credit}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoCard;