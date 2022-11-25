import React from 'react';

const CategoriesCart = ({ data }) => {
    const { price, name, post, location, use, origin, seller, img } = data;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex '><span className='mr-10'>Original price: ${origin}</span><span>Price: ${price}</span></div>
                    <div className='flex'> <span className='mr-12'>Seller: {seller}</span> <span>Posted: {post}</span></div>
                    <div className='flex'><span className='mr-12'>Location: {location} </span> <span>used: {use}</span></div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCart;