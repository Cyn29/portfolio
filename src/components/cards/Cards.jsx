import Card from "react-bootstrap/Card";
import "./Cards.css";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Cards({ image, title, description, link, route }) {
    return (
        <Card className="card-section">
            <Card.Img variant="top" src={image} />
            <Card.Body className="card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Link to={route}>
                    <button className="card-button" variant="dark">{link}</button>
                </Link>
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
