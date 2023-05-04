import React, { useEffect } from 'react';
import Hero from './Hero';
import Chefs from './chefs';
import ExtraSectionOne from './ExtraSectionOne';
import ExtraSectionTwo from './ExtraSectionTwo';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allChef = useLoaderData();
    if (!allChef) {
        return (
            <div className="container w-72 mx-auto block my-16">
                <button className="btn loading">Network issue, Please Reload</button>
            </div>

        )
    }
    //this will update the page title 
    useEffect(() => {
        document.title = 'Recipes BD'
    }, [])
    return (
        <div className='home-wrap'>
            <Hero />
            {/* Chefs Section */}
            <Chefs allChef={allChef} />
            {/* 2 Extra Section */}
            <ExtraSectionTwo />
            <ExtraSectionOne />
        </div>
    );
};

export default Home;