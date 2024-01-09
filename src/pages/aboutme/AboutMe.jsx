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
import { useContext } from "react";
import { ThemeContext } from "../../main";
import CircleAnimation from "../../components/circleAnimation/CircleAnimation";

function AboutMe() {
    const { isDarkMode } = useContext(ThemeContext);

    const themeClass = isDarkMode ? "dark-mode" : "light-mode";
    const emailColor = isDarkMode ? "email-dark" : "email-light";
    return (
        <main className={`general-container ${themeClass}`}>
            <header className="arrow-aboutme-container">
                <Link to="/" className="arrow-aboutme-link">
                    <img
                        className={`arrow-image ${isDarkMode ? 'white-arrow' : 'black-arrow'}`}
                        src={arrow}
                        alt="Arrow Image"
                        title="Volver a la home"
                    />
                </Link>
            </header>
            <section className="aboutme-container">
                <img
                    className="cynthia-photo"
                    src={cynthia}
                    alt="Cynthia Photo"
                />
                <p className="aboutme-text">
                    ¡Bienvenido a mi portfolio! <br />
                    Acabo de finalizar un bootcamp de programación web full
                    stack de seis meses de duración. Cuento con más de un año de experiencia en programación desarrollando proyectos con las siguientes tecnologías:
                    <br />
                    <aside className="technologies-container">
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
                        Para cualquier duda o consulta sobre mí puedes escribirme a{" "}
                        <a
                            className={`aboutme-text email-link ${emailColor}`}
                            href="mailto:cyn2993@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            cyn2993@gmail.com
                        </a>
                    </aside>
                </p>
            </section>
            <article className="stack-container">
                <img src={figma} alt="Figma Icon" />
                <img src={html} alt="HTML Icon" />
                <img src={css} alt="CSS Icon" />
                <img src={javascript} alt="JavaScript Icon" />
                <img src={react} alt="React Icon" />
                <img src={bootstrap} alt="Bootstrap Icon" />
                <img src={node} alt="Node Icon" />
                <img src={typescript} alt="TypeScript Icon" />
                <img src={mysql} alt="MySQL Icon" />
            </article>
        </main>
    );
}

export default CircleAnimation(AboutMe);
