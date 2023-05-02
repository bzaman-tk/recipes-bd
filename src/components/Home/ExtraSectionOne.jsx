import React from 'react';
import './ExtraSectionOne.css'

const ExtraSectionOne = () => {
    return (
        <div className='extra-one bg-gray-400 py-12 text-black'>
            <div className="container mx-auto">
                <div className="section-headr text-center mb-9">
                    <h2 className="section-title text-4xl font-bold m-0 mb-4">Special Menu</h2>
                    <p className="text-lg m-0">We have the best Chef's of bangladesh who provide native cusine</p>
                </div>
                <div className="flex justify-center gap-6">
                    <div className="card w-1/3 bg-gray-700 shadow-xl image-full cus-image-full">
                        <figure>
                            <img src="https://www.tastepak.com/images/p/bangladeshi-cuisine.jpg" alt="Shoes" />
                        </figure>
                        <div className="card-body text-center !flex flex-row items-center justify-center">
                            <div>
                                <h2 className="card-title text-white justify-center text-2xl ">Sorse Elish</h2>
                                <p className='text-white mt-3'>
                                    This is a native fish recipe of bangladesh
                                </p>
                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="card w-1/3 bg-gray-700 shadow-xl image-full cus-image-full">
                        <figure>
                            <img src="https://www.tastepak.com/images/p/bangladeshi-cuisine.jpg" alt="Shoes" />
                        </figure>
                        <div className="card-body text-center !flex flex-row items-center justify-center">
                            <div>
                                <h2 className="card-title text-white justify-center text-2xl ">Sorse Elish</h2>
                                <p className='text-white mt-3'>
                                    This is a native fish recipe of bangladesh
                                </p>
                                {/* <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;