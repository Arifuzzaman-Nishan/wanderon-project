import React from 'react';
import { Container } from 'react-bootstrap';
import backpack from '../../images/backpacking-trips.svg';
import corporate from '../../images/corporate-trips.svg';
import customised from '../../images/customised-trips.svg';
import adventure from '../../images/scuba.svg';
import weekend from '../../images/weekend-trips.svg';
import workcatin from '../../images/workcations.svg';
import './Explore.css';
import ExploreDetails from './ExploreDetails';

const Explore = () => {
    const exploreData = [
        { pic: backpack, title: 'BACKPACKING TRIPS' },
        { pic: weekend, title: 'WEEKEND TRIPS' },
        { pic: workcatin, title: 'WORKCATIONS STAYS' },
        { pic: adventure, title: 'ADVENTURE COURSES' },
        { pic: customised, title: 'CUSTOMISED TRIPS' },
        { pic: corporate, title: 'CORPORATE TRIPS' },
    ];
    return (
        <Container className="mt-5">
            <h2 className="text-center mb-5 primary-color">Explore WanderOn</h2>
            <div className="row">
                {exploreData.map((item) => (
                    <ExploreDetails item={item} />
                ))}
            </div>
        </Container>
    );
};

export default Explore;
