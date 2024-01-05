/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png"
import catchacodervideo from "../../../assets/videos/catchacoder.mp4";
import { Link } from 'react-router-dom';
import CircleAnimation from '../../../components/circleAnimation/CircleAnimation';

function Catchacoder() {
    return (
    <>
    <main className="detailedpage-container">
    <header className="arrow-container">
        <Link to="/" className="arrow-link" aria-label="Volver a la página principal"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </header>
    <p className="detailedpage-text">En Catch a coder los docentes pueden seleccionar aleatoriamente a los alumnos, añadir o eliminar alumnos nuevos y resetear la aplicación. También pueden elegir entre distintos fondos o incluir música en la navegación por la app.</p>
    <video className="detailedpage-video" controls src={catchacodervideo}></video>
    </main>
    </>
    );
}

export default CircleAnimation(Catchacoder);