import React from 'react';
import homeIcon from '../../images/wanderon-logo.svg';
import './NavigationBar.css';
import Drawer from './SideBar';

const NavigationBar = () => (
    <div className="bg-danger nav-font">
        <ul className="list-unstyled border border-dark d-flex align-items-center">
            <li className="list-inline-item ml-5">
                <img style={{ width: '5rem', color: 'red' }} src={homeIcon} alt="" />
            </li>
            <li className="m-auto">+091-9870301533</li>
            <div className="ml-auto">
                <li className="list-inline-item mr-5">TRENDINGTRIPS</li>
                <li className="list-inline-item mr-5">WORKCATIONS</li>
                <li className="list-inline-item mr-5">BLOGS</li>
                <li className="list-inline-item mr-5 pr-5">
                    <Drawer />
                </li>
            </div>
        </ul>
    </div>
);

export default NavigationBar;
