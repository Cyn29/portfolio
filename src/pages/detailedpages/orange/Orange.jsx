/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png";
import orangedigitalcentervideo from "../../../assets/videos/orangedigitalcenter.mp4";
import "../Detailedpage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../main";
import CircleAnimation from "../../../components/circleAnimation/CircleAnimation";

function OrangeDigitalCenter() {
    const { isDarkMode } = useContext(ThemeContext);

    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    return (
        <>
            <main className={`detailedpage-container ${themeClass}`}>
                <header className="arrow-container">
                    <Link
                        to="/"
                        className="arrow-link"
                        aria-label="Volver a la página principal">
                        <img
                            className={`arrow-detailedpage ${isDarkMode ? 'white-arrow' : 'black-arrow'}`}
                            src={arrow}
                            alt="Arrow Icon"
                            title="Volver a la home"></img>
                    </Link>
                </header>
                <p className="detailedpage-text">
                    Interfaz donde los usuarios pueden suscribirse a la
                    newsletter y apuntarse a las actividades programadas, y de
                    la vista del administrador, donde una vez logueados los
                    administradores pueden añadir, editar y eliminar actividades
                    y administradores.
                </p>
                <a
                    href="https://github.com/andsainz/OrangeDigitalCenter"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="button-detailedpage">Ver código</button>
                </a>
                <video
                    className="detailedpage-video"
                    controls
                    src={orangedigitalcentervideo}></video>
            </main>
        </>
    );
}

export default CircleAnimation(OrangeDigitalCenter);
