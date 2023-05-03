import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';

const Chefs = () => {
    const allChef = useLoaderData();
    // console.log(allChef);
    return (
        <div className='chefs-wrap my-12'>
            <div className="container mx-auto">
                <div className="section-headr text-center mb-9">
                    <h2 className="section-title text-4xl font-bold m-0 mb-4">Our Chef's</h2>
                    <p className="text-lg m-0">We have the best Chef's of bangladesh who provide native cusine</p>
                </div>
                <div className="chefs flex flex-col sm:flex-row justify-center flex-wrap gap-8  px-5 sm:px-0">
                    {
                        allChef.map(chef => <ChefCard data={chef} key={chef.id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chefs;