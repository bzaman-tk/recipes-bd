import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const { user, logOut, lodding } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Recipes BD | Profile'
    }, [])
    if (lodding) {
        return 'loading';
    }
    return (
        <div className='container mx-auto my-12 text-center'>
            <img className='w-14 h-14 mx-auto rounded-full p-1 border' src={user?.photoURL} alt="" />
            <h1 className='font-bold text-2xl'>Name: {user?.displayName}</h1>
            <h1 className='font-bold text-xl'>Email: {user?.email}</h1>
            <br className="mt-9" />
            <Link onClick={() => logOut()}
                className='rounded-lg py-2 px-5 bg-yellow-600 text-white py-0 h-2/3 hover:bg-yellow-500'
            >
                Logout</Link>
        </div>
    );
};

export default Profile;