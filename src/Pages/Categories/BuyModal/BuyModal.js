import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BuyModal = ({ products, setProducts }) => {
    const { user } = useContext(AuthContext)
    const { name, price, location } = products;

    const handleModal = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const email = form.email.value;
        const location = form.location.value;

        const buying = {
            name,
            brand,
            email,
            location
        }
        console.log(buying)
        setProducts(null)
    }



    return (
        <>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleModal} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='brand' type="text" disabled value={name} className="input w-full input-bordered " />
                        <input name='price' type="text" disabled value={price} className="input w-full input-bordered " />
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered " />
                        <input name='email' type="text" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered " />
                        <input name='location' type="text"  placeholder="location" className="input w-full input-bordered " /><br />
                        <input className='btn btn-primary w-full input-bordered' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BuyModal;