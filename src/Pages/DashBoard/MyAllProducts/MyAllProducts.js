import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const MyAllProducts = () => {
    const { user } = useContext(AuthContext)
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user.email}`)
            const data = await res.json()
            return data;
        }
    })




    return (
        <div>
            <h3>this is a my all products</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Favorite Color</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product,i) => <tr key={product._id}>
                                <th>{i+1}</th>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAllProducts;