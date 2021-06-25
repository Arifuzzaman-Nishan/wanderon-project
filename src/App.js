import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Explore from './Component/Explore/Explore';
import Home from './Component/Home/Home';
import TrendingTrips from './Component/TravelCards/TrendingTrips/TrendingTrips';

const App = () => (
    <Router>
        {/* <NavigationBar /> */}
        <Home />
        <Explore />
        <TrendingTrips />
    </Router>
);

export default App;
