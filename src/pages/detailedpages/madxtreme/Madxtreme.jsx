/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png";
import madxtremevideo from "../../../assets/videos/madxtreme.mp4";
import "../Detailedpage.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../main";
import CircleAnimation from "../../../components/circleAnimation/CircleAnimation";

function Madxtreme() {
    const { isDarkMode } = useContext(ThemeContext);

    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    return (
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
                Madxtreme es una web de reservas de deportes de aventura en la
                Comunidad de Madrid donde los usuarios pueden registrarse y
                acceder a la página logueados, reservar una actividad o
                contactar con la empresa.
            </p>
            <a
                href="https://github.com/Cyn29/madXtreme"
                target="_blank"
                rel="noopener noreferrer">
                <button className="button-detailedpage">Ver código</button>
            </a>
            <video
                className="detailedpage-video"
                controls
                src={madxtremevideo}></video>
        </main>
    );
}

export default CircleAnimation(Madxtreme);
