import React from 'react';
import { Link } from 'react-router-dom';





const Products = () => {
    
    return (
        <div>
            <h2 className='text-3xl text-center text-violet-500 mt-6'> Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-9'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/08/02/2527099-apple-iphone-14-series.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions mt-16 items-center justify-center">
                            <Link to= '/categories/iphone'  className="btn btn-primary">Iphone</Link>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQMwk7CCKINfWumgSuvD3w0b0g8BPJMZnIbQ&usqp=CAU" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions mt-16 items-center  justify-center">
                            <Link to='/categories/samsung'  className="btn btn-primary">Samsung</Link>
                        </div>
                    </div>
                </div>
                <divi className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/12/vivo-v23-series.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions mt-16 items-center justify-center">
                            <Link to='/categories/vivo' className="btn btn-primary">Vivo</Link>
                        </div>
                    </div>
                </divi>
            </div>
        </div>
    );
};

export default Products;