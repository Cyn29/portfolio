/* eslint-disable react-refresh/only-export-components */
import arrow from "../../../assets/icons/arrow.png"
import sportforallvideo from "../../../assets/videos/sportforall.mp4";
import { Link } from 'react-router-dom';
import CircleAnimation from '../../../components/circleAnimation/CircleAnimation';

function Sportforall() {
    return (
    <>
    <div className="detailedpage-container">
    <div className="arrow-container">
        <Link to="/" className="arrow-link"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </div>
    <p className="detailedpage-text">Sport for all es el trabajo de diseño y maquetación de una landing page que muestra los valores y servicios más destacados de una consultora tech.</p>
    <video className="detailedpage-video" controls src={sportforallvideo}></video>
    </div>
    </>
    );
}

export default CircleAnimation(Sportforall);
