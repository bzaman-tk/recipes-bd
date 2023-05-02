import React from 'react';
import Hero from './Hero';
import Chefs from './chefs';
import ExtraSectionOne from './ExtraSectionOne';

const Home = () => {
    return (
        <div className='home-wrap'>
            <Hero />
            <Chefs />
            <ExtraSectionOne />
        </div>
    );
};

export default Home;