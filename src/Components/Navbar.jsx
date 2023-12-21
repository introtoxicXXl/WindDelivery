import { Link, NavLink } from "react-router-dom";
import logo from "../assets/fav.png";
import './Navbar.css';
import useAuth from './../Hook/hook';

const Navbar = () => {
    const { user, handleSignOut, cartItems } = useAuth();

    return (
        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center flex text-xl italic font-semibold"><img src={logo} className="mr-1" alt="" /> WindDelivery</span>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Products</NavLink>
                        </li>
                        {
                            user &&
                            <>

                                <li>
                                    <NavLink to='/dashboard/profile' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Dashboard</NavLink>
                                </li>
                                <li>
                                    <Link to='/cart'>
                                        <div className="dropdown dropdown-end">
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                                <div className="indicator">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                                    <span className="badge badge-sm indicator-item">{cartItems.length}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/allProducts' className="block md:hidden py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">All Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/addProducts' className="block md:hidden py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Add Products</NavLink>
                                </li>

                            </>
                        }

                        {
                            user ?
                                <li className="block cursor-pointer py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" onClick={handleSignOut} >
                                    Sign Out
                                </li>
                                :
                                <li>
                                    <NavLink to='/login' className="block py-2 px-3 rounded bg-transparent md:p-0 text-[#224F34]" aria-current="page">Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;



