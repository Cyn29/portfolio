import { useState, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import { ThemeContext } from "../../main";
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

    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
            const navbarHeight = document.querySelector(".navbar").offsetHeight;
            const projectsSectionTop = projectsSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: projectsSectionTop,
                behavior: "smooth",
            });
        }
    };

    const handleNavbarClick = () => {
        if (expanded) {
            setExpanded(false);
        }
    };

    return (
        <main onClick={handleNavbarClick}>
            <Navbar
                className={`navbar ${isDarkMode ? "dark-mode" : "light-mode"} ${
                    expanded ? "navbar-expanded" : ""
                }`}
                expand="lg"
                data-bs-theme="dark"
                breakpoint="md"
                expanded={expanded}
                onToggle={handleNavbarToggle}>
                <Container className="d-flex justify-content-between">
                    <Navbar.Brand className="name" onClick={handleHomeClick}>
                        <span className="symbol">{"<"}</span>
                        <span
                            className={`name-text ${
                                isDarkMode ? "dark-mode" : "light-mode"
                            }`}>
                            Cynthia Álvarez
                        </span>
                        <span className="symbol">{">"}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-collapse justify-content-end align-self-center">
                        <Nav className="me-auto">
                            <Nav.Link
                                as="a"
                                href="#projects"
                                className={`navbar-section left-section ${
                                    isDarkMode ? "dark-mode" : "light-mode"
                                }`}
                                onClick={scrollToProjects}>
                                Proyectos
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/aboutme"
                                className={`navbar-section left-section ${
                                    isDarkMode ? "dark-mode" : "light-mode"
                                }`}>
                                Sobre mí
                            </Nav.Link>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                className={`navbar-section left-section ${
                                    isDarkMode ? "dark-mode" : "light-mode"
                                }`}>
                                CV
                            </Nav.Link>
                        </Nav>
                        <Nav className="ml-auto right-section">
                            <a
                                href="https://github.com/Cyn29"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={github}
                                    alt="Icono de GitHub con el enlace al perfil de Cynthia Álvarez Rubio"
                                    className={`github-icon ${
                                        isDarkMode ? "icon-dark" : "icon-light"
                                    }`}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cynthiaalvarezrubio-fullstackdeveloper/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img
                                    src={linkedin}
                                    alt="Icono de LinkedIn con el enlace al perfil de Cynthia Álvarez Rubio"
                                    className={`linkedin-icon ${
                                        isDarkMode ? "icon-dark" : "icon-light"
                                    }`}
                                />
                            </a>
                            <DarkModeToggle
                                id="theme-toggle"
                                className="theme-toggle dark-mode-toggle"
                                onChange={handleToggle}
                                checked={isDarkMode}
                                size={65}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </main>
    );
}

export default Header;
