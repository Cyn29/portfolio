/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png";
import atuspiesvideo from "../../../assets/videos/atuspies.mp4";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../main";
import CircleAnimation from "../../../components/circleAnimation/CircleAnimation";

function Atuspies() {
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
                            title="Volver a la home"
                        />
                    </Link>
                </header>
                <p className="detailedpage-text">
                    El administrador del ecommerce puede ver, añadir, editar y
                    borrar productos desde su propio dashboard. La edición de
                    los productos la puede hacer desde la propia home o desde la
                    vista detallada del producto.
                </p>
                <a
                        href="https://github.com/Cyn29/Ecommerce"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="button-detailedpage">Ver código</button>
                    </a>
                <video
                    className="detailedpage-video"
                    controls
                    src={atuspiesvideo}></video>
            </main>
        </>
    );
}

export default CircleAnimation(Atuspies);
