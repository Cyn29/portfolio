import { Container } from "react-bootstrap";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-content">
                    <p>&copy; 2023</p>
                    <a href="https://github.com/Cyn29" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn Icon" />
                    </a>
                    <p>Contacto: cyn2993@gmail.com</p>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
