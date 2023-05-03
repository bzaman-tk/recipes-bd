import React, { useEffect } from 'react';
import Hero from './Hero';
import Chefs from './chefs';
import ExtraSectionOne from './ExtraSectionOne';
import ExtraSectionTwo from './ExtraSectionTwo';

const Home = () => {
    useEffect(() => {
        document.title = 'Recipes BD'
    }, [])
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