/* eslint-disable react-refresh/only-export-components */
import resume from "../../assets/resume.png"
import "./Resume.css"
import arrowresume from "../../assets/icons/arrowresume.png"
import { Link } from "react-router-dom"
import CircleAnimation from '../../components/circleAnimation/CircleAnimation';

function Resume() {
    return (
        <div className="main-resume-container">
        <div className="arrow-resume-container">
        <Link to="/" className="arrow-resume-link"><img className="arrow-resume-image" src={arrowresume} alt="Arrow Icon" title="Volver a la home"></img></Link>
        </div>
        <div className="resume-container">
        <img className="resume-image" src={resume}></img>
        </div>
        </div>
    )
}

export default CircleAnimation(Resume);