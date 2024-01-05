/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png"
import orangedigitalcentervideo from "../../../assets/videos/orangedigitalcenter.mp4";
import "../Detailedpage.css";
import { Link } from 'react-router-dom';
import CircleAnimation from '../../../components/circleAnimation/CircleAnimation';

function OrangeDigitalCenter() {
    return (
    <>
    <main className="detailedpage-container">
    <header className="arrow-container">
        <Link to="/" className="arrow-link" aria-label="Volver a la página principal"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </header>
    <p className="detailedpage-text">Interfaz donde los usuarios pueden suscribirse a la newsletter y apuntarse a las actividades programadas, y de la vista del administrador, donde una vez logueados los administradores pueden añadir, editar y eliminar actividades y administradores.</p>
    <video className="detailedpage-video" controls src={orangedigitalcentervideo}></video>
    </main>
    </>
    );
}

export default CircleAnimation(OrangeDigitalCenter);
