import arrow from "../../assets/icons/arrow.png"
import cynthia from "../../assets/cynthia.jpg"
import figma from "../../assets/stack/figma.png"
import html from "../../assets/stack/html.png"
import css from "../../assets/stack/css.png"
import javascript from "../../assets/stack/javascript.png"
import react from "../../assets/stack/react.png"
import bootstrap from "../../assets/stack/bootstrap.png"
import node from "../../assets/stack/node.png"
import typescript from "../../assets/stack/typescript.png"
import mysql from "../../assets/stack/mysql.png"
import "./AboutMe.css"
import { Link } from "react-router-dom"

function AboutMe() {
    return (
        <div className="general-container">
        <Link to="/"><img className="arrow-image" src={arrow} alt="Arrow Image" title="Volver a la home"></img></Link>
        <div className="aboutme-container">
        <img className="cynthia-photo" src={cynthia} alt="Cynthia Photo"></img>
        <p className="aboutme-text">¡Bienvenido a mi portfolio! <br></br> Acabo de finalizar un bootcamp de programación web full stack de seis meses de duración. Cuento con experiencia y formación trabajando con las siguientes tecnologías:  HTML, CSS, Sass, Bootstrap, JavaScript, React, TypeScript, Express, Node.js, Mongo DB, SQL, My SQL, React Testing Library y Jest. <br></br> No dudes en escribirme para cualquier consulta o detalle que quieras saber sobre mí.</p>
        </div>
        <div className="stack-container">
        <img src={figma} alt="Figma Icon"></img>
        <img src={html} alt="HTML Icon"></img>
        <img src={css} alt="CSS Icon"></img>
        <img src={javascript} alt="JavaScript Icon"></img>
        <img src={react} alt="React Icon"></img>
        <img src={bootstrap} alt="Bootstrap Icon"></img>
        <img src={node} alt="Node Icon"></img>
        <img src={typescript} alt="TypeScript Icon"></img>
        <img src={mysql} alt="MySQL Icon"></img>
        </div>
        </div>
    )
}

export default AboutMe;