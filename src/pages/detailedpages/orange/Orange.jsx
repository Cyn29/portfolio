import React from 'react';
import arrow from "../../../assets/icons/arrow.png"
import orangedigitalcentervideo from "../../../assets/videos/orangedigitalcenter.mp4";
import { Link } from 'react-router-dom';

function OrangeDigitalCenter() {
    return (
    <>
    <div className="detailedpage-container">
    <div className="arrow-container">
        <Link to="/" className="arrow-link"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </div>
    <p className="detailedpage-text">Interfaz donde los usuarios pueden suscribirse a la newsletter y apuntarse a las actividades programadas, y de la vista del administrador, donde una vez logueados los administradores pueden añadir, editar y eliminar actividades y administradores.</p>
    <video className="detailedpage-video" controls src={orangedigitalcentervideo}></video>
    </div>
    </>
    );
}

export default OrangeDigitalCenter;
