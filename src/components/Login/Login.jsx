import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login-wrap'>
            <div className="container mx-auto">
                <div className="max-w-md border-0 border-gray-500 rounded-md mx-auto my-9 px-5 py-5">
                    <h2 className="text-center text-2xl">Please Login</h2>
                    <form>
                        <div className="form-control mt-8">
                            <label className="input-group input-group-vertical ">
                                <span className='!rounded-none'>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered !rounded-none" />
                            </label>
                            <label className="input-group input-group-vertical mt-6">
                                <span className=' !rounded'>Password</span>
                                <input type="password" className=" !rounded-none input input-bordered" />
                            </label>
                        </div>
                        <button className="btn btn-outline mt-6 mx-auto block">Login</button>
                    </form>
                    <p className="mt-6 border-t-2 border-t-gray-700 text-center pt-3">
                        Don't have an Account? <Link className='text-blue-500' to='/register'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;