import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllBuyer = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://final-project-server-two.vercel.app/buyers/buyer`)
            const data = await res.json()
            return data;
        }
    })

    const axios = require('axios');
    const handleDeleteBuyer = id => {
        axios.get(`https://final-project-server-two.vercel.app/buyers/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (res.data.data.deletedCount > 0) {
                    toast.success('deleted successfully')
                    console.log(res.data.data)
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className='text-3xl'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>select</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.select}</td>
                                <td><button onClick={() => handleDeleteBuyer(buyer._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;