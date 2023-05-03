import React, { useEffect } from 'react';
import Hero from './Hero';
import Chefs from './chefs';
import ExtraSectionOne from './ExtraSectionOne';
import ExtraSectionTwo from './ExtraSectionTwo';

const Home = () => {
    //this will update the page title 
    useEffect(() => {
        document.title = 'Recipes BD'
    }, [])
    return (
        <div className='home-wrap'>
            <Hero />
            {/* Chefs Section */}
            <Chefs />
            {/* 2 Extra Section */}
            <ExtraSectionTwo />
            <ExtraSectionOne />
        </div>
    );
};

export default Home;