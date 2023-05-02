import React from 'react';
import './Header.css'
import auth from '../../util/firebase.config';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = ''
    const displayName = 'MD ZAMAN'
    return (
        <div className='header-wrap pt-6' style={{ backgroundImage: `url("https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg")` }}>
            <div className="container mx-auto">
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to='/' className="font-bold normal-case text-2xl">Recipes <span className="text-green-700">B<span className="text-red-700">D</span></span></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            {user ?
                                <li><Link className="tooltip tooltip-bottom" data-tip={displayName || ''}><img src="https://img.icons8.com/?size=512&id=22396&format=png" className='w-8 h-8' alt="" /></Link></li>
                                :
                                <li className='items-center'><Link to='/login' className='bg-yellow-600 text-white py-0 h-2/3 hover:bg-yellow-500'>Login</Link></li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;