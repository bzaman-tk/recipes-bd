import React from 'react';
import Hero from './Hero';
import Chefs from './chefs';

const Home = () => {
    return (
        <div className='home-wrap'>
            <Hero />
            <Chefs />
        </div>
    );
};

export default Home;