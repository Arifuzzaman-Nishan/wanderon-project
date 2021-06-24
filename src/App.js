import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Component/Home/Home';

const App = () => (
    <Router>
        {/* <NavigationBar /> */}
        <Home />
    </Router>
);

export default App;
