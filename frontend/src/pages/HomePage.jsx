import React from "react";
import {useEffect, useState} from "react";
import Navbar from "../components/Navbar.jsx";
import AvatarCard from "../components/AvatarCard.jsx";

const HomePage = () => {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}avatar.json`)
            .then((response) => response.json())
            .then((data) => setDevs(data))
            .catch((error) => console.error("Error fetching team data:", error));
    }, []);

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-4 py-8 p-5 max-w">
                <div className="item-center flex justify-center mt-6">
                    {devs.map((dev) => (
                        <AvatarCard key={dev.id} avatar={dev.avatar} name={dev.name} github={dev.github} linkedin={dev.linkedin}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomePage;
