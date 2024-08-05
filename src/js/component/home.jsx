import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter.jsx"; // Asegúrate de que la ruta sea correcta
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId); // Limpiar el intervalo cuando el componente se desmonte
    }, []);

    return (
        <div>
            <SecondsCounter seconds={seconds} />
        </div>
    );
};

export default Home;
