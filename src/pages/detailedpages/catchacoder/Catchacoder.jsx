import React from 'react';
import arrow from "../../../assets/icons/arrow.png"
import catchacodervideo from "../../../assets/videos/catchacoder.mp4";
import { Link } from 'react-router-dom';

function Catchacoder() {
    return (
    <>
    <div className="detailedpage-container">
    <div className="arrow-container">
        <Link to="/" className="arrow-link"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </div>
    <p className="detailedpage-text">En Catch a coder los docentes pueden seleccionar aleatoriamente a los alumnos, añadir o eliminar alumnos nuevos y resetear la aplicación. También pueden elegir entre distintos fondos o incluir música en la navegación por la app.</p>
    <video className="detailedpage-video" controls src={catchacodervideo}></video>
    </div>
    </>
    );
}

export default Catchacoder;