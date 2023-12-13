import Header from "../../components/navbar/Navbar";
import Cards from "../../components/cards/Cards";
import Footer from "../../components/footer/Footer";
import orange from "../../assets/cards/orange.png";
import madxtreme from "../../assets/cards/madxtreme.png"
import atuspies from "../../assets/cards/atuspies.png"
import pokemon from "../../assets/cards/pokemon.png"
import "./Home.css"


function Home() {
    return (
        <div className="home-container">
        <Header />
        <div className="cards-container">
        <Cards 
        image={orange}
        title="Orange Digital Center"
        description="Diseño y desarrollo de la interfaz del Orange Digital Center de Madrid."
        link="Ver más" />
        <Cards 
        image={madxtreme}
        title="Madxtreme"
        description="Web de reservas de deportes de aventura en la comunidad de Madrid."
        link="Ver más" />
        <Cards
        image={atuspies}
        title="A tus pies"
        description="Dashboard del administrador de un ecommerce de zapatillas deportivas."
        link="Ver más" />
        <Cards 
        image={pokemon}
        title="Catch a coder"
        description="App en la que los docentes pueden seleccionar alumnos de forma aleatoria."
        link="Ver más" />
        </div>
        <Footer />
        </div>
    );
}

export default Home;