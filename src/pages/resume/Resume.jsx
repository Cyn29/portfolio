/* eslint-disable react-refresh/only-export-components */
import resume from "../../assets/resume.png"
import "./Resume.css"
import arrowresume from "../../assets/icons/arrowresume.png"
import { Link } from "react-router-dom"
import CircleAnimation from '../../components/circleAnimation/CircleAnimation';

function Resume() {
    return (
        <section className="main-resume-container">
            <header className="arrow-resume-container">
                <Link to="/" className="arrow-resume-link" aria-label="Volver a la página principal">
                    <img className="arrow-resume-image" src={arrowresume} alt="Arrow Icon" title="Volver a la home"></img>
                </Link>
            </header>
            <figure className="resume-container">
                <img className="resume-image" src={resume}></img>
            </figure>
        </section>
    )
}

export default CircleAnimation(Resume);
