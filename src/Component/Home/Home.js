/* eslint-disable react/no-unescaped-entities */
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Typed from 'react-typed';
import happyTravellers from '../../images/happyTravellers.svg';
import itineraries from '../../images/itineararies.svg';
import rating from '../../images/rating.svg';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Home.css';

export default function Home() {
    const iconData = [
        { pic: happyTravellers, des1: '50000+', des2: 'Happy Travellers' },
        { pic: rating, des1: '2000+', des2: '5 Star Rating' },
        { pic: itineraries, des1: '300+', des2: 'Itineraries' },
    ];
    return (
        <div className="home-bg">
            <NavigationBar />
            <div>
                <h1 className="text-white text-center text-font">
                    India's Coolest Travel Community
                </h1>
                <div className="d-flex justify-content-center">
                    <Typed
                        className="typed-text text-center text-font"
                        strings={['Connecting people', 'Creating Memories', 'Fulfiling Adventure']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </div>
                <div className="d-flex justify-content-center align-items-center my-md-5 my-5 py-md-5">
                    <input
                        size="lg"
                        style={{
                            width: '40rem',
                            height: '55px',
                            border: '3px solid rgb(10, 158, 136)',
                        }}
                        placeholder="Where do you wanna go?"
                        className="form-control"
                        type="text"
                    />
                    <FontAwesomeIcon
                        style={{
                            fontSize: '54px',
                            background: 'rgb(10, 158, 136)',
                            cursor: 'pointer',
                        }}
                        className="text-white p-2"
                        icon={faSearch}
                    />
                </div>
                <div className="d-flex justify-content-around mt-md-5 pt-md-5">
                    {iconData.map((item) => (
                        <div className="text-center">
                            <img className="img-width" src={item.pic} alt="" />
                            <div className="text-style">
                                {item.des1}
                                <br />
                                {item.des2}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
