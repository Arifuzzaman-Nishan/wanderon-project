import React from 'react';
import { Container, Row } from 'react-bootstrap';
import birkasol from '../../../images/trendingtrips/BirKasolKheerganga.jpg';
import kasol from '../../../images/trendingtrips/KasolKheergangaManali.jpg';
import manali from '../../../images/trendingtrips/manalileh.jpg';
import parvati from '../../../images/trendingtrips/ParvatiValley.jpg';
import birbilling from '../../../images/weekend/birbilling.jpg';
import kheerganga from '../../../images/weekend/KasolKheerganga.jpg';
import manaliLahaul from '../../../images/weekend/ManaliLahaul.jpg';
import tirthan from '../../../images/weekend/TirthanValley.jpg';
import TripDetails from '../TripDetails/TripDetails';

const TrendingTrips = () => {
    const sliderData = [
        { pic: manali, title: 'Manali Leh Manali', price: '₹6,999/-' },
        { pic: birkasol, title: 'Bir Kasol Kheerganga', price: '₹10,999/-' },
        { pic: kasol, title: 'Kasol Kheerganga', price: '₹15,999/-' },
        { pic: parvati, title: 'Pravati Valley', price: '₹18,999/-' },
    ];
    const weekendData = [
        { pic: birbilling, title: 'Manali Leh Manali', price: '₹18,999/-' },

        { pic: manaliLahaul, title: 'Bir Kasol Kheerganga', price: '₹20,999/-' },
        { pic: kheerganga, title: 'Kasol Kheerganga', price: '₹24,999/-' },
        { pic: tirthan, title: 'Pravati Valley', price: '₹26,999/-' },
    ];

    return (
        <Container>
            <div>
                <h1>Trending Trips</h1>
                <Row>
                    {sliderData.map((items) => (
                        <TripDetails items={items} />
                    ))}
                </Row>
            </div>
            <div>
                <h1>Weekend Trips</h1>
                <Row>
                    {weekendData.map((items) => (
                        <TripDetails items={items} />
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default TrendingTrips;
