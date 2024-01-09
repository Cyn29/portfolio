/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png";
import catchacodervideo from "../../../assets/videos/catchacoder.mp4";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../main";
import CircleAnimation from "../../../components/circleAnimation/CircleAnimation";

function Catchacoder() {
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
                            alt="Icono de la flecha para volver a la home"
                            title="Volver a la home"></img>
                    </Link>
                </header>
                <p className="detailedpage-text">
                    En Catch a coder los docentes pueden seleccionar
                    aleatoriamente a los alumnos, añadir o eliminar alumnos
                    nuevos y resetear la aplicación. También pueden elegir entre
                    distintos fondos o incluir música en la navegación por la
                    app.
                </p>
                <a
                    href="https://github.com/afterdarkv1/Catch-a-Coder"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="button-detailedpage">Ver código</button>
                </a>
                <video
                    className="detailedpage-video"
                    controls
                    src={catchacodervideo}></video>
            </main>
        </>
    );
}

export default CircleAnimation(Catchacoder);
