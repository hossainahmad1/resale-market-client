import React from 'react';

const HomeCart = () => {
    return (
        <div>
            <div className="card lg:card-side  shadow-xl mb-8">
                <figure><img className='w-1/2' src="https://www.gizmochina.com/wp-content/uploads/2022/08/Apple-iPhone-14-Pro-Colors.jpeg" alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title mt-10 mr-4">Apple Iphone 14 pro max</h2>
                    <p>Iphoen 14 pro max will have punch hole display and 48 tripple camera.</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCart;