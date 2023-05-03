import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGithubAlt, FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Login = () => {
    const { logIn, googleLogin, githubLogin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const from = location.state?.from;
    // console.log(from);

    useEffect(() => {
        document.title = 'Recipes BD | Login'
    }, [])
    const handleForm = e => {
        setError('')
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if (!email) {
            setError('Provide Email')
            return;
        } else if (!password) {
            setError('Enter Password')
            return;
        }
        if (password.length < 6) {
            setError('password most be more then 6 char')
            return;
        }

        logIn(email, password)
            .then(result => {
                //console.log(result.user);
                if (from) {
                    navigate(from)
                } else {
                    navigate('/profile')
                }
            })
            .catch(e => setError(e.message))
        //console.log(email, password);
    }
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                //console.log(result.user);
                navigate('/profile')
            })
            .catch(e => setError(e.message))
    }
    const handleGithub = () => {
        githubLogin()
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: result.user?.reloadUserInfo?.screenName
                }).then(() => {
                    console.log('// Profile updated!');
                    navigate('/profile')
                }).catch((e) => {
                    setError(e.message)
                });
                navigate('/profile')
            })
            .catch(e => setError(e.message))
    }
    return (
        <div className='login-wrap'>
            <div className="container mx-auto">
                <div className="max-w-md border-0 border-gray-500 rounded-md mx-auto my-9 px-5 py-5">
                    <h2 className="text-center text-2xl">Please Login</h2>
                    <form onSubmit={handleForm}>
                        <div className="form-control mt-8">
                            <label className="input-group input-group-vertical ">
                                <span className='!rounded-none'>Email</span>
                                <input type="email" name='email' required={true} placeholder="info@site.com" className="input input-bordered !rounded-none" />
                            </label>
                            <label className="input-group input-group-vertical mt-6">
                                <span className=' !rounded'>Password</span>
                                <input type="password" name='password' required={true} className=" !rounded-none input input-bordered" />
                            </label>
                        </div>
                        <button className="btn btn-outline mt-6 mx-auto block">Login</button>
                    </form>
                    <p className="text-red-500 py-4">
                        {error}
                    </p>
                    <div className="flex gap-3 justify-center mt-6 border-t-2 border-t-gray-700 text-center pt-3">
                        <button onClick={handleGoogle} className="btn btn-outline text-xs flex gap-3 items-center justify-center"><FaGoogle /> Login with Googel</button>
                        <button onClick={handleGithub} className="btn btn-outline flex gap-3 items-center justify-center"><FaGithub /> Login with Github</button>
                    </div>
                    <p className="mt-6 border-t-2 border-t-gray-700 text-center pt-3">
                        Don't have an Account? <Link className='text-blue-500' to='/register'>Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;