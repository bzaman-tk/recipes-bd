import React from 'react';

const Chefs = () => {
    return (
        <div className='chefs-wrap my-12'>
            <div className="container mx-auto">
                <div className="section-headr text-center mb-9">
                    <h2 className="section-title text-4xl font-bold m-0 mb-4">Our Chef's</h2>
                    <p className="text-lg m-0">We have the best Chef's of bangladesh who provide native cusine</p>
                </div>
                <div className="chefs flex justify-center">
                    <div className="card w-1/4 bg-gray-700 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://ibtbd.net/wp-content/uploads/2019/11/Chef-Moniruzzaman.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center p-4">
                            <h2 className="card-title">Chef Name</h2>
                            <p>Years of experience: 9</p>
                            <p>Numbers of recipes: 13</p>
                            <p>Likes 345</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">View Recipes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;