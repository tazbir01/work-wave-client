import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../../src/assets/home/logo.png"
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import useHr from "../../../hooks/useHr";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logout } = useAuth()
    const [isHr]= useHr()
    const [isAdmin] = useAdmin()
    const [showItem, setShowItem] = useState(false)
    const handleButton = () => {
        setShowItem(!showItem)
    }

    const handleLogout = () => {
        logout()
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        {
            user && isAdmin && <li><Link to='/dashboard/all-employees'>Dashboard</Link></li>
        }
        {
            user && isHr && <li><Link to='/dashboard/employees'>Dashboard</Link></li>
        }
        {
            user?.role === "employee" && <li><Link to='/dashboard/work-sheet'>Dashboard</Link></li>
        }
        
        {
            user ? <></>
                : <li><Link to='/register'>Register</Link></li>
        }
    </>
    return (
        <div className="navbar bg-black text-white fixed z-10 bg-opacity-60">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex items-center">
                    <img className="w-14" src={logo} alt="" />
                    <a className="font-semibold text-xl">WorkWave</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end md: mr-10">
                {
                    user ? <div onClick={handleButton} className="avatar">
                        <div className="w-12 flex items-center justify-center rounded-full  ring ring-black ring-offset-base-100">
                            <img src={user.photoURL} />
                        </div>
                        {
                            showItem && <div className="absolute top-10 text-black bg-white rounded-lg">
                                <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
                            </div>
                        }
                    </div>
                        : <div onClick={handleButton}>
                            <p><IoMdPerson className="text-4xl"></IoMdPerson></p>
                            {
                                showItem && <div className="absolute flex items-center justify-center w-20 h-20 top-12 text-black bg-white rounded-lg">
                                    <Link to="/login">Login</Link>
                                </div>
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;