import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Navbar from '../Shared/Navbar/Navbar';




const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [buyer, setBuyers] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/buyerss?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBuyers(data)
            })
    }, [user?.email])


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
                        {
                            buyer?.select === 'buyer' &&
                            <li><Link to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            buyer?.select === 'seller' &&
                            <>
                                <li><Link to='/dashboard/addtoproducts'>Add to Products</Link></li>
                                <li><Link to='/dashboard/myallproducts'>My Products</Link></li>
                            </>
                        }
                        {
                            buyer?.select === 'admin' &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/allseller'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyer'>All Buyer</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;