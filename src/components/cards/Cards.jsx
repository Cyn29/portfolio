/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cards({ id, image, title, description, bottomImages, link, route, clickedCard, setClickedCard }) {
    const [doubleClicked, setDoubleClicked] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        if (clickedCard === id) {
            setDoubleClicked(!doubleClicked);
        } else {
            setClickedCard(id);
            setDoubleClicked(false);
        }
    };

    return (
        <Card
            className={`card-section col-12 col-sm-6 col-md-3 m-2 mb-5 ${clickedCard === id && !doubleClicked ? 'clicked' : ''} ${clickedCard === id && doubleClicked ? 'double-clicked' : ''}`}
            onClick={handleClick}
        >
            <Card.Img variant="top" src={image} className={`card-image ${clickedCard !== id ? 'unclicked' : ''}`} />
            <Card.Body className="card-body">
                <Card.Title className="card-text">{title}</Card.Title>
                <Card.Text className="card-text">{description}</Card.Text>
                {bottomImages && (
                    <div className="bottom-images-container">
                        {bottomImages.map((img, id) => (
                            <img
                                key={id}
                                src={img}
                                alt="Technology icon"
                                className="bottom-image"
                            />
                        ))}
                    </div>
                )}
                <Link to={route} className="card-button" variant="dark">
                    {link}
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





