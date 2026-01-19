import React, {useEffect} from 'react';
import Navbar from "../components/Navbar.jsx";
import PhotoCard from "../components/PhotoCard.jsx";

const PhotoPage = () => {
    const [presentationPhotos, setPresentationPhotos] = React.useState([]);
    const [roboticsPhotos, setRoboticsPhotos] = React.useState([]);


    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}presentationPhotos.json`)
            .then((response) => response.json())
            .then((data) => setPresentationPhotos(data))
            .catch((error) => console.error("Error fetching photos data:", error));
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}roboticsPhotos.json`)
            .then((response) => response.json())
            .then((data) => setRoboticsPhotos(data))
            .catch((error) => console.error("Error fetching photos data:", error));
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w item-center justify-center">
                <div className="font-semibold text-2xl flex justify-center">CSUN SFS2 2nd
                    Annual Symposium 2025
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4  ">
                    {presentationPhotos.map((photo) => (
                        <div className="flex items-center justify-center grid-item-bg  ">
                            <PhotoCard key={photo.id} title={photo.title} url={photo.url}
                                       description={photo.description} credit={photo.credit}/>
                        </div>
                    ))}
                </div>
                <h1 className="justify-center flex text-2xl font-semibold mb-6 py-4">Robotics Photos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-4  ">
                    {roboticsPhotos.map((photo) => (
                        <div className="flex items-center justify-center grid-item-bg  ">
                            <PhotoCard key={photo.id} title={photo.title} url={photo.url}
                                       description={photo.description} credit={photo.credit}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PhotoPage;