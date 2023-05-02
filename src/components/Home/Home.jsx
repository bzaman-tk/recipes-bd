import React from 'react';
import Hero from './Hero';
import Chefs from './chefs';
import ExtraSectionOne from './ExtraSectionOne';
import ExtraSectionTwo from './ExtraSectionTwo';

const Home = () => {
    return (
        <div className='home-wrap'>
            <Hero />
            <Chefs />
            <ExtraSectionTwo />
            <ExtraSectionOne />
        </div>
    );
};

export default Home;