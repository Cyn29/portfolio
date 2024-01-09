/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png";
import sportforallvideo from "../../../assets/videos/sportforall.mp4";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../main";
import CircleAnimation from "../../../components/circleAnimation/CircleAnimation";

function Sportforall() {
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
                    Sport for all es el trabajo de diseño y maquetación de una
                    landing page que muestra los valores y servicios más
                    destacados de una consultora tech.
                </p>
                <a
                    href="https://github.com/Cyn29/sportforall"
                    target="_blank"
                    rel="noopener noreferrer">
                    <button className="button-detailedpage">Ver código</button>
                </a>
                <video
                    className="detailedpage-video"
                    controls
                    src={sportforallvideo}></video>
            </main>
        </>
    );
}

export default CircleAnimation(Sportforall);
