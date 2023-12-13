import resume from "../../assets/resume.png"
import "./Resume.css"
import arrowresume from "../../assets/icons/arrowresume.png"
import { Link } from "react-router-dom"

function Resume() {
    return (
        <>
        <Link to="/"><img className="arrow-image" src={arrowresume} alt="Arrow Icon" title="Volver a la home"></img></Link>
        <div className="resume-container">
        <img className="resume-image" src={resume}></img>
        </div>
        </>
    )
}

export default Resume;