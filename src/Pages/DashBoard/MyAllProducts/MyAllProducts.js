import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const MyAllProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [],refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })


    const handleDeleteProducts = id => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully')
                    console.log(data)
                    refetch()
                }
            })
    }


    return (
        <div>
            <h3 className='text-3xl'>My Products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product.price}</td>
                                <td><button className='btn btn-sm btn-primary'>Advertis</button></td>
                                <td><button onClick={() => handleDeleteProducts(product._id)} className='btn btn-sm'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllProducts;