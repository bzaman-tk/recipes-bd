import React, { useContext } from 'react';
import './Header.css'
import auth from '../../util/firebase.config';
import { Link, NavLink, useLocation, useParams } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='header-wrap'>
            <div className="container mx-auto px-5 sm:px-0">
                <div className="navbar bg-base-100 !flex-col gap-3 sm:gap-0 sm:!flex-row">
                    <div className="flex-1">
                        <Link to='/' className="font-bold normal-case text-2xl">Recipes <span className="text-green-700">B<span className="text-red-700">D</span></span></Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1 gap-4">
                            <li><NavLink
                                to='/'
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-b-2 bg-transparent !rounded-none"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Home
                            </NavLink></li>
                            <li><NavLink
                                to='/blog'
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "border-b-2 bg-transparent !rounded-none"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                Blog
                            </NavLink></li>
                            {user ?
                                <>
                                    <li><Link to='/profile' className="tooltip tooltip-bottom" data-tip={user.displayName || ''}><img src="https://img.icons8.com/?size=512&id=22396&format=png" className='w-8 h-8' alt="" /></Link>
                                    </li>
                                    {/* <li className='items-center'>
                                        <Link onClick={() => logOut()} className='bg-yellow-600 text-white py-0 h-2/3 hover:bg-yellow-500'>Logout</Link>
                                    </li> */}
                                </>
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