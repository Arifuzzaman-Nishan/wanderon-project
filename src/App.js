import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Explore from './Component/Explore/Explore';
import Home from './Component/Home/Home';

const App = () => (
    <Router>
        {/* <NavigationBar /> */}
        <Home />
        <Explore />
    </Router>
);

export default App;
