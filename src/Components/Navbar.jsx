import { Link, NavLink } from "react-router-dom";
import logo from "../assets/fav.png";
import './Navbar.css';
import useAuth from './../Hook/hook';

const Navbar = () => {
    const { user, handleSignOut} = useAuth();

    return (

        <nav>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse ">
                    <span className="self-center flex text-xl italic font-bold text-pink-800"><img src={logo} className="mr-1" alt="" /> WindDelivery</span>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 items-center">
                        <li>
                            <NavLink to='/' className="block py-2 px-3 rounded bg-transparent md:p-0 font-bold text-pink-800" aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/foods' className="block py-2 px-3 rounded bg-transparent md:p-0 font-bold text-pink-800" aria-current="page">All Foods</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className="block py-2 px-3 rounded bg-transparent md:p-0 font-bold text-pink-800" aria-current="page">Blogs</NavLink>
                        </li>
                        {
                            user ?
                                <li className="block cursor-pointer py-2 px-3 rounded bg-transparent md:p-0 font-bold text-pink-800" onClick={handleSignOut} >
                                    Sign Out
                                </li>
                                :
                                <li>
                                    <NavLink to='/login' className="block py-2 px-3 rounded bg-transparent md:p-0 font-bold text-pink-800" aria-current="page">Login</NavLink>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;



