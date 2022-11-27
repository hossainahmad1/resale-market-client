import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';




const DashBoardLayout = () => {


    const { data: buyers = [] } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers')
            const data = await res.json()
            return data;
        }
    })
    console.log(buyers)


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        { <li><Link to='/dashboard'>My Orders</Link></li>}
                        {
                           
                            <>
                                <li><Link to='/dashboard/addtoproducts'>Add to Products</Link></li>
                                <li><Link to='/dashboard/myallproducts'>My Products</Link></li>
                            </>
                           
                        }
                       

                        <li><Link to='/dashboard/allusers'>All Users</Link></li>
                        <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                        <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;