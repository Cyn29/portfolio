/* eslint-disable react-refresh/only-export-components */
import { Container } from "react-bootstrap";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" role="contentinfo">
            <Container as="section">
                <section className="footer-content">
                    <p>© 2023</p>
                    <a href="https://github.com/Cyn29" target="_blank" rel="noopener noreferrer" aria-label="Enlace a GitHub de Cynthia Álvarez Rubio">
                        <img src={github} alt="Icono de GitHub de Cynthia Álvarez Rubio"  className="github-icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a LinkedIn de Cynthia Álvarez Rubio">
                        <img src={linkedin} alt="Icono de LinkedIn de Cynthia Álvarez Rubio" className="github-icon"/>
                    </a>
                    <address>
                    <p>Contacto: <a className="email-link" href="mailto:cyn2993@gmail.com" target="_blank" rel="noopener noreferrer">cyn2993@gmail.com</a></p>
                    </address>
                </section>
            </Container>
        </footer>
    );
}

export default Footer;
