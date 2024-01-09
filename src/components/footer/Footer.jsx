import { useContext } from "react";
import { Container } from "react-bootstrap";
import { ThemeContext } from '../../main';
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import "./Footer.css";

function Footer() {
    const { isDarkMode } = useContext(ThemeContext);

    const themeClass = isDarkMode ? 'dark-mode' : 'light-mode';
    const emailColor = isDarkMode ? 'email-dark' : 'email-light';

    return (
        <footer className={`footer ${themeClass}`} role="contentinfo">
            <Container as="section">
                <section className="footer-content">
                    <p className="copyright-text">© 2023</p>
                        <a href="https://github.com/Cyn29" target="_blank" rel="noopener noreferrer" aria-label="Enlace a GitHub de Cynthia Álvarez Rubio">
                            <img src={github} alt="Icono de GitHub con el enlace al perfil de Cynthia Álvarez Rubio"  className={`${isDarkMode ? "icon-dark" : "icon-light"}`}/>
                        </a>
                        <a href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/" target="_blank" rel="noopener noreferrer" aria-label="Enlace a LinkedIn de Cynthia Álvarez Rubio">
                            <img src={linkedin} alt="Icono de LinkedIn con el enlace al perfil de Cynthia Álvarez Rubio" className={`${isDarkMode ? "icon-dark" : "icon-light"}`}/>
                        </a>
                    <address>
                        <p className="contact-text">Contacto: <a className={`email-link ${emailColor}`} href="mailto:cyn2993@gmail.com" target="_blank" rel="noopener noreferrer">cyn2993@gmail.com</a></p>
                    </address>
                </section>
            </Container>
        </footer>
    );
}

export default Footer;



