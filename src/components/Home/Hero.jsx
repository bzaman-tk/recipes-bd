import React from 'react';

const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <img src="https://www.tastepak.com/images/p/bangladeshi-cuisine.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='w-1/2'>
                    <h1 className="text-5xl font-bold">Bangladeshi Cuisine</h1>
                    <p className="py-6 text-white">We
                        <span className="font-bold normal-case text-xl mx-2">Recipes <span className="text-green-700">B<span className="text-red-700">D</span></span></span> Provide Cuisines of Bangladesh, Bangladesh is a small country lined with rivers and has a tropical monsoon climate, so it is only natural that seafood plays a big part in the diet of the people of Bangladesh </p>
                    <button className="btn btn-warning"> view Recipes</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;