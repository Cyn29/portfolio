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
            <header className={`arrow-container ${themeClass}`}>
                <Link
                    to="/"
                    className="arrow-link"
                    aria-label="Volver a la página principal">
                    <img
                        className={`arrow-detailedpage ${
                            isDarkMode ? "white-arrow" : "black-arrow"
                        }`}
                        src={arrow}
                        alt="Icono de la flecha para volver a la home"
                        title="Volver a la home"
                    />
                </Link>
            </header>
            <main className={`detailedpage-container ${themeClass}`}>
                <section className="content-detailedpage-container">
                    <p className="detailedpage-text">
                    Interfaz donde los usuarios pueden suscribirse a la
                    newsletter y apuntarse a las actividades programadas, y de
                    la vista del administrador, donde una vez logueados los
                    Los administradores pueden agregar, editar y eliminar actividades.
                    y administradores.
                    </p>
                    <a
                        href="https://github.com/andsainz/OrangeDigitalCenter"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="button-detailedpage">
                            Ver código
                        </button>
                    </a>
                    <video
                        className="detailedpage-video"
                        controls
                        src={orangedigitalcentervideo}></video>
                </section>
            </main>
        </>
    );
}

export default CircleAnimation(OrangeDigitalCenter);
