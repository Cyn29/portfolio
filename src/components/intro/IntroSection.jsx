import PropTypes from "prop-types";
import "./IntroSection.css";
import cynthiaimage from "../../assets/cynthia.jpg"

function IntroSection({ scrollToProjects }) {
    return (
        <section className="intro-container">
            <img src={cynthiaimage} alt="Imagen de Cynthia Álvarez" className="image-intro"/>
            <p className="intro-text">
                ¡Hola! Mi nombre es Cynthia Álvarez y soy programadora web full
                stack con más de un año de experiencia programando con React,
                Node.js, TypeScript y MySQL, entre otros.
            </p>
            <button className="scroll-button" onClick={scrollToProjects} aria-label="Ver proyectos">
                <span className="down-arrow">&#8659;</span>
                <span>VER PROYECTOS</span>
                <span className="down-arrow">&#8659;</span>
            </button>
        </section>
    );
}

IntroSection.propTypes = {
    scrollToProjects: PropTypes.func.isRequired,
};

export default IntroSection;
