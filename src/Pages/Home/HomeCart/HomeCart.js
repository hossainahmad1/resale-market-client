import React from 'react';

const HomeCart = () => {
    return (
        <div>
            <div className="card lg:card-side  shadow-xl mb-8">
                <figure><img className=' h-[285px]' src="https://diamu.com.bd/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-and-14-Pro-Max-4.jpg" alt="Album" /></figure>
                <figure><img className=' h-[285px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSs-wO8Of0IQFOn34TeCsKzEkBzAzMEvvLdw&usqp=CAU" alt="Album" /></figure>
                <div className="card-body ml-14">
                    <h2 className="card-title mt-8">Apple Iphone 14 pro max</h2>
                    <p> Leatest Phone Iphone 14 pro max will have punch hole display <br /> and 48 tripple camera.Price 48000.It is price of India. 8GB/128GB</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCart;