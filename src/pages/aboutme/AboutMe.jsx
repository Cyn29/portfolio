/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/arrow.png";
import cynthia from "../../assets/cynthia.jpg";
import figma from "../../assets/stack/figma.png";
import html from "../../assets/stack/html.png";
import css from "../../assets/stack/css.png";
import javascript from "../../assets/stack/javascript.png";
import react from "../../assets/stack/react.png";
import bootstrap from "../../assets/stack/bootstrap.png";
import node from "../../assets/stack/node.png";
import typescript from "../../assets/stack/typescript.png";
import mysql from "../../assets/stack/mysql.png";
import "./AboutMe.css";
import CircleAnimation from "../../components/circleAnimation/CircleAnimation";

function AboutMe() {
    return (
        <div className="general-container">
            <div className="arrow-aboutme-container">
            <Link to="/" className="arrow-aboutme-link">
                <img
                    className="arrow-image"
                    src={arrow}
                    alt="Arrow Image"
                    title="Volver a la home"
                />
            </Link>
            </div>
            <div className="aboutme-container">
                <img
                    className="cynthia-photo"
                    src={cynthia}
                    alt="Cynthia Photo"
                />
                <p className="aboutme-text">
                    ¡Bienvenido a mi portfolio! <br />
                    Acabo de finalizar un bootcamp de programación web full
                    stack de seis meses de duración. Cuento con experiencia y
                    formación trabajando con las siguientes tecnologías:
                    <br />
                    <div className="technologies-container">
                        <ul className="technologies-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Sass</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>TypeScript</li>
                            <li>Express</li>
                            <li>Node.js</li>
                            <li>Mongo DB</li>
                            <li>SQL</li>
                            <li>My SQL</li>
                            <li>React Testing Library</li>
                            <li>Jest</li>
                            <li>Supertest</li>
                        </ul>
                    </div>
                </p>
            </div>
            <div className="stack-container">
                <img src={figma} alt="Figma Icon" />
                <img src={html} alt="HTML Icon" />
                <img src={css} alt="CSS Icon" />
                <img src={javascript} alt="JavaScript Icon" />
                <img src={react} alt="React Icon" />
                <img src={bootstrap} alt="Bootstrap Icon" />
                <img src={node} alt="Node Icon" />
                <img src={typescript} alt="TypeScript Icon" />
                <img src={mysql} alt="MySQL Icon" />
            </div>
        </div>
    );
}

export default CircleAnimation(AboutMe);
