import React from 'react';
import errorImg from '../../assets/404.webp'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='max-w-md mx-auto min-h-screen flex flex-col justify-center items-center'>
            <img src={errorImg} className='w-60' alt="" />
            <h1 className="text-red-500 text-5xl font-bold my-6">Page not Found</h1>
            <p>Go Back To <Link className='text-blue-500' to='/'>Home</Link></p>
        </div>
    );
};

export default ErrorPage;