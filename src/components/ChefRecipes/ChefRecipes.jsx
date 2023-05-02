import React from 'react';

const ChefRecipes = () => {
    return (
        <div className='chef-recipes-wrap'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-3/4 gap-12">
                    <img src="https://ibtbd.net/wp-content/uploads/2019/11/Chef-Moniruzzaman.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-3/4'>
                        <h1 className="text-5xl font-bold">chef name</h1>
                        <p className="m-0">description</p>
                        <p className="m-0">likes</p>
                        <p className="m-0">number of recipes</p>
                        <p className="m-0">years of experience</p>
                    </div>
                </div>
            </div>
            <div className="chef-recipes py-12">
                <div className="container mx-auto">
                    <div className="container mx-auto">
                        <div className="section-headr text-center mb-9">
                            <h2 className="section-title text-4xl font-bold m-0 mb-4">Chef's Recipes</h2>
                            <p className="text-lg m-0">We have the best Chef's of bangladesh who provide native cusine</p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="card w-1/5 bg-gray-700 shadow-xl">
                            <figure><img src="https://www.tastepak.com/images/p/bangladeshi-cuisine.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">recipe name</h2>
                                <p className='m-0'>ingredients (at least 5)</p>
                                <p className='m-0'>cooking method</p>
                                <p className='m-0 flex gap-3'>
                                    <span>rating</span>
                                    <span>Favorite button</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;