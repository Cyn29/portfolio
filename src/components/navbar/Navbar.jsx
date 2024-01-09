import { useState, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import { ThemeContext } from '../../main';
import "./Navbar.css";
import DarkModeToggle from "react-dark-mode-toggle";

function Header() {

    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    const [expanded, setExpanded] = useState(false);

    const handleNavbarToggle = () => {
        setExpanded(!expanded);
    };

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleProjectsClick = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            const yOffset = -150;
            const y = projectsSection.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <Navbar
            className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"} ${expanded ? "navbar-expanded" : ""}`}
            expand="lg"
            data-bs-theme="dark"
            breakpoint="md"
            expanded={expanded}
            onToggle={handleNavbarToggle}>
            <Container className="d-flex justify-content-between">
                <Navbar.Brand  className="name" onClick={handleHomeClick}>
                    <span className="symbol">{"<"}</span>
                    <span className={`name-text ${isDarkMode ? "dark-mode" : "light-mode"}`}>Cynthia Álvarez</span>
                    <span className="symbol">{">"}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end align-self-center">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className={`navbar-section left-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
                            onClick={handleProjectsClick}
                        >
                            Proyectos
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/aboutme"
                            className={`navbar-section left-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
                        >
                            Sobre mí
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/resume"
                            className={`navbar-section left-section ${isDarkMode ? "dark-mode" : "light-mode"}`}
                        >
                            CV
                        </Nav.Link>
                    </Nav>
                    <Nav className="ml-auto right-section">
                        <a
                            href="https://github.com/Cyn29"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={github}
                                alt="GitHub Icon"
                                className={`github-icon ${isDarkMode ? "icon-dark" : "icon-light"}`}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedin}
                                alt="LinkedIn Icon"
                                className={`linkedin-icon ${isDarkMode ? "icon-dark" : "icon-light"}`}
                            />
                        </a>
                        <DarkModeToggle
                            className="theme-toggle"
                            onChange={handleToggle}
                            checked={isDarkMode}
                            size={65}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;

