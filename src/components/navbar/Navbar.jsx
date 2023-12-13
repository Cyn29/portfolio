import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css"
import { Link } from "react-router-dom";
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"

function Header() {
    return (
        <>
            <Navbar className="navbar" data-bs-theme="dark">
                <Container className="navbar-container">
                    <Navbar.Brand className="navbar-section left-section">Cynthia Álvarez</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="navbar-section left-section">Home</Nav.Link>
                        <Nav.Link as={Link} to="/aboutme" className="navbar-section left-section">Sobre mí</Nav.Link>
                        <Nav.Link as={Link} to="/resume" className="navbar-section left-section">CV</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto right-section">
                        <a href="https://github.com/Cyn29" className="github-icon" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn Icon" />
                        </a>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;

