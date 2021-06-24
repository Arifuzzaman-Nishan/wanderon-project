import React from 'react';
import homeIcon from '../../images/wanderon-logo.svg';
import './NavigationBar.css';
import Drawer from './SideBar';

export default function NavigationBar() {
    return (
        <div className="nav-font text-white">
            <ul className="list-unstyled d-flex align-items-center">
                <li className="list-inline-item ml-3">
                    <img style={{ width: '5rem', color: 'red' }} src={homeIcon} alt="" />
                </li>
                <li className="m-auto">+091-9870301533</li>
                <div className="ml-auto">
                    <li className="list-inline-item mr-5 d-none d-md-inline">TRENDINGTRIPS</li>
                    <li className="list-inline-item mr-5 d-none d-md-inline">WORKCATIONS</li>
                    <li className="list-inline-item mr-5 d-none d-md-inline">BLOGS</li>
                    <li className="list-inline-item mr-3 pr-2 d-md-none d-block">
                        <Drawer />
                    </li>
                </div>
            </ul>
        </div>
    );
}
