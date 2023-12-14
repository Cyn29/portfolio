import React from 'react';
import arrow from "../../../assets/icons/arrow.png"
import madxtremevideo from "../../../assets/videos/madxtreme.mp4";
import "../Detailedpage.css";
import { Link } from 'react-router-dom';

function Madxtreme() {
    return (
    <>
    <div className="detailedpage-container">
    <div className="arrow-container">
        <Link to="/"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </div>
    <p className="detailedpage-text">Madxtreme es una web de reservas de deportes de aventura en la Comunidad de Madrid donde los usuarios pueden registrarse y acceder a la página logueados, reservar una actividad o contactar con la empresa.</p>
    <video className="detailedpage-video" controls src={madxtremevideo}></video>
    </div>
    </>
    );
}

export default Madxtreme;
