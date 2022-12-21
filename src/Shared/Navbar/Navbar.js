import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleSignOut = () => {
        logout()
            .then(() => { })
            .catch(err => console.log(err))
    }


    const menuItems = <>
        <li><Link to="/" className='text-xl font-medium rounded-lg'>Home</Link></li>
        <li><Link to="/dashboard" className='text-xl font-medium rounded-lg'>DashBoard</Link></li>
        <li><Link to="/blog" className='text-xl font-medium rounded-lg'>blog</Link></li>
    </>


    return (
        <div className="navbar bg-orange-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl">BikroyBaba</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        user?.email ?
                            <li><Link onClick={handleSignOut} className='text-xl font-medium rounded-lg'>SignOut</Link></li>
                            :
                            <li><Link to="/login" className='text-xl font-medium rounded-lg'>login</Link></li>
                    }
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;