/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import './Navbar.css'; 

function Header() {
    const nameStyle = {
        color: "#fff",
    };
    const symbolStyle = {
        color: "#FDE12D",
    };

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    };

    return (
        <>
            <Navbar
                className={`navbar ${expanded ? "navbar-expanded" : ""}`}
                expand="lg"
                data-bs-theme="dark"
                breakpoint="md"
                expanded={expanded}
                onToggle={handleToggle}>
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand className="name align-self-center">
                        <span style={symbolStyle}>{'<'}</span>
                        <span style={nameStyle}>Cynthia Álvarez</span>
                        <span style={symbolStyle}>{'>'}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end align-self-center">
                        <Nav className="me-auto">
                            <Nav.Link
                                as={Link}
                                to="/"
                                className="navbar-section left-section"
                                onClick={handleHomeClick} 
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/aboutme"
                                className="navbar-section left-section">
                                Sobre mí
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                className="navbar-section left-section">
                                CV
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto right-section">
                            <a
                                href="https://github.com/Cyn29"
                                className="github-icon"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={github} alt="GitHub Icon" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/"
                                className="linkedin-icon"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn Icon" />
                            </a>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;






