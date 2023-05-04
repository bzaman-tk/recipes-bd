import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        document.title = 'Recipes BD | Register'
    }, [])
    const handleForm = e => {
        setError('')
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!name) {
            setError("Name Can't be empty")
            form.name.focus()
            return;
        } else if (!photo) {
            setError("Photo Can't be empty")
            form.photo.focus()
            return;
        } else if (!email) {
            setError("Email Can't be empty")
            form.email.focus()
            return;
        } else if (!password) {
            setError("Name Can't be empty")
            form.password.focus()
            return;
        }
        if (password.length < 6) {
            setError("Password Should not be less then 6 carecters")
            form.password.focus()
            return;
        }
        // console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                updateProfile(result.user, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    console.log('// Profile updated!');
                    logOut()
                        .then(() => {
                            navigate('/login')
                        }).catch((e) => {
                            setError(e.message)
                        });

                }).catch((e) => {
                    setError(e.message)
                });
            })
            .catch(e => setError(e.message));
    }
    return (
        <div className='register-wrap'>
            <div className="container mx-auto">
                <div className="max-w-md border-0 border-gray-500 rounded-md mx-auto my-9 px-5 py-5">
                    <h2 className="text-center text-2xl">Please Register</h2>
                    <form onSubmit={handleForm}>
                        <div className="form-control mt-8">
                            <label className="input-group input-group-vertical ">
                                <span className='!rounded-none'>Name</span>
                                <input type="text" name='name' required={true} placeholder="Name" className="input input-bordered !rounded-none mb-6" />
                            </label>
                            <label className="input-group input-group-vertical ">
                                <span className='!rounded-none'>Photo URL</span>
                                <input type="text" name='photo' required={true} placeholder="Photo URL" className="input input-bordered !rounded-none mb-6" />
                            </label>
                            <label className="input-group input-group-vertical ">
                                <span className='!rounded-none'>Email</span>
                                <input type="email" name='email' required={true} placeholder="Your Email" className="input input-bordered !rounded-none" />
                            </label>
                            <label className="input-group input-group-vertical mt-6">
                                <span className=' !rounded'>Password</span>
                                <input type="password" name='password' required={true} className=" !rounded-none input input-bordered" />
                            </label>
                        </div>
                        <button className="btn btn-outline mt-6 mx-auto block">Register</button>
                    </form>
                    <p className="text-red-500 mt-3">{error}</p>
                    <p className="mt-3 border-t-2 border-t-gray-700 text-center pt-3">
                        Already have an Account? <Link className='text-blue-500' to='/login'>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;