import React from 'react';


const CategoriesCart = ({ data,setProducts }) => {
    const { price, name, post, location, use, origin, seller, img } = data;
    return (
        <section>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex '><span className='mr-10'>Original price: ${origin}</span><span>Price: ${price}</span></div>
                    <div className='flex'> <span className='mr-12'>Seller: {seller}</span> <span>Posted: {post}</span></div>
                    <div className='flex'><span className='mr-12'>Location: {location} </span> <span>used: {use}</span></div>
                    <div className="card-action">
                        <label
                            onClick={() => setProducts(data) }
                            htmlFor="book-modal"
                            className="btn btn-primary"
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesCart;