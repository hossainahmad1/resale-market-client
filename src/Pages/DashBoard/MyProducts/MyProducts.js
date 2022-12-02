import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';



const MyProducts = () => {
    const { user } = useContext(AuthContext);


    //Query the email and show the products
    const url = `https://final-project-server-two.vercel.app/buyings?email=${user?.email}`;
    const { data: buyings = [], refetch } = useQuery({
        queryKey: ['buyings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
            const data = await res.json()
            return data;
        }
    })


    // Delete Product
    const handleDeleteProducts = id => {
        fetch(`https://final-project-server-two.vercel.app/buyings/${id}`, {
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
            <h3 className='text-3xl'>My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyings?.map((buying, i) => <tr key={buying._id}>
                                <th>{i + 1}</th>
                                <td>{buying.brand}</td>
                                <td>{buying.price}</td>
                                <td>{buying.email}</td>
                                <td>{buying.phone}</td>
                                <td><button onClick={() => handleDeleteProducts(buying._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;