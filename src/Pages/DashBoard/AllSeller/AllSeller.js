import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://final-project-server-two.vercel.app/buyers/seller`)
            const data = await res.json()
            return data;
        }
    })


    const handleDeleteSeller = id => {
        fetch(`https://final-project-server-two.vercel.app/buyers/${id}`, {
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


    const handleVerify = id => {
        fetch(`https://final-project-server-two.vercel.app/buyers/verify/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }




    return (
        <div>
            <h1 className='text-3xl'>All Sellers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td><button onClick={() => handleVerify(buyer._id)} className='btn btn-sm btn-primary'>Verify</button></td>
                                <td><button onClick={() => handleDeleteSeller(buyer._id)} className='btn btn-sm'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;