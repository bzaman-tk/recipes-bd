import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeSingle from './RecipeSingle';
import LazyLoad from 'react-lazy-load';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefRecipes = () => {
    const [chefData, setChefData] = useState({});
    const recipes = useLoaderData()
    const { id } = useParams()
    // console.log(chefData.chef_name);

    useEffect(() => {
        //this will update the page title 
        document.title = 'Recipes BD | Chef Recipes'
        fetch(`https://chef-server-one.vercel.app/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-3/4 gap-12">
                    <LazyLoadImage
                        className="max-w-sm rounded-lg shadow-2xl"
                        alt={''}
                        // height={'518'}
                        src={chefData.chef_picture} // use normal <img> attributes as props
                        // width={'777'}
                        threshold={100}
                        delayTime={500}
                    />
                    {/* <img src={chefData.chef_picture} className="max-w-sm rounded-lg shadow-2xl" /> */}

                    <div className='w-3/4'>
                        <h1 className="text-5xl font-bold mb-6">Name : {chefData.chef_name}</h1>
                        <p className="m-0">Bio : {chefData.short_bio}</p>
                        <p className="m-0 my-3">Likes:<span className="ml-2 badge badge-accent badge-outline"> {chefData.likes}</span></p>
                        <p className="m-0">Number of Recipe:<span className="ml-2 badge badge-accent badge-outline"> {chefData.number_of_recipes}</span></p>
                        <p className="m-0 my-3">Years of Experience:<span className="ml-2 badge badge-accent badge-outline"> {chefData.years_of_experience}</span></p>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="container mx-auto">
                    <div className="container mx-auto">
                        <div className="section-headr text-center mb-9">
                            <h2 className="section-title text-4xl font-bold m-0 mb-4">Chef's Recipes</h2>
                            <p className="text-lg m-6">We have the best Chef's of bangladesh who provide native cusine</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center gap-5'>
                        {
                            //recipes for each chef
                            recipes.map(r => <RecipeSingle data={r} key={r.id} />)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ChefRecipes;