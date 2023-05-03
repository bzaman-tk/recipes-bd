import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
//import { dataServerUrl } from '../../routes/routes';
import RecipeSingle from './RecipeSingle';

const TestCompo = () => {

    const [chefData, setChefData] = useState({});
    const recipes = useLoaderData()
    const { id } = useParams()
    console.log(chefData.chef_name);

    useEffect(() => {
        fetch(`http://localhost:5000/chefs/${id}`)
            .then(res => res.json())
            .then(data => setChefData(data))
    }, [])

    return (
        <div className="">
            hi
            {/* <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row w-3/4 gap-12">
                    <img src="https://ibtbd.net/wp-content/uploads/2019/11/Chef-Moniruzzaman.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='w-3/4'>
                        <h1 className="text-5xl font-bold mb-6">{chefData.chef_name}</h1>
                        <p className="m-0">{chefData.short_bio}</p>
                        <p className="m-0 my-6">Likes: {chefData.likes}</p>
                        <p className="m-0">Number of Recipe: {chefData.number_of_recipes}</p>
                        <p className="m-0">Years of Experience: {chefData.years_of_experience}</p>
                    </div>
                </div>
            </div> */}
            <div className="py-12">
                <div className="container mx-auto">
                    <div className="container mx-auto">
                        <div className="section-headr text-center mb-9">
                            <h2 className="section-title text-4xl font-bold m-0 mb-4">Chef's Recipes</h2>
                            <p className="text-lg m-6">We have the best Chef's of bangladesh who provide native cusine</p>
                        </div>
                    </div>
                    <div className='flex justify-center gap-12'>
                        {
                            // recipes.map(r => <RecipeSingle data={r} key={r.id} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestCompo;