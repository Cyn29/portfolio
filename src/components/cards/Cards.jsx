import Card from "react-bootstrap/Card";
import "./Cards.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cards({ id, image, title, description, bottomImages, link, route, clickedCard, setClickedCard }) {
    const handleClick = (e) => {
        e.stopPropagation();
        setClickedCard(id);
    };

    return (
        <Card 
            className={`card-section ${clickedCard === id ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <Card.Img variant="top" src={image} className={`card-image ${clickedCard !== id ? 'unclicked' : ''}`} />
            <Card.Body className="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                {bottomImages && (
                    <div className="bottom-images-container">
                        {bottomImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Technology icon"
                                className="bottom-image"
                            />
                        ))}
                    </div>
                )}
                <Link to={route}>
                    <button className="card-button" variant="dark">
                        {link}
                    </button>
                </Link>
            </Card.Body>
        </Card>
    );
}

Cards.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bottomImages: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    clickedCard: PropTypes.number,
    setClickedCard: PropTypes.func.isRequired,
};

export default Cards;

