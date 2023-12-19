import Header from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import orange from "../../assets/cards/orange.png";
import madxtreme from "../../assets/cards/madxtreme.png"
import atuspies from "../../assets/cards/atuspies.png"
import pokemon from "../../assets/cards/pokemon.png"
import sportforall from "../../assets/cards/sportforall.png"
import "./Home.css"


function Home() {
    return (
        <div className="home-container">
        <Header />
        <div className="title-container">
            <h1 className="projects-title">!PROYECTOS</h1>
        </div>
        <div className="cards-container">
        <Cards 
        image={orange}
        title="Orange Digital Center"
        description="Diseño y desarrollo de la interfaz del Orange Digital Center de Madrid."
        link="Ver más"
        route="/orangedigitalcenter" />
        <Cards 
        image={madxtreme}
        title="Madxtreme"
        description="Web de reservas de deportes de aventura en la comunidad de Madrid."
        link="Ver más"
        route="/madxtreme" />
        <Cards
        image={atuspies}
        title="A tus pies"
        description="Dashboard del administrador de un ecommerce de zapatillas deportivas."
        link="Ver más"
        route="/atuspies" />
        <Cards 
        image={pokemon}
        title="Catch a coder"
        description="App en la que los docentes pueden seleccionar alumnos de forma aleatoria."
        link="Ver más"
        route="/catchacoder" />
        <Cards 
        image={sportforall}
        title="Sport for all"
        description="Diseño y maquetación de la landing page de una consultora tecnológica."
        link="Ver más"
        route="/sportforall" />
        </div>
        <Footer />
        </div>
    );
}

export default Home;