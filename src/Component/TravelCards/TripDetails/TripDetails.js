import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './TripDetails.css';

const TripDetails = ({ items }) => {
    const { pic, title, price } = items;

    return (
        <Col style={{ cursor: 'pointer' }} className="mb-5" md={3}>
            <Card className="card-style">
                <Card.Img
                    style={{ height: '12rem' }}
                    // className="img-fluid"
                    variant="top"
                    src={pic}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{`Starts at ${price}`}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TripDetails;
