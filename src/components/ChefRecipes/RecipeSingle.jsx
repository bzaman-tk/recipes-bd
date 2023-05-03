import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'
import { Rating } from 'react-simple-star-rating';

const RecipeSingle = ({ data }) => {
    const [favorite, setFavorite] = useState(false);
    const { recipe_name, rating, ingredients, cooking_method, } = data;

    return (
        <div className="single-card card lg:card-side  bg-gray-700 shadow-xl">
            <figure className='w-4/12'><img src="https://www.tastepak.com/images/p/bangladeshi-cuisine.jpg" alt="Shoes" /></figure>
            <div className="card-body w-11/12">
                <h2 className="card-title text-amber-500">{recipe_name}</h2>
                <div className='m-0 border-b pb-4 border-gray-500'>
                    <h3 className="font-bold my-2">Ingredients :</h3>
                    {/* <ul> */}
                    {
                        ingredients.map((x, i) => {
                            return <span key={i}> <span className="badge badge-accent badge-outline">{i + 1}</span> {x}</span>
                        })
                    }
                    {/* </ul> */}
                </div>
                <div className='m-0'>
                    <h3 className="mb-2 font-bold">Cooking Method:</h3>
                    {cooking_method}
                    <span className="block border-b border-gray-500 pt-2"></span>
                </div>
                <p className='m-0 flex gap-3 items-center'>
                    <span className='block'>
                        Rating :
                        <Rating
                            readonly
                            //emptyClassName='empty-icons !flex'
                            //fillClassName='!flex'
                            SVGclassName="inline"
                            allowFraction
                            initialValue={rating}
                        />

                        <span className="badge badge-accent badge-outline ml-2 border-yellow-500 !text-yellow-500"> {rating}</span>
                    </span>
                    <span onClick={() => setFavorite(!favorite)} className='flex items-center gap-2'>
                        Favorite :
                        <FaHeart className={`cursor-pointer ${favorite && 'text-red-500'}`} />
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RecipeSingle;