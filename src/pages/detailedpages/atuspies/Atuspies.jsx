import React from 'react';
import arrow from "../../../assets/icons/arrow.png"
import atuspiesvideo from "../../../assets/videos/atuspies.mp4";
import { Link } from 'react-router-dom';

function Atuspies() {
    return (
    <>
    <div className="detailedpage-container">
    <div className="arrow-container">
        <Link to="/" className="arrow-link"><img className="arrow-detailedpage" src={arrow} alt="Arrow Icon" title="Volver a la home"></img></Link>
    </div>
    <p className="detailedpage-text">El administrador del ecommerce puede ver, añadir, editar y borrar productos desde su propio dashboard. La edición de los productos la puede hacer desde la propia home o desde la vista detallada del producto.</p>
    <video className="detailedpage-video" controls src={atuspiesvideo}></video>
    </div>
    </>
    );
}

export default Atuspies;