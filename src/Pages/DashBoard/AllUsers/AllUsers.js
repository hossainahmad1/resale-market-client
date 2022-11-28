import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {

    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://final-project-server-two.vercel.app/buyers')
            const data = await res.json()
            return data;
        }
    })



    return (
        <div>
            <div className="overflow-x-auto">
                <h3 className='text-3xl'>All Users</h3>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.select}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;