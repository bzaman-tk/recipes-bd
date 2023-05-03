import React from 'react';
import heroImg from '../../assets/hero_image.jpg'
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Hero = () => {
    return (
        <div className="px-5 sm:px-0 sm:hero sm:min-h-screen bg-base-200">
            <div className="hero-content flex-col sm:flex-row sm:gap-24">
                <LazyLoadImage
                    className="max-w-full sm:max-w-sm rounded-lg shadow-2xl "
                    alt={''}
                    // height={'518'}
                    src={heroImg} // use normal <img> attributes as props
                    // width={'777'}
                    threshold={100}
                    delayTime={500}
                />
                {/* <img src={heroImg} className="max-w-full sm:max-w-sm rounded-lg shadow-2xl " /> */}
                <div className='sm:w-1/2'>
                    <h1 className="text-5xl font-bold">Bangladeshi Cuisine</h1>
                    <p className="py-6 text-white">We
                        <span className="font-bold normal-case text-xl mx-2">Recipes <span className="text-green-700">B<span className="text-red-700">D</span></span></span> Provide Cuisines of Bangladesh, Bangladesh is a small country lined with rivers and has a tropical monsoon climate, so it is only natural that seafood plays a big part in the diet of the people of Bangladesh </p>
                    <button className="btn btn-warning"> view Recipes</button>
                </div>
            </div>
        </div >
    );
};

export default Hero;