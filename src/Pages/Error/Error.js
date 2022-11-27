import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="card w-96  mx-auto my-40  bg-base-100 shadow-xl image-full">
            <figure><img className='' src="https://img.freepik.com/premium-vector/404-error-page-found-banner-with-cable-socket-cord-plug-website-blue_249405-130.jpg?w=2000" alt="Shoes" /></figure>
            <div className="card-body mt-16">
                <h2 className='text-4xl text-center'>404</h2>
                <p className='text-2xl text-center'>Page Not Found..!!!</p>
            </div>
        </div>
    );
};

export default Error;