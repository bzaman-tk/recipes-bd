import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaMapPin, FaPhone, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer-wrap bg-black py-9'>
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-4 gap-4 px-5 sm:px-0">
                    <div className='text-center sm:text-left'>
                        <Link to='/' className="font-bold normal-case text-2xl">Recipes <span className="text-green-700">B<span className="text-red-700">D</span></span></Link>
                        <p className="short-des mt-4 text-sm">"Recipes BD" is a vibrant Bangladeshi restaurant that brings the flavors and traditions of Bangladesh to your plate. </p>
                        <p className="justify-center sm:justify-start address mt-3 flex gap-2 items-center"><FaMapMarkerAlt /> Nabigonj, Hobigonj, Sylhet, Bangladesh</p>
                        <p className="justify-center sm:justify-start email-address my-2 flex gap-2 items-center"><FaEnvelope /> example@ex.com, example@ex.com</p>
                        <p className="justify-center sm:justify-start phone-no flex gap-2 items-center"><FaPhone /> +880 1234 4454, +880 1234 4454</p>
                    </div>
                    <div></div>
                    <div></div>
                    <div>
                        <h2 className='text-lg font-bold mb-4 pb-1 border-b-2 border-gray-800'>Newslatter</h2>
                        <p className="my-4 pr-3">Subscribe out newslatter to get weekly email for new Recipes</p>
                        <input type="text" placeholder="Email Here" className="input   input-success w-full max-w-xs rounded-none" />
                        <div className="social-wrap my-9 flex gap-4 justify-start items-center text-2xl">
                            <Link><FaFacebook /></Link>
                            <Link><FaTwitter /></Link>
                            <Link><FaInstagram /></Link>
                        </div>
                    </div>
                </div>
                <p className="text-center mt-9">Copyright &copy; 2023 | All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;