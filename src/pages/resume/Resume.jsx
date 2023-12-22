import resume from "../../assets/resume.png"
import "./Resume.css"
import arrow from "../../assets/icons/arrow.png"
import { Link } from "react-router-dom"

function Resume() {
    return (
        <div className="main-resume-container">
        <div className="arrow-resume-container">
        <Link to="/" className="arrow-resume-link"><img className="arrow-resume-image" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
        </div>
        <div className="resume-container">
        <img className="resume-image" src={resume}></img>
        </div>
        </div>
    )
}

export default Resume;