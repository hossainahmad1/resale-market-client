import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const AddToProducts = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const seller = form.seller.value;
        const name = form.name.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const email = form.email.value;
        const brand = form.brand.value;
        const post = form.post.value;
        const phone = form.phone.value;
        const img = form.img.value;
        const use = form.use.value;
        const location = form.location.value;

        const products = {
            name, brand, email, img, use, origin, post, verify: false, phone, location, price, seller
        }
        console.log(products)

        fetch('https://final-project-server-two.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('products added successfully');
                    console.log(data)
                    navigate('/dashboard/myallproducts')
                }
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-10 mb-10'>
                <h3 className='text-3xl'>Add A Products</h3>
                <input name='seller' type="text" placeholder="User Name" className="input w-full max-w-lg  input-bordered " required />
                <input name='name' type="text" placeholder="Product Name" className="input w-full max-w-lg input-bordered " required />
                <input name='price' type="text" placeholder="Product Price" className="input w-full max-w-lg input-bordered " required />
                <input name='origin' type="text" placeholder="Origin Price" className="input w-full max-w-lg input-bordered " required />
                <input name='email' type="email" placeholder="email" disabled defaultValue={user?.email} className="input w-full max-w-lg input-bordered " required />
                <select name='brand' className="select select-bordered w-full max-w-lg" required>
                    <option>Select your category</option>
                    <option>iphone</option>
                    <option>samsung</option>
                    <option>vivo</option>
                </select>
                <input name='img' type="text" placeholder="Photo URL" className="input w-full max-w-lg input-bordered " required />
                <input name='use' type="text" placeholder="Used" className="input w-full max-w-lg input-bordered " required />
                <input name='post' type="text" placeholder="Post Date" className="input w-full max-w-lg input-bordered " required />
                <input name='phone' type="text" placeholder="Phone Number" className="input w-full max-w-lg input-bordered " required />
                <input name='location' type="text" placeholder="location" className="input w-full max-w-lg input-bordered " required />
                <input className='btn btn-primary w-full max-w-lg input-bordered' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddToProducts;