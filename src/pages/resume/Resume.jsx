/* eslint-disable react-refresh/only-export-components */
import resume from "../../assets/cv/resume.png";
import resumepdf from "../../assets/cv/CV Cynthia Álvarez Rubio.pdf";
import "./Resume.css";
import arrowresume from "../../assets/icons/arrowresume.png";
import { Link } from "react-router-dom";
import CircleAnimation from "../../components/circleAnimation/CircleAnimation";

function Resume() {
    return (
        <section className="main-resume-container">
            <header className="arrow-resume-container">
                <Link
                    to="/"
                    className="arrow-resume-link"
                    aria-label="Volver a la página principal">
                    <img
                        className="arrow-resume-image"
                        src={arrowresume}
                        alt="Icono de la flecha para volver a la home"
                        title="Volver a la home"></img>
                </Link>
                <a href={resumepdf} target="_blank" rel="noreferrer"z>
                    <button className="button-download-cv" type="button">Descargar CV</button>
                </a>
            </header>   
            <figure className="resume-container">
                <img className="resume-image" src={resume}></img>
            </figure>
        </section>
    );
}

export default CircleAnimation(Resume);

