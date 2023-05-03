import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ data }) => {
    const { chef_name, chef_picture, id, likes, number_of_recipes, short_bio, years_of_experience } = data;
    // console.log(data);
    return (
        <div className="card w-1/4 bg-gray-700 shadow-xl">
            <figure className="px-4 pt-4">
                <img src="https://ibtbd.net/wp-content/uploads/2019/11/Chef-Moniruzzaman.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center p-4">
                <h2 className="card-title">{chef_name}</h2>
                <p>Years of experience: {years_of_experience}</p>
                <p>Numbers of recipes: {number_of_recipes}</p>
                <p>Likes {likes}</p>
                <div className="card-actions">
                    <Link to={`chef/recipes/${id}`} className="btn btn-warning">View Recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;