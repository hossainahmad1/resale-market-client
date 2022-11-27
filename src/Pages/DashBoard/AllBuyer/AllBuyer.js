import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';


const AllBuyer = () => {

    const { data: buyers=[],refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buyers/buyer`)
            const data = await res.json()
            return data;
        }
    })

    const handleDeleteBuyer = id => {
        fetch(`http://localhost:5000/buyers/${id}`, {
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
            <h1 className='text-3xl'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Favorite Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer,i) => <tr>
                                <th>{i+1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>Blue</td>
                                <td><button onClick={() =>  handleDeleteBuyer(buyer._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;