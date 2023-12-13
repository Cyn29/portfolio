import Card from "react-bootstrap/Card";
import "./Cards.css";
import PropTypes from "prop-types";

function Cards({ image, title, description, link }) {
    return (
        <Card className="card-section">
            <Card.Img variant="top" src={image} />
            <Card.Body className="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <button className="card-button" variant="dark">{link}</button>
            </Card.Body>
        </Card>
    );
}

Cards.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Cards;
