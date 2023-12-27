import { useState } from "react";
import Header from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import orange from "../../assets/cards/orange.png";
import madxtreme from "../../assets/cards/madxtreme.png";
import atuspies from "../../assets/cards/atuspies.png";
import pokemon from "../../assets/cards/pokemon.png";
import sportforall from "../../assets/cards/sportforall.png";
import figma from "../../assets/stack/figma.png";
import html from "../../assets/stack/html.png"
import css from "../../assets/stack/css.png";
import sass from "../../assets/stack/sass.png"
import javascript from "../../assets/stack/javascript.png"
import json from "../../assets/stack/json.png"
import bootstrap from "../../assets/stack/bootstrap.png"
import react from "../../assets/stack/react.png";
import nodejs from "../../assets/stack/node.png";
import typescript from "../../assets/stack/typescript.png";
import "./Home.css";

function Home() {
    const [clickedCard, setClickedCard] = useState(null);

    const handleContainerClick = () => {
        setClickedCard(null);
    };

    return (
        <div className="home-container" onClick={handleContainerClick}>
            <Header />
            <div className="title-container">
                <h1 className="projects-title">!PROYECTOS</h1>
            </div>
            <div className="cards-container" onClick={handleContainerClick}>
                <Cards
                    id={1}
                    image={madxtreme}
                    title="Madxtreme"
                    description="Web de reservas de deportes de aventura en la comunidad de Madrid. El diseño de la web se realizó en Figma y el desarrollo de la misma se hizo con React Bootstrap, React y Node.js"
                    bottomImages={[figma, bootstrap, react, nodejs]}
                    link="Ver más"
                    route="/madxtreme"
                    clickedCard={clickedCard}
                    setClickedCard={setClickedCard}
                />
                <Cards
                    id={2}
                    image={orange}
                    title="Orange Digital Center"
                    description="Diseño y desarrollo de la interfaz del Orange Digital Center de Madrid. El diseño de la interfaz se realizó en Figma. El frontend está programado con CSS y React y el backend con TypeScript."
                    bottomImages={[figma, css, react, typescript]}
                    link="Ver más"
                    route="/orangedigitalcenter"
                    clickedCard={clickedCard}
                    setClickedCard={setClickedCard}
                />
                <Cards
                    id={3}
                    image={atuspies}
                    title="A tus pies"
                    description="Dashboard del administrador de un ecommerce de zapatillas deportivas. El backend del proyecto está generado con json-server y el frontend con React y React Bootstrap."
                    link="Ver más"
                    bottomImages={[figma, bootstrap, react, json]}
                    route="/atuspies"
                    clickedCard={clickedCard}
                    setClickedCard={setClickedCard}
                />
                <Cards
                    id={4}
                    image={pokemon}
                    title="Catch a coder"
                    description="App en la que los docentes pueden seleccionar alumnos de forma aleatoria. El juego fue diseñado en Figma y a través de HTML, CSS y Javascript fueron creados los estilos y la funcionalidad."
                    bottomImages={[figma, html, sass, javascript]}
                    link="Ver más"
                    route="/catchacoder"
                    clickedCard={clickedCard}
                    setClickedCard={setClickedCard}
                />
                <Cards
                    id={5}
                    image={sportforall}
                    title="Sport for all"
                    description="Diseño y maquetación de la landing page de una consultora tecnológica. La landing page se diseñó en Figma y se maquetó con HTML y CSS. Se usó JavaScript para añadir funcionalidad a la navbar."
                    bottomImages={[figma, html, css, javascript]}
                    link="Ver más"
                    route="/sportforall"
                    clickedCard={clickedCard}
                    setClickedCard={setClickedCard}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Home;

